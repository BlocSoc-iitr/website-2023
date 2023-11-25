import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import "../styles/Project.css";

function Project() {
    return (
        <>
            <Navbar />
            <div className="hero-container">
                <div className="hero project">
                <div className="hero-item project-info">
                    left
                </div>
                <div className="hero-item project-list">
                    right
                </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Project