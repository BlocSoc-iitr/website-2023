import styles from "./Navbar.module.css";
import Logo from "../../assets/logo.svg";
import Discord from "../../assets/discord.svg";

function Navbar() {
    return (
        <div className={`${styles.navbarContainer}`}>
            <div className={`${styles.navbar}`}>
                <a href="/"><div className={`${styles.item} ${styles.logo}`}><img src={Logo}></img></div></a>
                    <div className={`${styles.item} ${styles.actions}`}>
                        <a href="/projects">projects</a>
                        <a href="">events</a>
                        <a href="">resources</a>
                        <a href="">team</a>
                        <a href="https://discord.gg/pY4UCENc"><img src={Discord}></img></a>
                    </div>
            </div>
        </div>
    );
}

export default Navbar;