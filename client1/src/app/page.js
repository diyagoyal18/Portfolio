'use client';
import { useEffect, useState } from "react";
import Scene from "../components/Projects/Scene";
import Projects from "../components/Projects/Project";
import Lenis from 'lenis'
import About from '../components/About'
import Skills from '../components/Skills'
export default function Home() {

  const [activeMenu, setActiveMenu] = useState(null)
  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main>
\      <div className="h-[50vh]"></div>
      {/* <Intro/> */}
      <About/>
      <Projects setActiveMenu={setActiveMenu}/>
      <Scene activeMenu={activeMenu}/>
      <Skills/>
      <div className="h-[50vh]"></div>
    </main>
  );
}