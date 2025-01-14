import { useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Technology from "./Components/Technology";
import Exprience from "./Components/Exprience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="overflow-x-hidden selection:bg-cyan-300 selection:text-cyan-900 box-border m-0 p-0">
        <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
        

        <div className="container mx-auto px-8 text-white">
          <Navbar />
          <Hero />
          <About/>
          <Technology/>
          <Exprience/>
          <Projects/>
          <Contact/>
        </div>
      </div>
    </>
  );
}

export default App;
