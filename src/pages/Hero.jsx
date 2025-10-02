import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model() {
  const { scene } = useGLTF("/models/logoAlt.glb");
  // Detect screen width to adjust scale and position for mobile
  const isMobile = window.innerWidth < 768;
  const scale = isMobile ? 4 : 6;
  const position = isMobile ? [0, -2, 0] : [0, -2.7, 0];

  return <primitive object={scene} scale={scale} position={position} />;
}

const Hero = () => {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-[3rem]">
        <div className="mt-[5em]">
          <ul className="w-[80%] text-[1.2rem] text-[#a1a1a1] font-light flex flex-col gap-[1.5rem] leading-[1.8rem]">
            <li>[Desarrollador web especializado]</li>
            <li>[Apasionado por la creación de experiencias digitales atractivas]</li>
            <li>[Enfocado en la accesibilidad y la usabilidad]</li>
          </ul>
        </div>
        <div
          style={{
            height: "70vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={1} />
            <directionalLight position={[1, 1, 5]} intensity={1} />
            <Model />
            <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={4} />
          </Canvas>
        </div>
        <div className="flex items-end justify-end mb-[3rem]">
          <ul className="w-[80%] text-[1.1rem] text-[#a1a1a1] font-light flex flex-col gap-[1.2rem] leading-[1.6rem]">
            <li>
              <span className="italic">"La innovación distingue entre un líder y un seguidor."</span>
              <br />
              <span className="text-xs text-[#888]">- Steve Jobs</span>
            </li>
            <li>
              <span className="italic">"La tecnología es mejor cuando reúne a las personas."</span>
              <br />
              <span className="text-xs text-[#888]">- Matt Mullenweg</span>
            </li>
            <li>
              <span className="italic">"El mejor modo de predecir el futuro es inventarlo."</span>
              <br />
              <span className="text-xs text-[#888]">- Alan Kay</span>
            </li>
            <li>
              <span className="italic">"No hay nada como una idea cuya hora ha llegado."</span>
              <br />
              <span className="text-xs text-[#888]">- Victor Hugo</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Hero;
