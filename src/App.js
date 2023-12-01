import styles from "./styles/App.module.css";
import {
  Route,
  Routes,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Project from "./pages/Project/Project";
import Team from "./pages/Team/Team";
import Event from "./pages/Events/Event";
import Resources from "./pages/Resources/Resources";


function App() {
  return (
    <div className={styles.BackgroundImage}>
      <Routes>
        <Route index element={<Home />} />
        <Route element={<Project />} path="projects"/>
        <Route element={<Team />} path="team"/>
        <Route element={<Event />} path="events"/>
        <Route element={<Resources />} path="resources"/>
      </Routes>
    </div>
  );
}

export default App;
