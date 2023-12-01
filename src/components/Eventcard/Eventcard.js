import React from "react";
import styles from "./Eventcard.module.css";
import img2 from "../../assets/Events/Line 34.png";
import bluerect from "../../assets/Events/blue-rectangle.png";


const EventCard = ({ name, date, venue, desc, link,image, index }) => {
  return (
    <div className={styles.containerClass}>
      <div className={styles.vl}></div>
      <div className={styles.bluerect}><img src={bluerect}></img></div>

      <p className={styles.labelBlue}>Label</p>
      
      <div><img className={styles.img} src={`..${image}`} /></div>
      <div className={styles.content}>
        
        <div className={styles.heading}>{name}</div>
        <div className={styles.label}>
          <p className={styles.date}>
            {date} 
          </p>
        </div>
        <p className={styles.desc}>{desc}</p>
      </div>
      <p className={styles.viewTalk}>View Talk {">"}</p>
      <div className={styles.img2}><img src={img2}></img></div>
    </div>
  );
};

export default EventCard;