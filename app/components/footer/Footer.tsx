import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.scss";

export default function Footer() {
    return (
        <footer className={styles.container}>
            <div className={styles.left}></div>
            <div className={styles.center}>
                <span>Neh Joshi | Portfolio</span>
            </div>
            <div className={styles.socialIconContainer}>
                <FaInstagram className={styles.socialIcon}/>
                <FaLinkedin className={styles.socialIcon}/>
                <FaGithub className={styles.socialIcon} />
            </div>
        </footer>
    )
}