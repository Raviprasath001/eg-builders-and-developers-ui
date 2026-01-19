import Link from "next/link";
import styles from "./Services.module.css";

export default function Services() {
    return (
        <section className={`section ${styles.servicesSection}`} id="services">
            <div className={`container ${styles.container}`}>
                <div className={styles.header}>
                    <div className={styles.label}>Our Expertise</div>
                    <h2 className={styles.heading}>Comprehensive Real Estate Solutions</h2>
                    <p className={styles.subheading}>
                        From concept to key, we handle every aspect of your construction needs.
                    </p>
                </div>

                <div className={styles.grid}>
                    {/* Card 1 */}
                    <div className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <img
                                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop"
                                alt="Residential Construction"
                                className={styles.cardImage}
                            />
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.icon}>🏠</div>
                            <h3 className={styles.cardTitle}>Residential Construction</h3>
                            <p className={styles.cardText}>
                                Custom homes tailored to your lifestyle. We ensure flawless execution from foundation to finishing touches.
                            </p>
                            <Link href="#residential" className={styles.cardLink}>
                                Learn More →
                            </Link>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <img
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop"
                                alt="Commercial Development"
                                className={styles.cardImage}
                            />
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.icon}>🏢</div>
                            <h3 className={styles.cardTitle}>Commercial Development</h3>
                            <p className={styles.cardText}>
                                Strategic retail and office spaces designed for business growth. Focusing on aesthetics and durability.
                            </p>
                            <Link href="#commercial" className={styles.cardLink}>
                                Learn More →
                            </Link>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <img
                                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2600&auto=format&fit=crop"
                                alt="Interiors & Renovation"
                                className={styles.cardImage}
                            />
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.icon}>🛠️</div>
                            <h3 className={styles.cardTitle}>Interiors & Renovation</h3>
                            <p className={styles.cardText}>
                                Transforming spaces with modern interior design and renovation services. Smart, stylish, and functional.
                            </p>
                            <Link href="#interiors" className={styles.cardLink}>
                                Read More →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
