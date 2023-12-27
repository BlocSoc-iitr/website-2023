import {React, useState} from "react";
import styles from "./AchivementsBody.module.css";
import AchivementsCard from "./AchivementsCard/AchivementsCard";
import List from "./AchivementsList";

function AchivementsBody() {
    const [activeAchievement, setActiveAchievement] = useState(0);
    const handlePreviousClick = () => {
        setActiveAchievement((activeAchievement - 1 + List.Achivements_List.length) % List.Achivements_List.length);
    }
    const handleNextClick = () => {
        setActiveAchievement((activeAchievement + 1 + List.Achivements_List.length) % List.Achivements_List.length);
    }
    return (
        <div className={`${styles.AchivementsBody}`} >
            <div className={`${styles.ControlDiv}`} >
                <button className={`${styles.AchivementsBotton} ${styles.PreviousBtn}`} onClick={handlePreviousClick}>P</button>
                <button className={`${styles.AchivementsBotton}`} onClick={handleNextClick}>N</button>
            </div>
            <div className={`${styles.ContentDiv}`} >
            <AchivementsCard
                index={activeAchievement}
                date={List.Achivements_List[activeAchievement]?.date}
                heading={List.Achivements_List[activeAchievement]?.heading}
                desc={List.Achivements_List[activeAchievement]?.desc}
            />
            </div>
        </div>
    );
}

export default AchivementsBody;