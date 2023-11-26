import styles from "./styles/App.module.css";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Project from "./pages/Project/Project";

function App() {
  return (
    <div className={styles.BackgroundImage}>
      <Routes>
        <Route index element={<Home />} />
        <Route element={<Project />} path="projects"/>
      </Routes>
    </div>
  );
}

export default App;
