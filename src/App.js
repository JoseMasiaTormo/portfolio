import "./App.css";
import StudiesAndCourses from "./components/Academic/Studies";
import CardNetwork from "./components/CardNetwork/CardNetwork";
import Header from "./components/Header/header";
import ProfesionalDesc from "./components/ProfesionalDescription/profDesc";

function App() {
  return (
    <>
      <Header />
      <ProfesionalDesc />
      <hr className="separator" />
      <CardNetwork />
      <hr className="separator" />
      <StudiesAndCourses />
    </>
  );
}

export default App;
