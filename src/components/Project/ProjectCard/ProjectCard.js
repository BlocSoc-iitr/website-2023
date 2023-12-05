import React from "react";
import styles from "./ProjectCard.module.css";
import Vector from "../../../assets/Project/Vector.svg";

const ProjectCard = ({ heading, label, desc, link, image, index }) => {
  // const handleRightClick = () => {
  //   index = index + 1;
  //   console.log(index);
  // }

  // const handleLeftClick = () => {
  //   index = index - 1;
  //   console.log(index);
  // }

  return (
    <div className={styles.CardContainer}>
      <div className={styles["img-container"]}>
        <img className={styles.img} src={`..${image}`} />
      </div>
      <div className={styles.content}>
        <div className={styles.heading}>{heading}</div>
        <p className={styles.desc}>{desc}</p>
        <div className={styles.labels}>
          {label.map((m, index) => {
            return <p key={index}>{m.toString()}</p>;
          })}
        </div>
        <div className={styles.link}>
          <a href={link} target="_blank">
            View Full Project <img src={Vector} height="20px" />
          </a>
          {/* <div>
          <img src={ArrowLeft} className={styles.arrowLeft} onClick={handleLeftClick}/>
          <img src={ArrowRight} className={styles.arrowRight} onClick={handleRightClick}/>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
