import styles from "./Navbar.module.css";
import Logo from "../../assets/Navbar/logo.svg";
import Discord from "../../assets/Navbar/discord.svg";
import MenuIcon from "../../assets/Navbar/MenuLogo.svg";
import { useState, useEffect } from "react";

function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [activeTab, setActiveTab] = useState("");

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        const path = window.location.pathname;
        const tab = path.substring(1);
        console.log(tab);
        setActiveTab(tab);
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className={`${styles.navbarContainer}`}>
            <div className={`${styles.navbar}`}>
                {!isDropdownOpen && (
                    <a href="/"><div className={`${styles.item} ${styles.logo}`}><img src={Logo} alt="Logo"></img></div></a>
                )}
                {!isMobile && (
                    <div className={`${styles.item} ${styles.actions}`}>
                        <a href="/projects" className={activeTab === "projects" ? styles.active : ""}>projects</a>
                        <a href="/events" className={activeTab === "events" ? styles.active : ""}>events</a>
                        <a href="/resources" className={activeTab === "resources" ? styles.active : ""}>resources</a>
                        <a href="/team" className={activeTab === "team" ? styles.active : ""}>team</a>
                        <a href="https://discord.gg/pY4UCENc"><img src={Discord} alt="Discord"></img></a>
                    </div>
                )}
                {isMobile && !isDropdownOpen && (
                    <button className={styles.toggle} onClick={toggleDropdown}>
                        <img src={MenuIcon} alt="Menu Icon"/>
                    </button>
                )}
                {isDropdownOpen && (
                    <div className={styles.actionDiv}>
                    <div className={`${styles.item} ${styles.actions}`}>
                        <button className={styles.toggle} onClick={toggleDropdown}>
                            <p>X</p>
                        </button>
                        <a href="/" className={activeTab === "home" ? styles.active : ""}>home</a>
                        <a href="/projects" className={activeTab === "projects" ? styles.active : ""}>projects</a>
                        <a href="/events" className={activeTab === "events" ? styles.active : ""}>events</a>
                        <a href="/resources" className={activeTab === "resources" ? styles.active : ""}>resources</a>
                        <a href="/team" className={activeTab === "team" ? styles.active : ""}>team</a>
                        <a href="https://discord.gg/pY4UCENc"><img src={Discord} alt="Discord"></img></a>
                    </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;