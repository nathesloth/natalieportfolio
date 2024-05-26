// App.js
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About.js";
import Home from "./Pages/Home.js";
import Gallery from "./Pages/Gallery.js";
import ProjectView from "./Pages/ProjectView.js";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projects" element={<Gallery />} />
        <Route exact path="/projects/honne" element={<ProjectView />} />
        <Route exact path="/projects/mockar" element={<ProjectView />} />
        <Route exact path="/projects/collabwall" element={<ProjectView />} />
        <Route exact path="/projects/qps" element={<ProjectView />} />
        <Route exact path="/projects/stemball" element={<ProjectView />} />
      </Routes>
    </>
  );
};

export default App;
