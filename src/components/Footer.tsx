import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.top}>
                    <div className={styles.column}>
                        <div className={styles.logo}>
                            <span className={styles.logoIcon}>⬢</span>
                            <span className={styles.logoText}>Evergreen B&D</span>
                        </div>
                        <p className={styles.desc}>
                            Passion, construction, and commitment. We don't just build homes; we build legacies. Trusted by thousands in Coimbatore/Surrounding/Area for quality, integrity, and on-time delivery since 1998.
                        </p>
                        <div className={styles.socials}>
                            {/* Social Placeholders */}
                            <span className={styles.socialIcon}>🐦</span>
                            <span className={styles.socialIcon}>📘</span>
                            <span className={styles.socialIcon}>📸</span>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <h4 className={styles.title}>Quick Links</h4>
                        <ul className={styles.list}>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="#about">About Us</Link></li>
                            <li><Link href="#projects">Our Projects</Link></li>
                            <li><Link href="#services">Services</Link></li>
                            <li><Link href="#contact">Contact</Link></li>
                            <li><Link href="#">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4 className={styles.title}>Services</h4>
                        <ul className={styles.list}>
                            <li><Link href="#">Residential Construction</Link></li>
                            <li><Link href="#">Commercial Development</Link></li>
                            <li><Link href="#">Interior Design</Link></li>
                            <li><Link href="#">Renovation</Link></li>
                            <li><Link href="#">Property Management</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4 className={styles.title}>Contact Us</h4>
                        <ul className={styles.contactList}>
                            <li className={styles.contactItem}>
                                <span>📍</span>
                                <span>123, Green Avenue, Saravanampatti,<br />Coimbatore - 641035,<br />India</span>
                            </li>
                            <li className={styles.contactItem}>
                                <span>📞</span>
                                <span>+91 98765 43210</span>
                            </li>
                            <li className={styles.contactItem}>
                                <span>✉️</span>
                                <span>info@evergreenbuilders.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>© 2024 Evergreen Builders, All rights reserved.</p>
                    <p>Designed with ❤️ by YourName</p>
                </div>
            </div>
        </footer>
    );
}
