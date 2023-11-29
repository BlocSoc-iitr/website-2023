import styles from "./Navbar.module.css";
import Logo from "../../assets/Navbar/logo.svg";
import Discord from "../../assets/Navbar/discord.svg";
import MenuIcon from "../../assets/Navbar/MenuLogo.svg"; // Add the menu icon image
import { useState, useEffect } from "react";

function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

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

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className={`${styles.navbarContainer}`}>
            <div className={`${styles.navbar}`}>
                {!isDropdownOpen && (
                    <a href="/"><div className={`${styles.item} ${styles.logo}`}><img src={Logo}></img></div></a>
                )}
                {!isMobile && (
                    <div className={`${styles.item} ${styles.actions}`}>
                        <a href="/projects">projects</a>
                        <a href="">events</a>
                        <a href="">resources</a>
                        <a href="/team">team</a>
                        <a href="https://discord.gg/pY4UCENc"><img src={Discord}></img></a>
                    </div>
                )}
                {isMobile && !isDropdownOpen && (
                    <button className={styles.toggle} onClick={toggleDropdown}>
                        <img src={MenuIcon}/>
                    </button>
                )}
                {isDropdownOpen && (
                    <div className={styles.actionDiv}>
                    <div className={`${styles.item} ${styles.actions}`}>
                        <button className={styles.toggle} onClick={toggleDropdown}>
                            <p>X</p>
                        </button>
                        <a href="/">home</a>
                        <a href="/projects">projects</a>
                        <a href="">events</a>
                        <a href="">resources</a>
                        <a href="/team">team</a>
                        <a href="https://discord.gg/pY4UCENc"><img src={Discord}></img></a>
                    </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;