import React, { useEffect, useRef } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import LogoAbout from '../assets/logoabout.png';

function Model() {
    const { scene } = useGLTF("/models/logoAlt.glb");
    const isMobile = window.innerWidth < 768;
    const scale = isMobile ? 2 : 6;
    const position = isMobile ? [0, -2, 0] : [0, -3, 0];

    return <primitive object={scene} scale={scale} position={position} />;
}

const About = () => {
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-[4rem] mb-[8rem] items-center'>
                <div>
                    <h1 className='text-[2.5rem] md:text-[4rem] font-bold'>Sobre mí 🚀</h1>
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
                    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                        <ambientLight intensity={1} />
                        <directionalLight position={[2, 2, 5]} intensity={1} />
                        <Model />
                        <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={4} />
                    </Canvas>
                </div>

                <AnimatedLogo />
            </div>
        </>
    )

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
