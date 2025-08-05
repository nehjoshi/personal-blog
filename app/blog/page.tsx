import styles from "./page.module.scss";
import { type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../utils/sanityClient";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export interface Post {
  title: string;
  createdAt: string;
  description: string;
  slug: string;
  imageUrl: SanityImageSource;
}

function formatDateToLongString(isoDateStr: string): string {
  const date = new Date(isoDateStr);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return date.toLocaleDateString("en-US", options);
}

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, image, description}`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export const metadata: Metadata = {
  title: "Neh Joshi | Personal Blog",
  description:
    "Neh Joshi's learnings on tech, productivity, and life in general.",
};

export default async function Blog() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
  return (
    <>
      <main className={styles.container}>
        <section className={styles.centerWrapper}>
          <h1 className={styles.title}>Personal Blog</h1>
          <p className={styles.subtitle}>
            My learnings on tech, productivity, and life in general. I try to
            post once a week, but being consistent is a challenge.
          </p>
          <ul className={styles.blogList}>
            {posts.map((post) => (
              <BlogListItem
                key={post.slug}
                title={post.title}
                slug={post.slug.current}
                description={post.description}
                createdAt={formatDateToLongString(post.publishedAt)}
                imageUrl={post.image}
              />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

function BlogListItem({ title, slug, description, createdAt, imageUrl }: Post) {
  return (
    <li className={styles.blogListItem} key={slug}>
      <Link href={`/blog/${slug}`} className={styles.linkWrapper}>
        <div className={styles.left}>
          <div className={styles.imageContainer}>
            <Image
              src={urlFor(imageUrl)!.url()}
              className={styles.postImage}
              alt={`Cover image for blog post: ${title}`}
              fill
            />
          </div>
        </div>
        <div className={styles.right}>
          <h2 className={styles.postTitle}>{title}</h2>
          <p className={styles.postDesc}>{description}...</p>
          <span className={styles.postDate}>{createdAt}</span>
        </div>
      </Link>
    </li>
  );
}
