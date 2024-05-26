import './App.css';
import Footer from './components/footer';
import Home from './components/second-home';
import OverYears from './components/overYears';
import Projects from './components/projects';
import Skills from './components/skills';
import SkillsLoader from './components/skillsLoader';
import { useEffect } from 'react';


function App() {

  useEffect(() => {
    if(typeof window !== "undefined"){
      console.log(window.innerWidth);
    }
  })

  return (
    <div className="max-w-screen overflow-hidden">
      <Home/>
      <OverYears/>
      <Skills/>
      <SkillsLoader/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
