// src/components/Constellation.tsx

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './constellation.scss';

const Constellation: React.FC = () => {
    return (
        <Canvas className="constellation-canvas" camera={{ position: [0, 0, 5], fov: 75 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Stars />
            <OrbitControls />
        </Canvas>
    );
};

const Stars: React.FC = () => {
    const starCount = 10000; // Aumentado para 10.000 estrelas
    return (
        <>
            {Array.from({ length: starCount }).map((_, index) => {
                const x = (Math.random() - 0.5) * 200; // Aumentando o intervalo de posição
                const y = (Math.random() - 0.5) * 200; // Aumentando o intervalo de posição
                const z = (Math.random() - 0.5) * 200; // Aumentando o intervalo de posição
                return (
                    <mesh key={index} position={[x, y, z]}>
                        <sphereGeometry args={[0.05, 16, 16]} />
                        <meshStandardMaterial color="white" />
                    </mesh>
                );
            })}
        </>
    );
};

export default Constellation;