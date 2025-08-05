import Image from "next/image";
import styles from "./page.module.scss";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Neh Joshi | Software Engineer</title>
        <meta
          name="description"
          content="Learn more about Neh Joshi's experience as a software engineer. See his projects, resume and personal blog"
        />
      </Head>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.left}>
            <p className={styles.helloText}>
              Hello, I&apos;m <span>Neh</span>.
            </p>
            <h1 className={styles.title}>Software Engineer</h1>
            <p className={styles.aboutText}>
              With over 2.5 years of experience working on scalable products
              used by millions across the world, I specialize in optimizing
              backends and infrastructure.{" "}
            </p>
            <div className={styles.row}>
              <button className={`${styles.btn} ${styles.learnMoreBtn}`}>
                Learn More
              </button>
              <a download href="/Resume.pdf">
                <button className={`${styles.btn} ${styles.getResumeBtn}`}>
                  Get Resume
                </button>
              </a>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.imageContainer}>
              <Image
                src={"/neh.png"}
                fill
                alt=""
                className={styles.profileImg}
              />
            </div>
          </div>
        </section>

        <section className={styles.section2}>
          
        </section>
      </main>
    </>
  );
}
