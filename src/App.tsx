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

const PostsList = lazy(async () => {
  const module = await import("./pages/PostList");
  return { default: module.default };
});

const PostPage = lazy(async () => {
  const module = await import("./pages/PostPage");
  return { default: module.default };
});

function App() {
  // const params = new URLSearchParams(window.location.search);
  // const redirect = params.get("redirect");

  // if (redirect) {
  //   window.history.replaceState(null, "", redirect);
  // }
  return (
    <Layout>
      <Routes>
        <Route
          path="/portfolio"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <HomePage />
            </Suspense>
          }
        />

        <Route
          path="/portfolio/posts"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <PostsList />
            </Suspense>
          }
        />

        <Route
          path="/portfolio/posts/:slug"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <PostPage />
            </Suspense>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
