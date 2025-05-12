import "./App.css";
import StudiesAndCourses from "./components/Academic/Studies";
import Header from "./components/Header/header";
import ProfesionalDesc from "./components/ProfesionalDescription/profDesc";

function App() {
  return (
    <>
      <Header />
      <ProfesionalDesc />
      <hr className="separator" />
      <StudiesAndCourses />
    </>
  );
}

export default App;
