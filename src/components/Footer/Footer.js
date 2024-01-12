import styles from "./Footer.module.css";
import LocationIcon from "../../assets/Footer/Vector.png";
import Cube from "../../assets/Footer/Cube.png";
import logo from "../../assets/logo.svg";

function Footer() {
  return (
    <>
      <div className={`${styles.footer}`}>
        <div className={`${styles.footerItem1}`}>
          <h1>DEMYSTIFYING ONE</h1>
          <div className={styles.cubeText}>
            <img src={Cube} className={`${styles.cube}`} alt="" />
            <h1>BLOCK AT A TIME</h1>
          </div>
          <div className={styles["email"]}>
            Contact us at: blocsoc.acm@iitr.ac.in
          </div>
        </div>
        <div className={`${styles.footerItem2}`}>
          {/* <img src={logo} alt="" width={64} height={64} /> */}
          <div className={styles.footerSection}>
            <div className={styles.footerHeader}>Navigation</div>
            <div className={styles.links}>
              <a href="/">Home</a>
              <a href="/projects">Projects</a>
              <a href="/events">Events</a>
              <a href="/resources">Resources</a>
              <a href="/team">Team</a>
            </div>
          </div>
          <div className={styles.footerSection}>
            <div className={styles.footerHeader}>Socials</div>
            <div className={styles.links}>
              <a href="https://www.instagram.com/blocsociitr/">Instagram</a>
              <a href="https://www.linkedin.com/company/blocsociitr/">
                LinkedIn
              </a>
              <a href="">Twitter</a>
              <a href="">Discord</a>
              <a href="">Medium</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
