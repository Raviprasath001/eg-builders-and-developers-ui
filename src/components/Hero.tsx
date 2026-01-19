import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.hero}>
            {/* Background Image Placeholder or Element */}
            <div className={styles.heroBackground}>
                {/* In a real scenario, use Next.js Image component with a high-res asset */}
                <div className={styles.overlay} />
            </div>

            <div className={`container ${styles.heroContainer}`}>
                <div className={styles.content}>
                    <div className={styles.badge}>
                        <span className={styles.badgeIcon}>★</span> High Excellence
                    </div>

                    <h1 className={styles.headline}>
                        Trusted Builders & <br />
                        Developers in <br />
                        <span className={styles.highlight}>Coimbatore</span>
                    </h1>

                    <p className={styles.subheadline}>
                        Building Dreams, Delivering Trust with over 25 years of excellence in
                        residential and commercial construction across South India.
                    </p>

                    <div className={styles.actions}>
                        <Link href="#contact" className={`${styles.btn} ${styles.btnPrimary}`}>
                            Enquire Now
                        </Link>
                        <Link href="#projects" className={`${styles.btn} ${styles.btnOutline}`}>
                            View Projects
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
