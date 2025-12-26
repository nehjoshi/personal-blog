'use client';
import { useState } from 'react';

import styles from './BlogComment.module.scss';

const RECIPIENT = 'nehjoshi5@gmail.com';

type PropTypes = {
  title: string;
};

export default function BlogComment({ title }: PropTypes) {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');

  const handleSend = () => {
    const subject = `New Comment for ${title} from ${name}`;
    const mailLink = `mailto:${RECIPIENT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.open(mailLink, '_blank');
  };
  return (
    <section className={styles.feedbackContainer}>
      <h2>Have some thoughts?</h2>
      <p>
        I&apos;d love to hear what you think of this post! Enter your thoughts
        in the box below, and click the{' '}
        <span className={styles.sendSpan}>Send</span> button to send me an
        email.
      </p>
      <label htmlFor="commenter-name">Your Name</label>
      <input
        className={styles.nameInput}
        id="commenter-name"
        placeholder="John Doe"
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="user-comment">Message</label>
      <textarea
        className={styles.textArea}
        id="user-comment"
        placeholder="Good post. I wish you had included..."
        rows={5}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className={styles.sendButton} onClick={handleSend}>
        Send
      </button>
    </section>
  );
}
