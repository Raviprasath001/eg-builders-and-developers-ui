import Link from "next/link";
import styles from "./LatestInsights.module.css";

export default function LatestInsights() {
    const posts = [
        {
            id: 1,
            title: "Why 2024 is the Best Time to Invest in Coimbatore Real Estate",
            category: "MARKET TRENDS",
            date: "Oct 15, 2024",
            image: "https://images.unsplash.com/photo-1460472178825-e5240623afd5?q=80&w=2669&auto=format&fit=crop"
        },
        {
            id: 2,
            title: "5 Sustainable Home Design Trends for Modern Living",
            category: "DESIGN",
            date: "Sep 28, 2024",
            image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=2525&auto=format&fit=crop"
        },
        {
            id: 3,
            title: "Checklist for First-Time Home Buyers",
            category: "GUIDE",
            date: "Sep 10, 2024",
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2573&auto=format&fit=crop"
        }
    ];

    return (
        <section className={`section ${styles.insightsSection}`} id="blog">
            <div className={`container ${styles.container}`}>
                <div className={styles.header}>
                    <h2 className={styles.heading}>Latest Insights</h2>
                    <Link href="#blog-all" className={styles.viewAll}>View Blog →</Link>
                </div>

                <div className={styles.grid}>
                    {posts.map((post) => (
                        <div key={post.id} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <img src={post.image} alt={post.title} className={styles.image} />
                            </div>
                            <div className={styles.content}>
                                <div className={styles.meta}>
                                    <span className={styles.category}>{post.category}</span>
                                    <span className={styles.date}>{post.date}</span>
                                </div>
                                <h3 className={styles.title}>{post.title}</h3>
                                <Link href={`#post-${post.id}`} className={styles.readMore}>
                                    Read Article
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
