import "../styles/Hero.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Hero() {
  return (
    <>
      <Navbar />
      <div className="hero-container">
        <div className="hero">
          <div className="hero-item title">Title</div>
          <div className="hero-item video-div">Video-div</div>
          <div className="hero-item description">description</div>
        </div>
        <div className="hero-information">
          <div className="hero-item socials">socials</div>
          <div className="hero-item hackathon">hackathon</div>
          <div className="hero-item team">team</div>
        </div>
        <div className="hero" id="photo-div">
          <div className="hero-item calander">calander</div>
          <div className="hero-item connect">connect</div>
          <div className="hero-item photo">photo</div>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default Hero