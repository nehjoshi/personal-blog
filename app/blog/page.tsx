import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { getAll } from '../api/getAll';
import { formatDateToLongString } from '../utils/date';
import { urlFor } from '../utils/urlFor';
import styles from './page.module.scss';

export type Post = {
  title: string;
  createdAt: string;
  description: string;
  slug: string;
  imageUrl: SanityImageSource;
};

export const metadata: Metadata = {
  title: 'Neh Joshi | Personal Blog',
  description:
    "Neh Joshi's learnings on tech, productivity, and life in general.",
};

export default async function Blog() {
  const posts = await getAll();
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
                createdAt={formatDateToLongString(post.publishedAt)}
                description={post.description}
                imageUrl={post.image}
                key={post.slug}
                slug={post.slug.current}
                title={post.title}
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
      <Link className={styles.linkWrapper} href={`/blog/${slug}`}>
        <div className={styles.left}>
          <div className={styles.imageContainer}>
            <Image
              alt={`Cover image for blog post: ${title}`}
              className={styles.postImage}
              fill
              src={urlFor(imageUrl)!.url()}
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
