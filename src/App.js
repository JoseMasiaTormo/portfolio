import DropDownG from "./components/Dropdown/DropDownG";
import ExperienceGrid from "./components/Experience/experienceGrid";
import FooterComp from "./components/Footer/Footer";
import ProfesionalDesc from "./components/ProfesionalDescription/profDesc";
import SkillsGroup from "./components/Skills/SkillsGroup";

function App() {
  return (
    <>
      <div className="text-[#eaeaea] h-full">
        <ProfesionalDesc />
        <SkillsGroup />
        <ExperienceGrid />
        <DropDownG />
        <FooterComp />
      </div>
    </>
  );
}

export default App;
