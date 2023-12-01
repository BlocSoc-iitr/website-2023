import React from "react";
import styles from "./BlogCard.module.css";

const BlogCard = ({image,heading,link}) => {
    var containerClass;
    return (
    <div className={styles.container}>
      <div className={styles.image} style={{ backgroundImage: `url(..${image})` }}></div>
      <div className={styles.content}>
        <div className={styles.heading1}>{heading}</div>
        <div className={styles.link}>{link}</div>
        <p className={styles.desc}>Join Our Discord (Link in Discord)</p>

      </div>
      <div className={styles.blogs}>Blogs</div>
      <div className={styles.heading2}>{heading}</div>
      <div className={styles.hl}></div>

    </div>
  );
};

export default BlogCard;