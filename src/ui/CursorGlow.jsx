import React, { useEffect, useRef } from 'react';

const CursorGlow = () => {
    const glowRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (glowRef.current) {
                glowRef.current.style.left = `${e.clientX}px`;
                glowRef.current.style.top = `${e.clientY}px`;
            }
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            ref={glowRef}
            style={{
                position: 'fixed',
                left: 0,
                top: 0,
                width: '1000px',
                height: '1000px',
                pointerEvents: 'none',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(189, 208, 223, 0.04) 0%, rgba(0,0,0,0) 70%)',
                transform: 'translate(-50%, -50%)',
                zIndex: 9999,
                transition: 'background 0.2s',
                mixBlendMode: 'screen',
            }}
        />
    );
};

export default CursorGlow;