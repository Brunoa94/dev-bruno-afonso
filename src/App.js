import './App.css';
import Footer from './components/footer';
import Home from './components/second-home';
import OverYears from './components/overYears';
import Projects from './components/projects';
import Skills from './components/skills';
import SkillsLoader from './components/skillsLoader';
import { useEffect, useRef } from 'react';


function App() {

  useEffect(() => {
    if(typeof window !== "undefined"){
      console.log(window.innerWidth);
    }
  })

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = document.getElementById("c");
    const ctx = canvas.getContext("2d");

    // Make the canvas full screen
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    // Safe string without special JSX characters
    const matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()_+-";
    const charsArray = matrix.split("");

    const fontSize = 10; // Ensure fontSize is set
    const canvasWidth = canvas.width || window.innerWidth; // Fallback to window width if canvas.width is 0
    const columns = Math.max(Math.floor(canvasWidth / fontSize), 1); // Ensure at least 1 column
    const drops = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0f0";
      ctx.font = `${fontSize}px Arial`;

      for (let i = 0; i < drops.length; i++) {
        const text = charsArray[Math.floor(Math.random() * charsArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const intervalId = setInterval(draw, 35);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="AppBody max-w-screen overflow-hidden relative flex">
      <div className='w-full absolute top-0 left-0 z-10'>
        <canvas id="c" className=''>
        </canvas>
      </div>
      <div className='w-screen h-screen absolute bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0)_76%,rgba(0,0,0,1)_100%)] z-20'>

      </div>
      <div className='z-50'>
      <Home/>
      <OverYears/>
      <Skills/>
      <SkillsLoader/>
      <Projects/>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
