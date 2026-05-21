import React, { useMemo } from 'react';
import { Parallax } from 'react-scroll-parallax';

function ParallaxStars() {
    // Generamos la configuración de las estrellas una sola vez
    const stars = useMemo(() => {
        const TOTAL_STARS = 20; // Aquí puedes cambiar la cantidad fácilmente
        return Array.from({ length: TOTAL_STARS }).map((_, i) => ({
            id: i,
            // Valores aleatorios para que no se vean iguales
            size: Math.random() * (20 - 5) + 5, // Tamaños entre 20px y 60px
            top: `${Math.random() * 100}%`,       // Posición vertical aleatoria
            left: `${Math.random() * 100}%`,      // Posición horizontal aleatoria
            opacity: Math.random() * (0.3 - 0.1) + 0.2,
            // Desplazamiento parallax único por estrella
            speedX: [`${(Math.random() * -200) - 50}vw`, `${(Math.random() * 200) + 50}vw`],
            speedY: [`${(Math.random() * -300)}px`, `${(Math.random() * 300)}px`],
        }));
    }, []);


//     const SparkleIcon = () => (

//   );

    return (
        <div style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            overflow: 'hidden', 
            pointerEvents: 'none' 
        }}>
            {stars.map((star) => (
                <Parallax 
                    key={star.id}
                    translateX={star.speedX} 
                    translateY={star.speedY} 
                    style={{ 
                        position: 'absolute', 
                        top: star.top, 
                        left: star.left, 
                        zIndex: 1 
                    }}
                >
                    <svg
                        width={star.size}
                        height={star.size}
                        opacity={star.opacity}
                        viewBox="0 0 200 200"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current"
                    >
                        <path d="M100 0C100 55.2285 144.772 100 200 100C144.772 100 100 144.772 100 200C100 144.772 55.2285 100 0 100C55.2285 100 100 55.2285 100 0Z" />
                    </svg>         
                </Parallax>
            ))}
        </div>
    );
}

export default ParallaxStars;