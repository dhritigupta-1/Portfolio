import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const CrystalShape = ({ position = [0, 0, 0], color = "#ffffff", rotationSpeed = 0.2 }) => {
  const mesh = useRef();

  // High-performance geometry
  const geometry = useMemo(() => new THREE.IcosahedronGeometry(1.2, 0), []);

  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y += delta * rotationSpeed;
      mesh.current.rotation.x += delta * (rotationSpeed * 0.3);

      const t = state.clock.getElapsedTime();
      const s = 1 + Math.sin(t * 1.5) * 0.03;
      mesh.current.scale.set(s, s, s);
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={mesh} position={position} geometry={geometry}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
          metalness={0.9}
          roughness={0.1}
          flatShading={true} // Sharp crystal edges
        />
        {/* Subtle local glow */}
        <pointLight intensity={1} distance={3} color={color} />
      </mesh>
    </Float>
  );
};

export default CrystalShape;

