import styles from "./TeamCard.module.css";
import twitterLogo from "../../../assets/Team/Socials_Logo/linkedin.svg";
import linkedinLogo from "../../../assets/Team/Socials_Logo/twitter.svg";

const TeamCard = ({ Name, designation, index, twitter, linkedin, image }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.details}>
        <div className={styles.name}>{Name}</div>
        <div className={styles.designation}>{designation}</div>
        <div className={styles.socials}>
          <a href={twitter} target={'_blank'}><img src={twitterLogo} alt="" /></a>
          <a href={linkedin} target={'_blank'}><img src={linkedinLogo} alt="" /></a>
        </div>
      </div>
        <div className={styles.images}>
          <img className={styles.image} src={`..${image}`} />
        </div>
    </div>
  );
};

export default TeamCard;