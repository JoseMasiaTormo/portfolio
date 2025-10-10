import DropDownG from "./components/Dropdown/DropDownG";
import ExperienceGrid from "./components/ExperienceAll/experienceGrid";
import FooterComp from "./components/Footer/Footer";
import ProfesionalDesc from "./components/ProfesionalDescription/profDesc";
import SkillsGroup from "./components/SkillsGroup/SkillsGroup";

function App() {
  const separatorClass = "w-[100%] border border-0.5 border-solid border-[#ccc]";
  return (
    <>
      <body className="text-[#eaeaea] h-full">
        <ProfesionalDesc />
        <div className={separatorClass}></div>
        <SkillsGroup />
        <div className={separatorClass}></div>
        <ExperienceGrid />
        <div className={separatorClass}></div>
        <DropDownG />
        <div className={separatorClass}></div>
        <FooterComp />
      </body>
    </>
  );
}

export default App;
