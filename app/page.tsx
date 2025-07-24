import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.left}>
        <p className={styles.helloText}>
          Hello, I'm <span>Neh</span>.
        </p>
        <h1 className={styles.title}>Software Engineer</h1>
        <p className={styles.aboutText}>
          With over 2.5 years of experience working on scalable products used by
          millions across the world, I specialize in optimizing backends and
          infrastructure.{" "}
        </p>
        <div className={styles.row}>
          <button className={`${styles.btn} ${styles.learnMoreBtn}`}>
            Learn More
          </button>
          <a download href="/Resume.pdf" >
            <button className={`${styles.btn} ${styles.getResumeBtn}`}>
              Get Resume
            </button>
          </a>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.imageContainer}>
          <Image src={"/neh.png"} fill alt="" className={styles.profileImg} />
        </div>
      </div>
    </main>
  );
}
