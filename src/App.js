import './App.css'
import StudiesAndCourses from './components/Academic/Studies';
import Header from './components/Header/Header';
import ProfesionalDesc from './components/ProfesionalDescription/ProfDesc';

function App() {
  return (
    <>
      <Header />
      <ProfesionalDesc />
      <hr className='separator' />
      <StudiesAndCourses />
    </>
  );
}

export default App;
