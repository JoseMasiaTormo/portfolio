import "./App.css";
import CardNetwork from "./components/CardNetwork/CardNetwork";
import ExperienceGrid from "./components/ExperienceAll/experienceGrid";
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
    </>
  );
}

export default App;
