import styles from "./Contact.module.css";

export default function Contact() {
    return (
        <section className={styles.contactSection} id="contact">
            <div className={styles.overlay} />
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <h2 className={styles.heading}>Ready to Build Your Dream?</h2>
                    <p className={styles.subtext}>
                        Contact us today for a free consultation and let's turn your vision into incredible reality. Get a quote within 24 hours.
                    </p>

                    <div className={styles.actionButtons}>
                        <button className={styles.btnGold}>Get a Free Quote</button>
                        <button className={styles.btnOutline}>Call +91 98765 43210</button>
                    </div>
                </div>

                <div className={styles.formCard}>
                    <h3 className={styles.formTitle}>Request a Call Back</h3>
                    <form className={styles.form}>
                        <input type="text" placeholder="Full Name" className={styles.input} />
                        <input type="email" placeholder="Email Address" className={styles.input} />
                        <input type="tel" placeholder="Phone Number" className={styles.input} />
                        <select className={styles.input}>
                            <option>Residential Construction</option>
                            <option>Commercial Projects</option>
                            <option>Renovation</option>
                            <option>Other</option>
                        </select>
                        <button type="submit" className={styles.submitBtn}>Submit Request</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
