import React from "react";
import styles from "./AchivementsCard.module.css";

function AchivementsCard({ index, date, heading, desc }) {
    return (
        <div className={styles.AchivementsCard}>
            <div className={styles.AchivementsCardContainer}>
                <p className={styles.AchivementsCardDate}>{date}</p>
                <h1 className={styles.AchivementsCardHeading}>{heading}</h1>
                <p className={styles.AchivementsCardDesc}>{desc}</p>
            </div>
        </div>
    );
}

export default AchivementsCard;