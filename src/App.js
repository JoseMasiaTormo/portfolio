import ContactForm from "./components/Contact/ContactForm";
import ExperienceGrid from "./components/Experience/experienceGrid";
import FooterComp from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ProfesionalDesc from "./components/ProfesionalDescription/profDesc";
import ProjectsSlider from "./components/Projects/ProjectsSlider";
import SkillsGroup from "./components/Skills/SkillsGroup";

function App() {
  return (
    <>
      <div className="text-[#eaeaea] h-full">
        <Navbar />
        <ProfesionalDesc />
        <ProjectsSlider />
        <SkillsGroup />
        <ExperienceGrid />
        <ContactForm />
        <FooterComp />
      </div>
    </>
  );
}

export default App;
