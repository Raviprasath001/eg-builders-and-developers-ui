"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
            <div className={`container ${styles.navContainer}`}>
                <div className={styles.logo}>
                    <Link href="/">
                        <span className={styles.logoIcon}>⬢</span>
                        <span className={styles.logoText}>Evergreen B&D</span>
                    </Link>
                </div>

                <div className={styles.navLinks}>
                    <Link href="/" className={styles.navLink}>Home</Link>
                    <Link href="#projects" className={styles.navLink}>Projects</Link>
                    <Link href="#services" className={styles.navLink}>Services</Link>
                    <Link href="#about" className={styles.navLink}>About</Link>
                    <Link href="#blog" className={styles.navLink}>Blog</Link>
                </div>

                <div className={styles.navActions}>
                    <span className={styles.phone}>📞 +91 98765 43210</span>
                    <Link href="#contact" className={styles.ctaButton}>
                        Contact Us
                    </Link>
                </div>
            </div>
        </nav>
    );
}
