import styles from "./Testimonials.module.css";

export default function Testimonials() {
    const testimonials = [
        {
            id: 1,
            name: "Rajesh Kumar",
            role: "Homeowner, Green Valley",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            text: "Evergreen B&D delivered our dream home exactly as promised. The quality of construction and attention to detail is truly world-class. Highly recommended!",
            stars: 5
        },
        {
            id: 2,
            name: "Priya Sundaram",
            role: "Architect",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
            text: "Professionalism at its best! Their transparency with the legal framework and building construction quality has been appreciated by all our family.",
            stars: 5
        },
        {
            id: 3,
            name: "Suresh Menon",
            role: "Investor",
            image: "https://randomuser.me/api/portraits/men/85.jpg",
            text: "Their transparency regarding documents and timely delivery made the entire process smooth. A builder you can blindly rely upon.",
            stars: 5
        }
    ];

    return (
        <section className={`section ${styles.testimonialsSection}`}>
            <div className={`container ${styles.container}`}>
                <div className={styles.label}>Testimonials</div>
                <h2 className={styles.heading}>What Our Clients Say</h2>

                <div className={styles.grid}>
                    {testimonials.map((t) => (
                        <div key={t.id} className={styles.card}>
                            <div className={styles.stars}>
                                {"★".repeat(t.stars)}
                            </div>
                            <p className={styles.text}>"{t.text}"</p>
                            <div className={styles.author}>
                                <img src={t.image} alt={t.name} className={styles.avatar} />
                                <div>
                                    <div className={styles.name}>{t.name}</div>
                                    <div className={styles.role}>{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
