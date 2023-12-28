import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "./event.module.css";
import Eventbody from "../../layout/Eventbody/Eventbody";

function Event() {
  return (
    <>
      <Navbar />
      <h1 className={styles.eventH1}>All Events</h1>
      <div className={styles.heroContainer}>
        <Eventbody />
      </div>
    </>
  );
}

export default Event;
