import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer";
import styles from "./Project.module.css";

function Project() {
    return (
        <>
            <Navbar />
            <div className={styles.heroContainer}>
                <div className={`${styles.hero} ${styles.project}`}>
                <div className={`${styles.heroItem} ${styles.projectInfo}`}>
                    left
                </div>
                <div className={`${styles.heroItem} ${styles.projectList}`}>
                    right
                </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Project