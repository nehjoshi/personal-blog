import Image from 'next/image';
import Link from 'next/link';

import { Post } from '@/app/blog/page';
import styles from '@/app/blog/page.module.scss';
import { urlFor } from '@/app/utils/urlFor';

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

export default BlogListItem;
