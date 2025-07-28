import "./App.css";
import CardNetwork from "./components/CardNetwork/CardNetwork";
import DropDownG from "./components/Dropdown/DropDownG";
import ExperienceGrid from "./components/ExperienceAll/experienceGrid";
import FooterComp from "./components/Footer/Footer";
import Header from "./components/Header/header";
import ProfesionalDesc from "./components/ProfesionalDescription/profDesc";

function App() {
  return (
    <>
      <Header />
      <div className="separator"></div>
      <ProfesionalDesc />
      <div className="separator"></div>
      <CardNetwork />
      <div className="separator"></div>
      <ExperienceGrid />
      <div className="separator"></div>
      <DropDownG />
      <div className="separator"></div>
      <FooterComp />
    </>
  );
}

export default App;
