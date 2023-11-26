import styles from "./styles/App.module.css";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Project from "./pages/Project/Project";
import BackgroundImage from "./assets/background.png";

function App() {
  return (
    <div>
      <img className={styles.backgroundImage}src={BackgroundImage}></img>
      <Routes>
        <Route index element={<Home />} />
        <Route element={<Project />} path="projects"/>
      </Routes>
    </div>
  );
}

export default App;
