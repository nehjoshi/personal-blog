import styles from "./page.module.scss";

interface Post {
  title: string;
  createdAt: string;
  description: string;
  slug: string;
}

const ALL_POSTS: Post[] = [
  {
    title: "Learnings from my 6-month journey to join Canonical",
    createdAt: "2025-07-25",
    description:
      "I applied to Canonical three times in 2025. The first time I was rejected after getting to the last round, the second time I was rejected instantly...",
    slug: "learnings-from-joining-canonical",
  },
  {
    title: "Learnings from my 6-month journey to join Canonical",
    createdAt: "2025-07-25",
    description:
      "I applied to Canonical three times in 2025. The first time I was rejected after getting to the last round, the second time I was rejected instantly...",
    slug: "learnings-from-joining-canonical-again",
  },
];

export default function Blog() {
  return (
    <main className={styles.container}>
      <section className={styles.centerWrapper}>
        <h1 className={styles.title}>Personal Blog</h1>
        <p className={styles.subtitle}>
          My learnings on tech, productivity, and life in general. I try to post
          once a week, but being consistent is a challenge.
        </p>
        <ul className={styles.blogList}>
          {ALL_POSTS.map((post) => (
            <li className={styles.blogListItem} key={post.slug}>
              <div className={styles.left}>
                <div className={styles.imageContainer}></div>
              </div>
              <div className={styles.right}>
                <h2 className={styles.postTitle}>{post.title}</h2>
                <p className={styles.postDesc}>{post.description}</p>
                <span className={styles.postDate}>{post.createdAt}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
