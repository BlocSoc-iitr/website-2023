import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "./Home.module.css";
import TitleBackground from "../../assets/TitleBackground.png";
import TitleGradient from "../../assets/TitleGradient.png";
import TitleLogo from "../../assets/TitleLogo.png";
import DiscriptionBackground from "../../assets/DiscriptionBackground.png";
import VideoBackground from "../../assets/VideoBackground.png";
import ButtonBackground from "../../assets/ButtonBackground.png";

function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.heroContainer}>
        <div className={styles.hero}>
          <div className={`${styles.heroItem} ${styles.title}`}>
          <img src={TitleBackground} className={styles.titleBackground} draggable="false"/>
          <img src={TitleGradient} className={styles.titleGradient} draggable="false"/>
          <img src={TitleLogo} className={styles.titleLogo} draggable="false"/>
          <h1>BLOCSOC IITR</h1>
          <p>Blockchain Society IIT Roorkee is an Open Community to increase interaction among Blockchain enthusiasts and bitcoin-dev enthusiasts and to spread the word about 'Web 3.0'</p>
          </div>
          <div className={`${styles.heroItem} ${styles.videoDiv}`}>
            <img src={VideoBackground} className={styles.videoBackground} draggable="false"/>
          </div>
          <div className={`${styles.heroItem} ${styles.description}`}>
            <h2>Creating magic since 2021</h2>
            <p>We are a group of Blockchain enthusiasts aiming to unite the blockchain community of IIT Roorkee, in a  to unite the blockchain community of IIT Roorkee, in a highly collaborative environment that is open for all. We are always open to collaborations on fun projects en for all. We are always open to collaboration</p>
            <button className={styles.DcButton}><a href="https://discord.gg/pY4UCENc">Join Discord</a></button>
          </div>
        </div>
        <div className={styles.heroInformation}>
          <div className={`${styles.heroItem} ${styles.social}`}>socials</div>
          <div className={`${styles.heroItem} ${styles.hackathon}`}>hackathon</div>
          <div className={`${styles.heroItem} ${styles.team}`}>team</div>
        </div>
        <div className={styles.hero} id="photo-div">
          <div className={`${styles.heroItem} ${styles.calander}`}>calander</div>
          <div className={`${styles.heroItem} ${styles.connect}`}>connect</div>
          <div className={`${styles.heroItem} ${styles.photo}`}>photo</div>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default Home