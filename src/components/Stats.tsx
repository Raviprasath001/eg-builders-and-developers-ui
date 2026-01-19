import Image from "next/image";
import Link from "next/link";
import styles from "./Stats.module.css";

export default function Stats() {
    return (
        <section className={`section ${styles.statsSection}`} id="about">
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <div className={styles.label}>Since 1998</div>
                    <h2 className={styles.heading}>Building Legacies Since 1998</h2>
                    <p className={styles.description}>
                        With over two decades of experience, Evergreen Builders & Developers stands as a pillar of trust and quality in the real estate market of Coimbatore. We are committed to delivering premium residential and commercial spaces on time, ensuring that every square foot we build adds value to your life.
                    </p>

                    <div className={styles.metrics}>
                        <div className={styles.metric}>
                            <span className={styles.number}>25+</span>
                            <span className={styles.subtext}>Years Experience</span>
                        </div>
                        <div className={styles.metric}>
                            <span className={styles.number}>150+</span>
                            <span className={styles.subtext}>Projects Completed</span>
                        </div>
                        <div className={styles.metric}>
                            <span className={styles.number}>2k+</span>
                            <span className={styles.subtext}>Happy Families</span>
                        </div>
                    </div>

                    <Link href="#story" className={styles.link}>
                        Read Our Story →
                    </Link>
                </div>

                <div className={styles.imageContainer}>
                    <img
                        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2670&auto=format&fit=crop"
                        alt="Construction Site Meeting"
                        className={styles.image}
                    />
                </div>
            </div>
        </section>
    );
}
