import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/layout/Layout";

import { Suspense, lazy } from "react";

const HomePage = lazy(async () => {
  const module = await import("./pages/Home");
  return { default: module.default };
});

const AboutPage = lazy(async () => {
  const module = await import("./pages/About");
  return { default: module.default };
});

const ScalableEcommercePlatformPage = lazy(async () => {
  const module = await import("./pages/ScalableEcommercePlatform");
  return { default: module.default };
});

const VintagePage = lazy(async () => {
  const module = await import("./pages/Vintage");
  return { default: module.default };
});
const TicTactToePage = lazy(async () => {
  const module = await import("./pages/TicTacToe");
  return { default: module.default };
});

const EatSomePage = lazy(async () => {
  const module = await import("./pages/Eatsome");
  return { default: module.default };
});

const MeetUpPage = lazy(async () => {
  const module = await import("./pages/MeetUp");
  return { default: module.default };
});

const UniversityJourneyPage = lazy(async () => {
  const module = await import("./pages/UniversityJourney");
  return { default: module.default };
});

const NotFoundPage = lazy(async () => {
  const module = await import("./pages/NotFound");
  return { default: module.default };
});

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/portfolio" />} />
        <Route
          path="/portfolio"
          element={
            <Suspense
              fallback={
                <p
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "1.8rem",
                  }}
                >
                  Loading....
                </p>
              }
            >
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/portfolio/my-journey"
          element={
            <Suspense
              fallback={
                <p
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "1.8rem",
                  }}
                >
                  Loading....
                </p>
              }
            >
              <UniversityJourneyPage />
            </Suspense>
          }
        />
        <Route
          path="/portfolio/Scalable E-commerce Platform"
          element={
            <Suspense
              fallback={
                <p
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "1.8rem",
                  }}
                >
                  Loading....
                </p>
              }
            >
              <ScalableEcommercePlatformPage />
            </Suspense>
          }
        />

        <Route
          path="/portfolio/vintage"
          element={
            <Suspense
              fallback={
                <p
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "1.8rem",
                  }}
                >
                  Loading....
                </p>
              }
            >
              <VintagePage />
            </Suspense>
          }
        />
        <Route
          path="/portfolio/tic-tac-toe"
          element={
            <Suspense
              fallback={
                <p
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "1.8rem",
                  }}
                >
                  Loading....
                </p>
              }
            >
              <TicTactToePage />
            </Suspense>
          }
        />
        <Route
          path="/portfolio/eatsome"
          element={
            <Suspense
              fallback={
                <p
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "1.8rem",
                  }}
                >
                  Loading....
                </p>
              }
            >
              <EatSomePage />
            </Suspense>
          }
        />
        <Route
          path="/portfolio/meetup"
          element={
            <Suspense
              fallback={
                <p
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "1.8rem",
                  }}
                >
                  Loading....
                </p>
              }
            >
              <MeetUpPage />
            </Suspense>
          }
        />
        <Route
          path="/portfolio/about"
          element={
            <Suspense
              fallback={
                <p
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "1.8rem",
                  }}
                >
                  Loading....
                </p>
              }
            >
              <AboutPage />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense
              fallback={
                <p
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "1.8rem",
                  }}
                >
                  Loading....
                </p>
              }
            >
              <NotFoundPage />
            </Suspense>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
