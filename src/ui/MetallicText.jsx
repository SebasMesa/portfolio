import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Text3D, Center } from '@react-three/drei';
import { MeshPhysicalMaterial, Color } from 'three';

// Componente de texto 3D metálico
function MetallicText3D({
    text = "TEXTO",
    type = "chrome",
    autoRotate = false,
    fontSize = 1,
}) {
    const textRef = useRef();

    // Materiales para diferentes tipos de metal
    const materials = useMemo(() => ({
        chrome: {
            color: new Color(0xe8e8e8),
            metalness: 1,
            roughness: 0.05,
            envMapIntensity: 3.5,
            clearcoat: 1,
            clearcoatRoughness: 0.05,
            reflectivity: 3,
        },
        gold: {
            color: new Color(0xffd700),
            metalness: 1,
            roughness: 0.15,
            envMapIntensity: 2,
            clearcoat: 1,
            clearcoatRoughness: 0.1,
            reflectivity: 0.9,
        },
        silver: {
            color: new Color(0xc0c0c0),
            metalness: 1,
            roughness: 0.1,
            envMapIntensity: 2.2,
            clearcoat: 1,
            clearcoatRoughness: 0.08,
            reflectivity: 0.95,
        },
        bronze: {
            color: new Color(0xcd7f32),
            metalness: 1,
            roughness: 0.2,
            envMapIntensity: 1.8,
            clearcoat: 0.8,
            clearcoatRoughness: 0.15,
            reflectivity: 0.85,
        },
        glass: {
            color: new Color(0xffffff),
            metalness: 0.05,
            roughness: 0.05,
            transmission: 1,
            transparent: true,
            opacity: 1,
            thickness: 0.6,
            ior: 1.45,
            envMapIntensity: 0.8,
            clearcoat: 0.3,
            clearcoatRoughness: 0.1,
            attenuationColor: new Color(0xaaddff),
            attenuationDistance: 2.5,
            emissive: new Color(0xffffff),
            emissiveIntensity: 0.005,
        }
    }), []);

    // Animación sutil
    useFrame((state) => {
        if (autoRotate && textRef.current) {
            textRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
        }
    });

    return (
        <Center>
            <Text3D
                ref={textRef}
                font="/portfolio/src/assets/font/Kingvoon.json"
                size={fontSize}
                height={fontSize * 0.2}
                curveSegments={12}
                bevelEnabled
                bevelThickness={fontSize * 0.03}
                bevelSize={fontSize * 0.02}
                bevelOffset={0}
                bevelSegments={5}
            >
                {text}
                <meshPhysicalMaterial {...materials[type]} />
            </Text3D>
        </Center>
    );
}

// Luces personalizadas
function CustomLights({ type }) {
    return (
        <>
            <ambientLight intensity={0.8} />
            <directionalLight position={[10, 10, 5]} intensity={1.5} />
            <directionalLight position={[-10, -10, -5]} intensity={0.5} />
            <pointLight position={[0, 5, 0]} intensity={1} color="#ffffff" />

            {/* Luces especiales para glass */}
            {type === 'glass' && (
                <>
                    <directionalLight position={[-5, 3, -5]} intensity={4.5} color="#8b5cf6" />
                    <directionalLight position={[5, 2, -3]} intensity={3.2} color="#6366f1" />
                    <pointLight position={[2, 2, 3]} intensity={4.5} distance={10} color="#ffffff" />
                    <pointLight position={[-2, 1, 3]} intensity={1.8} distance={8} color="#4f46e5" />
                </>
            )}
        </>
    );
}

// Componente principal - Título metálico 3D
export default function MetallicTitle({
    children,
    type = "chrome", // chrome, gold, silver, bronze, glass
    autoRotate = false,
    enableControls = false,
    height = "200px", // Altura del canvas
    className = "",
    responsive = true, // Ajuste automático de tamaño
}) {
    // Calcular tamaño de fuente basado en longitud del texto y responsive
    const calculateFontSize = () => {
        const textLength = children.length;
        const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
        
        if (!responsive) return 1;
        
        // Fórmula para ajustar tamaño según longitud
        let baseSize = 1;
        if (textLength > 15) baseSize = 0.6;
        else if (textLength > 10) baseSize = 0.8;
        else if (textLength > 5) baseSize = 1;
        else baseSize = 1.2;
        
        // Reducir en móvil
        return isMobile ? baseSize * 0.7 : baseSize;
    };

    const fontSize = calculateFontSize();

    // Calcular distancia de cámara basada en texto
    const calculateCameraDistance = () => {
        const textLength = children.length;
        if (textLength > 15) return 12;
        if (textLength > 10) return 10;
        if (textLength > 5) return 8;
        return 6;
    };

    const cameraDistance = calculateCameraDistance();

    return (
        <div className={`metallic-title-container ${className}`} style={{ height, width: '100%' }}>
            <Canvas 
                camera={{ position: [0, 0, cameraDistance], fov: 50 }}
                gl={{ alpha: true, antialias: true }}
                style={{ background: 'transparent' }}
            >
                
                {/* Luces */}
                <CustomLights type={type} />
                
                {/* Environment para reflejos */}
                <Environment preset="studio" />
                
                {/* Texto 3D */}
                <MetallicText3D
                    text={children}
                    type={type}
                    autoRotate={autoRotate}
                    fontSize={fontSize}
                />
                
                {/* Controles opcionales */}
                {enableControls && (
                    <OrbitControls
                        enablePan={false}
                        enableZoom={false}
                        autoRotate={autoRotate}
                        autoRotateSpeed={2}
                    />
                )}
            </Canvas>
        </div>
    );
}

// Exportar también una versión con scene completa para casos especiales
export function MetallicTextScene({
    text = "TEXTO",
    type = "chrome",
    autoRotate = false,
    showControls = true,
    height = "400px",
}) {
    return (
        <MetallicTitle
            type={type}
            autoRotate={autoRotate}
            enableControls={showControls}
            height={height}
            responsive={false}
        >
            {text}
        </MetallicTitle>
    );
}