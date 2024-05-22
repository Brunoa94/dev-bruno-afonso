import './App.css';
import Footer from './components/footer';
import Home from './components/second-home';
import OverYears from './components/overYears';
import Projects from './components/projects';
import Skills from './components/skills';
import SkillsLoader from './components/skillsLoader';


function App() {
  return (
    <div className="">
      <Home/>
      <OverYears/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
