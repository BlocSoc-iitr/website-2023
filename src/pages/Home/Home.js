import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "./Home.module.css";
import TitleBackground from "../../assets/Home/TitleBackground.png";
import TitleGradient from "../../assets/Home/TitleGradient.png";
import TitleLogo from "../../assets/Home/TitleLogo.png";
import VideoBackground from "../../assets/Home/VideoBackground.png";
import MaskStar from "../../assets/Home/MaskStar.svg";

function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.heroContainer}>
        <div className={styles.hero}>
          <div className={`${styles.heroItem} ${styles.title}`}>
            <img src={TitleBackground} className={styles.titleBackground} draggable="false" />
            <img src={TitleGradient} className={styles.titleGradient} draggable="false" />
            <img src={TitleLogo} className={styles.titleLogo} draggable="false" />
            <h1>BLOCSOC IITR</h1>
            <p>Blockchain Society IIT Roorkee is an Open Community to increase interaction among Blockchain enthusiasts and bitcoin-dev enthusiasts and to spread the word about 'Web 3.0'</p>
          </div>
          <div className={`${styles.heroItem} ${styles.videoDiv}`}>
            <img src={VideoBackground} className={styles.videoBackground} draggable="false" />
          </div>
          <div className={`${styles.heroItem} ${styles.description}`}>
            <h2>Creating magic since 2021</h2>
            <p>We are a group of Blockchain enthusiasts aiming to unite the blockchain community of IIT Roorkee, in a  to unite the blockchain community of IIT Roorkee, in a highly collaborative environment that is open for all. We are always open to collaborations on fun projects en for all. We are always open to collaboration</p>
            <button className={styles.DcButton}><a href="https://discord.gg/pY4UCENc">Join Discord</a></button>
          </div>
        </div>
        <div className={styles.heroInformation}>
          <div className={`${styles.heroItem} ${styles.social}`}>
            <p>socials</p>
            <div>
              <p>active community members on discord</p>
              <h3>1000+</h3>
            </div>
          </div>
          <div className={`${styles.heroItem} ${styles.hackathon}`}>
            <p>hackathons</p>
            <div>
              <p>hackathons won over past few years</p>
              <h3>10+</h3>
            </div>
          </div>
          <div className={`${styles.heroItem} ${styles.team}`}>
            <p>team</p>
            <div>
              <p>skilled & active core team members</p>
              <h3>45+</h3>
            </div>
          </div>
        </div>
        <div className={styles.tagLine}>
          <marquee scrollamount="50">
          Where Creativity Meets the Chain<img src={MaskStar}></img>
          Where Creativity Meets the Chain<img src={MaskStar}></img>
          Where Creativity Meets the Chain<img src={MaskStar}></img>
          Where Creativity Meets the Chain<img src={MaskStar}></img>
          Where Creativity Meets the Chain<img src={MaskStar}></img>
          </marquee>
        </div>
        <div className={`${styles.hero} ${styles.calanderDiv}`} id="photo-div">
          <div className={`${styles.heroItem} ${styles.calander}`}>

          </div>
          <div className={`${styles.heroItem} ${styles.connect}`}>
            <p>Connect with us on our social media and support us building web3 community</p>
            <div className={styles.socialMedia}>
              <a href="https://www.instagram.com/blocsociitr/">instagram</a>
              <a href="https://twitter.com/BlocSocIITR">twitter</a>
              <a href="https://www.facebook.com/BlocSocIITR/">facebook</a>
            </div>
          </div>
          <div className={`${styles.heroItem} ${styles.photo}`}></div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home