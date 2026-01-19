"use client";

import Link from "next/link";
import styles from "./FeaturedProjects.module.css";

export default function FeaturedProjects() {
    const projects = [
        {
            id: 1,
            title: "Green Valley Apartments",
            location: "Saravanampatti, Coimbatore",
            status: "ONGOING",
            statusColor: "gold",
            type: "2/3 BHK",
            action: "Enquire Now",
            image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2670&auto=format&fit=crop"
        },
        {
            id: 2,
            title: "Evergreen Heights",
            location: "Thudiyalur, Coimbatore",
            status: "COMPLETED",
            statusColor: "green",
            type: "Luxury Villas",
            action: "Sold Out",
            image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2671&auto=format&fit=crop"
        },
        {
            id: 3,
            title: "The Nexus Tech Park",
            location: "IT Corridor, Coimbatore",
            status: "COMING SOON",
            statusColor: "blue",
            type: "Office Spaces",
            action: "Pre Booking Open",
            image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2670&auto=format&fit=crop"
        }
    ];

    return (
        <section className={`section ${styles.projectsSection}`} id="projects">
            <div className={`container ${styles.container}`}>
                <div className={styles.header}>
                    <div>
                        <div className={styles.label}>Portfolio</div>
                        <h2 className={styles.heading}>Featured Projects</h2>
                    </div>
                    <Link href="#all-projects" className={styles.viewAllBtn}>
                        View All Projects →
                    </Link>
                </div>

                <div className={styles.grid}>
                    {projects.map((project) => (
                        <div key={project.id} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <div className={`${styles.statusBadge} ${styles[project.statusColor]}`}>
                                    {project.status}
                                </div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className={styles.cardImage}
                                />
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{project.title}</h3>
                                <div className={styles.location}>
                                    📍 {project.location}
                                </div>

                                <div className={styles.meta}>
                                    <span className={styles.type}>{project.type}</span>
                                    <span className={`${styles.action} ${project.action === 'Sold Out' ? styles.soldOut : ''}`}>
                                        {project.action}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
