import React, { useEffect, useRef, useState } from 'react';

const CursorGlow = () => {
    const glowRef = useRef(null);
    const mousePos = useRef({ x: 0, y: 0 });
    const delayedPos = useRef({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
            
            const target = e.target;
            const isClickable = window.getComputedStyle(target).cursor === 'pointer';
            setIsPointer(isClickable);
        };

        const animate = () => {
            const lerpFactor = 0.15;
            delayedPos.current.x += (mousePos.current.x - delayedPos.current.x) * lerpFactor;
            delayedPos.current.y += (mousePos.current.y - delayedPos.current.y) * lerpFactor;

            if (glowRef.current) {
                glowRef.current.style.transform = `translate3d(calc(${delayedPos.current.x}px - 50%), calc(${delayedPos.current.y}px - 50%), 0)`;
            }
            requestAnimationFrame(animate);
        };

        const animationId = requestAnimationFrame(animate);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <div
            ref={glowRef}
            style={{
                position: 'fixed',
                left: 0,
                top: 0,
                // El tamaño cambia dinámicamente
                width: isPointer ? '25px' : '20px',
                height: isPointer ? '25px' : '20px',
                pointerEvents: 'none',
                borderRadius: '50%',
                background: 'white',
                boxShadow: isPointer 
                    ? '0 0 30px 10px rgba(255, 255, 255, 0.6)' 
                    : '0 0 15px 2px rgba(255, 255, 255, 0.3)',
                zIndex: 9999,
                mixBlendMode: 'difference',
                willChange: 'width, height, transform',
                // Transición suave para el cambio de tamaño
                transition: 'width 0.3s ease, height 0.3s ease, box-shadow 0.3s ease',
            }}
        />
    );
};

export default CursorGlow;