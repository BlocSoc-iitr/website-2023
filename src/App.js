import "./styles/App.css";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";

import Hero from "./pages/Hero";
import Project from "./pages/Project";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Hero />} />
        <Route element={<Project />} path="projects"/>
      </Routes>
    </div>
  );
}

export default App;
