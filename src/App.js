import styles from "./styles/App.module.css";
import {
  Route,
  Routes,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Project from "./pages/Project/Project";
import Team from "./pages/Team/Team";

function App() {
  return (
    <div className={styles.BackgroundImage}>
      <Routes>
        <Route index element={<Home />} />
        <Route element={<Project />} path="projects"/>
        <Route element={<Team />} path="team"/>
      </Routes>
    </div>
  );
}

export default App;
