import React from "react";
import styles from "./Eventcard.module.css";

const EventCard = ({ name, date, venue, desc, link, image, index }) => {
  return (
    <>
      <div className={styles.containerClass}>
        <div className={styles.content}>
          <div className={styles.heading}>{name}</div>
          <div className={styles.label}>
            <p className={styles.date}>{date}</p>
            <p className={styles.desc}>{desc}</p>
          </div>
        </div>
        <div className={styles.imageDiv}><img className={styles.img} src={`..${image}`} /></div>
        {/* <div className={styles.img2}><img src={img2}></img></div> */}
      </div>
    </>
  );
};

export default EventCard;
