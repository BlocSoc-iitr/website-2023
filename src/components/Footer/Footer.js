import styles from "./Footer.module.css";
import LocationIcon from "../../assets/Footer/Vector.png";
import Cube from "../../assets/Footer/Cube.png";

function Footer() {
  return (
    <>
      <div className={`${styles.footer}`}>
        <div className={`${styles.footerItem1}`}>
          <h1>DEMYSTIFYING ONE</h1>
          <div className={styles["cube-heading"]}>
            <img src={Cube} className={`${styles.cube}`} alt="" />
            <h1>BLOCK AT A TIME</h1>
          </div>
        </div>
        <div className={`${styles.footerItem2}`}>
          <div className={styles.footerText}>Start a Conversation</div>
          <div className={styles.email}>blocsoc.acm@iitr.ac.in</div>
          <div className={styles.address}>
            <img src={LocationIcon} alt=""></img>ACM Room, Ground floor, SAC
            Building, IIT Roorkee, Uttarakhand-247667
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
