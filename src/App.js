import "./App.css";
import CardNetwork from "./components/CardNetwork/CardNetwork";
import DropDownG from "./components/Dropdown/DropDownG";
import DynamicBand from "./components/DynamicBand/dband";
import ExperienceGrid from "./components/ExperienceAll/experienceGrid";
import Header from "./components/Header/header";
import ProfesionalDesc from "./components/ProfesionalDescription/profDesc";

function App() {
  return (
    <>
      <DynamicBand />
      <Header />
      <div className="separator"></div>
      <ProfesionalDesc />
      <div className="separator"></div>
      <CardNetwork />
      <div className="separator"></div>
      <ExperienceGrid />
      <div className="separator"></div>
      <DropDownG />
    </>
  );
}

export default App;
