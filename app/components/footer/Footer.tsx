import Link from 'next/link';
import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

import styles from './Footer.module.scss';

const linkProps = {
  target: '_blank',
  referrerPolicy: 'no-referrer' as React.HTMLAttributeReferrerPolicy,
  rel: 'noopener noreferrer',
};

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.left}></div>
      <div className={styles.center}>
        <span>Neh Joshi | Portfolio</span>
      </div>
      <div className={styles.socialIconContainer}>
        <Link href={'https://instagram.com/neh.joshi.98'} {...linkProps}>
          <FaInstagram className={styles.socialIcon} />
        </Link>
        <Link href={'https://linkedin.com/in/nehjoshi'} {...linkProps}>
          <FaLinkedin className={styles.socialIcon} />
        </Link>
        <Link href={'https://github.com/nehjoshi'} {...linkProps}>
          <FaGithub className={styles.socialIcon} />
        </Link>
      </div>
    </footer>
  );
}
