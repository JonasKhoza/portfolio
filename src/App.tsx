import React, { lazy, Suspense } from "react";

//Third-party modules

//User-modules
import Layout from "./components/layout/Layout";
import { Navigate, Route, Routes } from "react-router-dom";
import LoadingSpinner from "./components/loading/LoadingSpinner";

const HomePage = lazy(async () => {
  const module = await import("./pages/Home");
  return { default: module.default };
});

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="portfolio" />} />
        <Route
          path="portfolio"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <HomePage />
            </Suspense>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
