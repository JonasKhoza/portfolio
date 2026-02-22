import BackgroundSection from "../components/background/BackgroundSection";
import ExperienceSection from "../components/experience/ExperinceSection";
import Improvements from "../components/improvements/Improvements";
import IntroSection from "../components/intro_section/IntroSection";
import Footer from "../components/navigation/Footer";
import { NavHeader } from "../components/navigation/NavHeader";
import ProjectsSection from "../components/projects/ProjectsSection";
import skills from "../data/skills";
import { genNumYearExperience } from "../utils/helpers";
import c from "./styles/home.module.css";

const numYearExperience = genNumYearExperience();
const gitHubURL = "https://github.com/JonasKhoza";
const linkedinProfileLink =
  "https://www.linkedin.com/in/jonas-khoza-6a8b03224/";

const Home = () => {
  document.title = "Jonas Khoza | Software Engineer";
  return (
    <div className={c.home_container}>
      <NavHeader />
      <IntroSection years={numYearExperience} skills={skills} />
      <ExperienceSection />
      <BackgroundSection />
      <Improvements />
      <ProjectsSection />
      <Footer githubUrl={gitHubURL} linkedinUrl={linkedinProfileLink} />
    </div>
  );
};

export default Home;
