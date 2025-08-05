"use client";
import styles from "./Header.module.scss";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <>
      <nav className={styles.container}>
        <Link className={styles.initials} href="/">
          NJ
        </Link>
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
        <GiHamburgerMenu
          className={styles.mobileNavMenu}
          onClick={() => setIsMobileNavOpen((prev) => !prev)}
        />
      </nav>
      {/* Mobile nav */}
      <div
        className={`${isMobileNavOpen ? styles.mobileNavContainer : styles.mobileNavContainerClosed}`}
      >
        <ul className={styles.mobileNavLinks}>
          <li className={styles.mobileNavLink}>
            <Link href="/">Resume</Link>
          </li>
          <li className={styles.mobileNavLink}>
            <Link href="/blog">Blog</Link>
          </li>
          <li className={styles.mobileNavLink}>
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
