import ProjectCard from "./ProjectCard/ProjectCard";
import List from "./ProjectList";
import styles from "./ProjectBody.module.css";
import React, { useState } from "react";

const ProjectBody = (props) => {
  const [activeProject, setActiveProject] = useState(0);

  const handleProjectClick = (index) => {
    setActiveProject(index);
  };
  return (
    <div className={styles.Body}>
      <div className={styles.container}>
        <div className={styles.detailsContainer}>
          {activeProject !== null && (
            <ProjectCard
              heading={List.Project_List[activeProject].heading}
              label={List.Project_List[activeProject].label}
              desc={List.Project_List[activeProject].desc}
              link={List.Project_List[activeProject].link}
              image={List.Project_List[activeProject].image}
              index={activeProject}
              key={List.Project_List[activeProject].sl}
            />
          )}
        </div>
        <div className={styles.listContainer}>
          <h1>Projects</h1>
          <div className={styles.listDiv}>
            {List.Project_List.map((m, index) => (
              <div
                className={`${styles.projectItem} ${
                  activeProject === index ? styles.active : ""
                }`}
                onClick={() => handleProjectClick(index)}
                key={m.sl}
              >
                <h3
                  className={
                    activeProject === index ? styles.activeProjectName : ""
                  }
                >
                  {m.heading}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBody;
