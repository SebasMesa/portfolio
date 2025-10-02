import { useState } from "react";
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
import Punto from './assets/punto.png';



function App() {
  return (
    <ParallaxProvider>
      <Router basename="/portfolio">
        <Routes>
          {/* Página principal */}
          <Route
            path="/"
            element={
              <div className="relative overflow-hidden">

                <div
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
                </div>

                <header className={`${styles.paddingX} ${styles.flexStart}`}>
                  <nav className={`${styles.boxWidth}`}>
                    <Header />
                  </nav>
                </header>

                <section className={`${styles.paddingX} ${styles.flexStart}`}>
                  <div className={`${styles.boxWidth}`}>
                    <HeroAlt />
                  </div>
                </section>

                <main className={`${styles.paddingX} ${styles.paddingY} ${styles.flexStart} bg-glass-mac rounded-t-[2rem] z-[5] relative border-t-[2px] border-white/10`}>
                    <div className='absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-[-1]'>
                      <Parallax
                        translateX={['-100vw', '100vw']}
                        translateY={['-150px', '150px']}
                        styleOuter={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100vw',
                          pointerEvents: 'none',
                          zIndex: 1
                        }}
                      >
                        <img src={Punto} alt="Punto" style={{ width: 350, height: 350, opacity: 0.3 }} />
                      </Parallax>
                    </div>
                  <div className={`${styles.boxWidth}`}>
                    <Main />
                  </div>
                </main>

                <MarqueeComponent />

                <section className={`${styles.paddingX} ${styles.paddingY} ${styles.flexStart} bg-glass-mac rounded-b-[2rem] z-[1] relative border-b-[2px] border-white/10 mb-[6rem]`}>
                  <div className={`${styles.boxWidth}`}>
                    <About />
                  </div>
                </section>

                <section className={`${styles.paddingX} ${styles.paddingY} ${styles.flexStart} border-b border-white/10 mb-[6rem]`}>
                  <div className={`${styles.boxWidth}`}>
                    <Works />
                  </div>
                </section>

                <section className={`${styles.paddingX} ${styles.paddingY} ${styles.flexStart} border-b border-white/10 mb-[6rem]`}>
                  <div className={`${styles.boxWidth}`}>
                    <Skills />
                  </div>
                </section>

                <section className={`${styles.paddingX} ${styles.paddingY} ${styles.flexStart} border-b border-white/10 mb-[6rem]`}>
                  <div className={`${styles.boxWidth}`}>
                    <Action />
                  </div>
                </section>

                <section className={`${styles.paddingX} ${styles.paddingY} ${styles.flexStart} border-b border-white/10 mb-[6rem]`}>
                  <div className={`${styles.boxWidth}`}>
                    <ContactMe />
                  </div>
                </section>

                <footer className={` ${styles.flexCenter} py-4`}>
                  <p className="text-[1rem] text-center text-[#a1a1a1] font-light">
                    &copy; 2024 Sebas Mesa. Todos los derechos reservados.
                  </p>
                </footer>

              </div>
            }
          />

          {/* Página de desarrollo */}
          <Route path="/dev" element={<Dev />} />
        </Routes>
      </Router>
    </ParallaxProvider>
  );
}

export default App;
