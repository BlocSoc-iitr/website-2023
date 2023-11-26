import styles from "./Footer.module.css";
import LocationIcon from "../../assets/Footer/Vector.png";
import Cube from "../../assets/Footer/Cube.png";

function Footer() {
    return (
        <>
            <div className={`${styles.footer}`}>
                <div className={`${styles.footerItem1}`}>
                <img src={Cube} className={`${styles.cube}`}/>
                    <h1>DEMISTIFYING ONE</h1>
                    <h1>BLOCK AT A TIME</h1>
                </div>
                <div className={`${styles.footerItem2}`}>
                    <div>
                    <h3>Start a Conversation</h3>
                    <h1>blocsoc.acm@iitr.ac.in</h1>
                    <h4><img src={LocationIcon}></img>ACM Room, Ground floor, SAC Building,IIT Roorkee, Uttarakhand-247667</h4>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Footer;