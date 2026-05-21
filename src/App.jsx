import { useState, useRef, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./includes/Header";
import styles from "./styles";
import CursorGlow from "./ui/CursorGlow";
import HeroAlt from "./pages/HeroAlt";
import Main from "./pages/Main";
import MarqueeComponent from "./ui/MarqueeComponent";
import { ParallaxProvider } from 'react-scroll-parallax';
import About from "./pages/About";
import Works from "./pages/Works";
import Skills from "./pages/Skills";
import Action from "./pages/Action";
import ContactMe from "./pages/ContactMe";
import Dev from "./pages/Dev";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Parallax } from 'react-scroll-parallax';
import DevMobile from "./pages/DevMobile";
import DarkVeil from './ui/DarkVeil';
import ParallaxStars from "./ui/ParallaxStars";
import Footer from "./includes/Footer";





function App() {

  const DarkVeilWrapper = () => {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        { threshold: 0 }
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => observer.disconnect();
    }, []);

    return (
      <div
        ref={containerRef}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: 0,
          top: 0,
          left: 0,
          pointerEvents: "none",
        }}
      >
        {isVisible && <DarkVeil />}
      </div>
    );
  };


  const StarsWrapper = () => {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        { threshold: 0 }
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => observer.disconnect();
    }, []);

    return (
      <div
        ref={containerRef}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: 20,
          top: 0,
          left: 0,
          pointerEvents: "none",
        }}
      >
        {isVisible && <ParallaxStars />}
      </div>
    );
  }


  return (
    <ParallaxProvider>
      <Router basename="/portfolio">
        <Routes>
          {/* Página principal */}
          <Route
            path="/"
            element={
              <div className="relative overflow-hidden">

                {/* <div
                  style={{
                    position: "fixed",
                    pointerEvents: "none",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    zIndex: 9999,
                  }}
                >
                  <CursorGlow />
                </div> */}

                <div className="relative h-[100%] bg-black">

                  <DarkVeilWrapper />


                  <header className={`${styles.paddingX} ${styles.flexStart} relative z-[100]`}>
                    <nav className={`${styles.boxWidth}`}>
                      <Header />
                    </nav>
                  </header>

                  <section className={`${styles.paddingX} ${styles.flexStart} relative z-[1]`}>
                    <div className={`${styles.boxWidth} `}>
                      <HeroAlt />
                    </div>
                  </section>
                </div>


                <main className={`${styles.paddingX} ${styles.paddingY} ${styles.flexStart} bg-glass-black rounded-t-[2rem] z-[5] relative border-t-[2px] border-white/10 border-b`}>
                  {/* <div className='absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-[-1]'>
                    <ParallaxStars />
                  </div> */}
                  <div className={`${styles.boxWidth}`}>
                    <Main />
                  </div>
                </main>


                <section id="about" className={`${styles.paddingX} ${styles.paddingY} ${styles.flexStart} bg-glass-black rounded-b-[2rem] z-[1] relative border-b-[2px] border-white/10`}>

                    {/* <StarsWrapper /> */}
                    
                  <div className={`${styles.boxWidth}`}>
                    <About />
                  </div>
                </section>

                <section id="projects" className={`${styles.paddingX} ${styles.paddingY} ${styles.flexStart} border-b border-white/10 relative overflow-hidden`}>
                  <div className='white-blue__gradient absolute bottom-[5rem] -left-[5rem] right-0 h-[400px] w-[800px] -rotate-40 -z-10 opacity-[.3]'></div>
                  <div className={`${styles.boxWidth}`}>
                    <Works />
                  </div>
                </section>

                <section id="skills" className={`${styles.paddingX} ${styles.paddingY} ${styles.flexStart} border-b border-white/10`}>
                  <div className={`${styles.boxWidth}`}>
                    <Skills />
                  </div>
                </section>

                <section id="action" className={`${styles.paddingX} ${styles.paddingY} ${styles.flexStart}`}>
                  <div className={`${styles.boxWidth}`}>
                    <Action />
                  </div>
                </section>

                <MarqueeComponent />


                <section id="contact" className={`${styles.paddingX} ${styles.paddingY} ${styles.flexStart} border-b border-white/10`}>
                  <div className={`${styles.boxWidth}`}>
                    <ContactMe />
                  </div>
                </section>

                <footer className={` ${styles.flexCenter}`}>
                    <Footer />
                </footer>

              </div>
            }
          />

          {/* Página de desarrollo */}
          <Route path="/dev" element={<Dev />} />
          {/* Ruta para DevMobile si es necesario */}
          <Route path="/devMobile" element={<DevMobile />} />
        </Routes>
      </Router>
    </ParallaxProvider>
  );
}

export default App;
