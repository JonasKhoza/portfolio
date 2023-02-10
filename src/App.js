import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/portfolio" />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/portfolio" element={<Home />} />
        <Route path="/portfolio/projects" element={<Projects />} />
        <Route path="/portfolio/about" element={<About />} />
      </Routes>
    </Layout>
  );
}

export default App;
