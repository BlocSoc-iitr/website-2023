import styles from "./Team.module.css";
import Navbar from "../../components/Navbar/Navbar";
import TeamBody from "../../components/Team/TeamBody";
import Footer from "../../components/Footer/Footer";

function Team(){
    return(
        <div>
            <Navbar />
            <div className={styles.heroContainer}>
                <TeamBody />
            <Footer/>
            </div>
        </div>
    )
}

export default Team;