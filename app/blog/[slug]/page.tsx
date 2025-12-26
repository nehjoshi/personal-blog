import { PortableText } from '@portabletext/react';
import { Metadata } from 'next';

import { getOne } from '@/app/api/getOne';
import BlogComment from '@/app/components/blogComment/BlogComment';

import styles from './page.module.scss';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const post = await getOne((await params).slug);

  return {
    title: `Neh Joshi | ${post?.title}` || 'Blog Post',
    description: post?.description || 'Read this blog post.',
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await getOne((await params).slug);

  return (
    <main className={styles.container}>
      <section className={styles.postContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.body}>
          <PortableText value={post.body} />
        </div>
        <hr className={styles.divider} />
      </section>
      <BlogComment title={post.title} />
    </main>
  );
}
