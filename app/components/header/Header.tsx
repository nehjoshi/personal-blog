import styles from "./Header.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <nav className={styles.container}>
      <Link className={styles.initials} href="/">NJ</Link>
      <ul className={styles.navLinks}>
        <li className={styles.navLink}>
          <Link href="/">Resume</Link>
        </li>
        <li className={styles.navLink}>
          <Link href="/blog">Blog</Link>
        </li>
        <li className={styles.navLink}>
          <Link href="/">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
