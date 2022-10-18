import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Layout from "./components/layout/Layout";
function App() {
  return (
    <Layout>
      <Routes>
        <Route
          path="https://jonaskhoza.github.io/portfolio/"
          element={<Home />}
        />
        <Route
          path="https://jonaskhoza.github.io/portfolio/projects"
          element={<Projects />}
        />
        <Route
          path="https://jonaskhoza.github.io/portfolio/about"
          element={<About />}
        />
      </Routes>
    </Layout>
  );
}

export default App;
