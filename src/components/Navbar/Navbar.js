import styles from "./Navbar.module.css";
import Logo from "../../assets/Navbar/logo.svg";
import Discord from "../../assets/Navbar/discord.svg";
import MenuIcon from "../../assets/Navbar/MenuLogo.svg";
import closeIcon from "../../assets/Navbar/close.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const handleActiveClassName = (path) => {
    return location.pathname === path ? styles.active : "";
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 26) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={`${styles.navbarContainer}`}>
      <div
        className={
          scrolled
            ? `${styles.navbar} ${styles.scrolled}`
            : isDropdownOpen
            ? `${styles.navbar} ${styles.navdown}`
            : styles.navbar
        }
      >
        <Link to="/">
          <div className={`${styles.item} ${styles.logo}`}>
            <img src={Logo}></img>
          </div>
        </Link>

        <div
          className={
            isDropdownOpen
              ? `${styles.item} ${styles.actions} ${styles.open}`
              : `${styles.item} ${styles.actions}`
          }
        >
          <Link className={handleActiveClassName("/projects")} to="/projects">
            projects
          </Link>
          <Link className={handleActiveClassName("/events")} to="/events">
            events
          </Link>
          <Link className={handleActiveClassName("/resources")} to="/resources">
            resources
          </Link>
          <Link className={handleActiveClassName("/team")} to="/team">
            team
          </Link>
          <Link to="https://discord.gg/pY4UCENc" target="_blank">
            <img src={Discord}></img>
          </Link>
        </div>
        <button className={styles.toggle} onClick={toggleDropdown}>
          {!isDropdownOpen ? <img src={MenuIcon} /> : <img src={closeIcon} />}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
