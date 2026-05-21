import React, { useEffect, useRef } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { MeshPhysicalMaterial, Color } from 'three';
import LogoAbout from '../assets/logoabout.png';

function Model() {
  const { scene } = useGLTF("/portfolio/models/logoglass.glb");
  const isMobile = window.innerWidth < 768;
  const scale = isMobile ? 2 : 6;
  const position = isMobile ? [0, -2, 0] : [0, -3, 0];

  // 🔹 Aplicar efecto glass transparente realista
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material = new MeshPhysicalMaterial({
          color: new Color(0xffffff),   // color neutro (puedes darle un tono si quieres vidrio tintado)
          metalness: 0.05,              // bajito, para que no refleje tanto
          roughness: 0.05,              // un poco de rugosidad para suavizar los reflejos
          transmission: 1,              // transparencia real del vidrio
          transparent: true,            // activa canal alfa
          opacity: 1,                   // opaco pero con transmisión
          thickness: 0.6,               // grosor óptico
          ior: 1.45,                    // índice de refracción real del vidrio
          envMapIntensity: 0.8,         // reflejos sutiles (no espejo)
          clearcoat: 0.3,               // leve capa de brillo
          clearcoatRoughness: 0.1,      // no perfectamente reflectiva
          attenuationColor: new Color(0xaaddff), // leve tinte celeste dentro del vidrio
          attenuationDistance: 2.5,     // cuánto penetra la luz en el vidrio

          emissive: new Color(0xffffff), // tono de brillo
          emissiveIntensity: 0.005,
        });
      }
    });
  }, [scene]);

  return <primitive object={scene} scale={scale} position={position} />;
}


function CustomLights() {
  return (
    <>
      {/* Luz trasera púrpura para contorno */}
      <directionalLight
        position={[-5, 3, -5]}
        intensity={4.5}
        color="#8b5cf6"
      />

      {/* Luz lateral derecha azul */}
      <directionalLight
        position={[5, 2, -3]}
        intensity={3.2}
        color="#6366f1"
      />

      {/* Luz frontal blanca suave */}
      <pointLight
        position={[2, 2, 3]}
        intensity={4.5}
        distance={10}
        color="#ffffff"
      />

      {/* Luz azul tenue para reflejos */}
      <pointLight
        position={[-2, 1, 3]}
        intensity={1.8}
        distance={8}
        color="#4f46e5"
      />
    </>
  );
}


const About = () => {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 items-center relative'>

            <div className="absolute top-1/2 left-20 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-[#7127BA]/10 blur-[120px] rounded-full -z-10" />


        <div>
          <h1 className='text-[2.5rem] md:text-[4rem] font-bold text-glass-macos'>Sobre mí</h1>
          <p className='text-[1.3rem] text-[#a1a1a1] font-light mt-[1rem]'>
            {/* ¡Hola! Soy Sebastián Mesa, un desarrollador web de Colombia,
            apasionado por crear experiencias digitales que realmente hagan la diferencia.
            <br />
            Me encanta unir creatividad y tecnología para diseñar sitios que no solo se vean increíbles,
            sino que también sean rápidos, accesibles y fáciles de usar.
            <br />
            Trabajo con herramientas como <span className="text-white font-medium">React, Angular, Python, Firebase, SQL, PHP y Tailwind</span>,
            lo que me permite dar vida a proyectos modernos y escalables.
            <br />
            🎯 Mi objetivo: ayudar a personas, marcas y emprendedores a destacar en el mundo digital con páginas y aplicaciones
            que transmitan confianza, frescura y resultados reales. */}


            Soy un desarrollador Full Stack especializado en el ecosistema <span className="text-white font-medium">JavaScript (React y Node.js)</span>. Me apasiona transformar ideas complejas en interfaces intuitivas y arquitecturas robustas. He colaborado en diversos proyectos, desde <span className="text-white font-medium">paneles administrativos (CRM)</span> hasta <span className="text-white font-medium">plataformas de E-commerce</span>, enfocándome en el rendimiento y la experiencia de usuario.
            Siempre en constante aprendizaje para adoptar las mejores prácticas de la industria.
          </p>
          <div>
            <button className='text-[1.1rem] mt-[2rem] px-6 py-3 rounded-[10px] text-white hover:opacity-80 transition-opacity duration-300 moradoGradiente font-semibold border-2 border-purple-500/20' onClick={() => window.location.href = 'mailto:sebasmesadev@gmail.com'}>
              Hablemos de tu proyecto 🤝
            </button>
          </div>
        </div>

        <div
          style={{
            height: "60vh",
            display: window.innerWidth < 768 ? "none" : "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }} style={{ background: 'transparent' }}>

            <color attach="background" args={["#000000"]} />
            <ambientLight intensity={1.2} />
            <CustomLights />
            <Environment preset="studio" /> {/* reflejos suaves sin ciudad */}
            <Model />
            <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={3} />
          </Canvas>
        </div>

        <AnimatedLogo />
      </div>
    </>
  );

  function AnimatedLogo() {
    const logoRef = useRef(null);

    useEffect(() => {
      let frame;
      let start = null;
      function animateLogo(ts) {
        if (!start) start = ts;
        const elapsed = ts - start;
        const y = Math.sin(elapsed / 600) * 20;
        if (logoRef.current) {
          logoRef.current.style.transform = `translateY(${y}px)`;
        }
        frame = requestAnimationFrame(animateLogo);
      }
      frame = requestAnimationFrame(animateLogo);
      return () => cancelAnimationFrame(frame);
    }, []);

    return (
      <div className='flex justify-center md:hidden mt-[3rem]'>
        <img
          ref={logoRef}
          src={LogoAbout}
          alt="LogoAbout"
          className='w-[300px] h-[300px] object-contain'
          style={{ transition: 'transform 0.2s linear' }}
        />
      </div>
    );
  }
}

export default About;


// import React, { useEffect, useRef, useState } from 'react';
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
// import { MeshPhysicalMaterial, Color } from 'three';
// import LogoAbout from '../assets/logoabout.png';

// // El subcomponente Model y CustomLights se mantienen igual...
// function Model() {
//   const { scene } = useGLTF("/portfolio/models/logoglass.glb");
//   const isMobile = window.innerWidth < 768;
//   const scale = isMobile ? 2 : 6;
//   const position = isMobile ? [0, -2, 0] : [0, -3, 0];

//   useEffect(() => {
//     scene.traverse((child) => {
//       if (child.isMesh) {
//         child.material = new MeshPhysicalMaterial({
//           color: new Color(0xffffff),
//           metalness: 0.05,
//           roughness: 0.05,
//           transmission: 1,
//           transparent: true,
//           opacity: 1,
//           thickness: 0.6,
//           ior: 1.45,
//           envMapIntensity: 0.8,
//           clearcoat: 0.3,
//           clearcoatRoughness: 0.1,
//           attenuationColor: new Color(0xaaddff),
//           attenuationDistance: 2.5,
//           emissive: new Color(0xffffff),
//           emissiveIntensity: 0.005,
//         });
//       }
//     });
//   }, [scene]);

//   return <primitive object={scene} scale={scale} position={position} />;
// }

// function CustomLights() {
//   return (
//     <>
//       <directionalLight position={[-5, 3, -5]} intensity={4.5} color="#8b5cf6" />
//       <directionalLight position={[5, 2, -3]} intensity={3.2} color="#6366f1" />
//       <pointLight position={[2, 2, 3]} intensity={4.5} distance={10} color="#ffffff" />
//       <pointLight position={[-2, 1, 3]} intensity={1.8} distance={8} color="#4f46e5" />
//     </>
//   );
// }

// const About = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   // Observer para detener el renderizado si no se ve la sección
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsVisible(entry.isIntersecting);
//       },
//       { threshold: 0.1 } // Se activa cuando al menos el 10% es visible
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) observer.unobserve(sectionRef.current);
//     };
//   }, []);

//   return (
//       <div ref={sectionRef} className='grid grid-cols-1 md:grid-cols-2 gap-5 items-center relative max-w-7xl mx-auto px-6'>
        
//         <div>
//           <h1 className='text-[2.5rem] md:text-[4rem] font-bold text-white'>Sobre mí</h1>
//           <p className='text-[1.1rem] md:text-[1.3rem] text-[#a1a1a1] font-light mt-6 leading-relaxed'>
//             Soy un desarrollador Full Stack especializado en el ecosistema <span className="text-white font-medium">JavaScript (React y Node.js)</span>. 
//             Me apasiona transformar ideas complejas en interfaces intuitivas y arquitecturas robustas. 
//             <br /><br />
//             He colaborado en diversos proyectos, desde <span className="text-white font-medium">paneles administrativos (CRM)</span> hasta <span className="text-white font-medium">plataformas de E-commerce</span>.
//           </p>
          
//           <button 
//             className='text-[1.1rem] mt-8 px-8 py-4 rounded-full text-white hover:scale-105 transition-all duration-300 bg-gradient-to-r from-[#7127BA] to-[#9137ea] font-semibold shadow-lg shadow-purple-500/20'
//             onClick={() => window.location.href = 'mailto:sebasmesadev@gmail.com'}
//           >
//             Hablemos de tu proyecto 🤝
//           </button>
//         </div>

//         {/* LADO 3D: Solo renderiza si isVisible es true */}
//         <div className='hidden md:flex h-[60vh] items-center justify-center'>
//           {isVisible ? (
//             <Canvas camera={{ position: [0, 0, 5], fov: 50 }} style={{ background: 'transparent' }}>
//               <color attach="background" args={["#000000"]} />
//               <ambientLight intensity={1.2} />
//               <CustomLights />
//               <Environment preset="studio" />
//               <Model />
//               <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={3} />
//             </Canvas>
//           ) : (
//             <div className="w-full h-full bg-black/20 animate-pulse rounded-3xl" /> 
//           )}
//         </div>

//         <AnimatedLogo isVisible={isVisible} />
//       </div>
//   );

//   function AnimatedLogo({ isVisible }) {
//     const logoRef = useRef(null);

//     useEffect(() => {
//       if (!isVisible) return; // Detener animación de imagen si no es visible

//       let frame;
//       let start = null;
//       function animateLogo(ts) {
//         if (!start) start = ts;
//         const elapsed = ts - start;
//         const y = Math.sin(elapsed / 600) * 20;
//         if (logoRef.current) {
//           logoRef.current.style.transform = `translateY(${y}px)`;
//         }
//         frame = requestAnimationFrame(animateLogo);
//       }
//       frame = requestAnimationFrame(animateLogo);
//       return () => cancelAnimationFrame(frame);
//     }, [isVisible]);

//     return (
//       <div className='flex justify-center md:hidden mt-[3rem]'>
//         <img
//           ref={logoRef}
//           src={LogoAbout}
//           alt="LogoAbout"
//           className='w-[300px] h-[300px] object-contain'
//           style={{ transition: 'transform 0.2s linear' }}
//         />
//       </div>
//     );
//   }
// }

// export default About;