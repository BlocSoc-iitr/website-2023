import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "./Resources.module.css";
import Blogs from "../../layout/Blogs/Blogs";

function Resources() {
  return (
    <>
      <Navbar />
      <h1 className={styles.ResourcesTitle}>Resources</h1>
      <div className={styles.heroContainer}>
        <hr className={styles.hr} />
        <Blogs />
      </div>
    </>
  );
}

export default Resources;
