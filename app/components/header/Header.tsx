import Link from "next/link";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <nav className={styles.container}>
      <span className={styles.initials}>NJ</span>
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
