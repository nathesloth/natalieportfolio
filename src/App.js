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
        <Route exact path="/natalieportfolio/" element={<Home />} />
        <Route exact path="/natalieportfolio/about" element={<About />} />
        <Route exact path="/natalieportfolio/projects" element={<Gallery />} />
        <Route
          exact
          path="/natalieportfolio/projects/honne"
          element={<ProjectView />}
        />
        <Route
          exact
          path="/natalieportfolio/projects/mockar"
          element={<ProjectView />}
        />
        <Route
          exact
          path="/natalieportfolio/projects/collabwall"
          element={<ProjectView />}
        />
        <Route
          exact
          path="/natalieportfolio/projects/qps"
          element={<ProjectView />}
        />
        <Route
          exact
          path="/natalieportfolio/projects/stemball"
          element={<ProjectView />}
        />
      </Routes>
    </>
  );
};

export default App;
