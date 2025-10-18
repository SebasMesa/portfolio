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
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mb-[8rem] items-center relative'>

        <div>
          <h1 className='text-[2.5rem] md:text-[4rem] font-bold text-glass-macos'>Sobre mí</h1>
          <p className='text-[1.3rem] text-[#a1a1a1] font-light mt-[1rem]'>
            ¡Hola! Soy Sebastián Mesa, un desarrollador web de 18 años de Colombia,
            apasionado por crear experiencias digitales que realmente hagan la diferencia.
            <br />
            Me encanta unir creatividad y tecnología para diseñar sitios que no solo se vean increíbles,
            sino que también sean rápidos, accesibles y fáciles de usar.
            <br />
            Trabajo con herramientas como <span className="text-white font-medium">React, Angular, Python, Firebase, SQL, PHP y Tailwind</span>,
            lo que me permite dar vida a proyectos modernos y escalables.
            <br />
            🎯 Mi objetivo: ayudar a personas, marcas y emprendedores a destacar en el mundo digital con páginas y aplicaciones
            que transmitan confianza, frescura y resultados reales.
          </p>
          <div>
            <button className='text-[1.1rem] mt-[2rem] px-6 py-3 rounded-[10px] text-white hover:opacity-80 transition-opacity duration-300 bg-discount-gradient font-semibold'>
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
