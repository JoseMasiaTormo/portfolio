import DropDownG from "./components/Dropdown/DropDownG";
import ExperienceGrid from "./components/Experience/experienceGrid";
import FooterComp from "./components/Footer/Footer";
import ProfesionalDesc from "./components/ProfesionalDescription/profDesc";
import SkillsGroup from "./components/Skills/SkillsGroup";

function App() {
  const separatorClass = "w-[100%] border border-1.5 border-solid border-black";
  return (
    <>
      <body className="text-[#eaeaea] h-full">
        <ProfesionalDesc />
        <SkillsGroup />
        <div className={separatorClass}></div>
        <ExperienceGrid />
        <div className={separatorClass}></div>
        <DropDownG />
        <FooterComp />
      </body>
    </>
  );
}

export default App;
