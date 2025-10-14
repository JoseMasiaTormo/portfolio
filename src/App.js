import DropDownG from "./components/Dropdown/DropDownG";
import ExperienceGrid from "./components/Experience/experienceGrid";
import FooterComp from "./components/Footer/Footer";
import ProfesionalDesc from "./components/ProfesionalDescription/profDesc";
import SkillsGroup from "./components/Skills/SkillsGroup";

function App() {
  return (
    <>
      <body className="text-[#eaeaea] h-full">
        <ProfesionalDesc />
        <SkillsGroup />
        <ExperienceGrid />
        <DropDownG />
        <FooterComp />
      </body>
    </>
  );
}

export default App;
