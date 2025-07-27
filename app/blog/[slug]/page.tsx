import { client } from "@/app/utils/sanityClient";
import styles from "./page.module.scss";
import { SanityDocument } from "next-sanity";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const options = { next: { revalidate: 30 } };

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    await params,
    options
  );

  return {
    title: `Neh Joshi | ${post?.title}` || "Blog Post",
    description: post?.description || "Read this blog post.",
  };
}

export default async function BlogPost({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
    const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    await params,
    options
  );

  return (
    <main className={styles.container}>
      <section className={styles.postContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.body}>
          <PortableText value={post.body} />
        </div>
      </section>
    </main>
  );
}
