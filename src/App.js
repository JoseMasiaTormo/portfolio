import "./App.css";
import CardNetwork from "./components/CardNetwork/CardNetwork";
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
    </>
  );
}

export default App;
