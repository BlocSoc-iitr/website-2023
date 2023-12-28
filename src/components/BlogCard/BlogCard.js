import React from "react";
import styles from "./BlogCard.module.css";

const BlogCard = ({index, heading ,link}) => {
  var cardContainer;  
  if (index % 2 === 0)
  cardContainer = styles.cardContainer1;
else
cardContainer = styles.cardContainer2;

    return (
    <div >
      <div className={cardContainer}>
        <a href={link}><div className={styles.content}>
        <div className={styles.heading}>{heading}</div>
        {/* <p className={styles.desc}>Join Our Discord (Link in Discription)</p> */}
        </div></a>
      </div>
      <div className={styles.blogFooter}>
        <h2>Blog</h2>
        <h1>{heading}</h1>
      </div>
      <hr/>
    </div>
  );
};

export default BlogCard;