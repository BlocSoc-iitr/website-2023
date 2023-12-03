import React, { useState } from "react";
import styles from "./TeamBody.module.css";
import TeamCard from "./TeamCard/TeamCard";
import Data from "./TeamList";

const TeamBody = () => {
  var teamMembers = Data.team;
  const [displayMember, setDisplayMember] = useState(0);
  // const [filter, setFilter] = useState("All");

  const handleImgClick = (index) => {
    setDisplayMember(index);
  };

  const handleNextMemeberClick = () => {
    setDisplayMember(displayMember + 1);
  };

  // const handleFilter = (block) => {
  //     setFilter(block);
  //     console.log(block);
  // }

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Our Team</h1>
      </div>
      <div className={styles.displayMember}>
        {teamMembers.map((m, index) => {
          return (
            index === displayMember && (
              <div className={styles.detailsGrid}>
                <div className={styles.teamCard}>
                  <TeamCard
                    className={styles.teamCard}
                    index={index}
                    Name={m.name}
                    designation={m.designation}
                    twitter={m.twitter}
                    linkedin={m.linkedin}
                    image={m.image}
                    key={m.sl}
                  />
                </div>
                <div className={styles.nextMember}>
                  <div
                    className={styles.name}
                    onClick={() => handleNextMemeberClick()}
                  >
                    {teamMembers[index + 1]?.name}
                  </div>
                  <div
                    className={styles.designation}
                    onClick={() => handleNextMemeberClick()}
                  >
                    {teamMembers[index + 1]?.designation}
                  </div>
                </div>
              </div>
            )
          );
        })}
      </div>
      {/* <div className={styles.filterDiv}>
                <div className={styles.filter}>
                    <input type="checkbox" id="All" onClick={() => handleFilter("All")}/>
                </div>
                <div className={styles.filter}>
                    <input type="checkbox" id="Block0" onClick={() => handleFilter("0")}/>
                </div>
                <div className={styles.filter}>
                    <input type="checkbox" id="Block1" />
                </div>
                <div className={styles.filter}>
                    <input type="checkbox" id="Block2" />
                </div>
                <div className={styles.filter}>
                    <input type="checkbox" id="Block3" />
                </div>
            </div> */}
      <div className={styles.teamRow}>
        {teamMembers.map((m, index) => {
          return (
            <img
              src={m.image}
              className={`${styles.teamImg} ${
                index === displayMember ? styles.activeImage : ""
              }`}
              onClick={() => handleImgClick(index)}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TeamBody;
