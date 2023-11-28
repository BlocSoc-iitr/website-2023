import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer";
import styles from "./Project.module.css";
import ProjectBody from "../../components/Project/ProjectBody";

function Project() {
    return (
        <>
            <Navbar />
            <div className={styles.heroContainer}>
                <ProjectBody />
                <Footer />
            </div>
        </>
    )
}

export default Project