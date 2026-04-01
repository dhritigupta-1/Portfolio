import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

const GlassMorphingSphere = ({ position = [0, 0, 0], color = "#ffffff" }) => {
  const mesh = useRef();
  
  useFrame((state, delta) => {
    if (mesh.current) {
      // Very subtle organic distortion over time
      const time = state.clock.getElapsedTime();
      mesh.current.rotation.x = Math.sin(time * 0.2) * 0.1;
      mesh.current.rotation.y += delta * 0.1;
      
      // Subtle pulse
      const scale = 1 + Math.sin(time * 0.5) * 0.05;
      mesh.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={mesh} position={position}>
        <icosahedronGeometry args={[1.5, 15]} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={1.5}
          chromaticAberration={0.06}
          anisotropy={0.1}
          distortion={0.2}
          distortionScale={0.3}
          temporalDistortion={0.5}
          clearcoat={1}
          attenuationDistance={0.5}
          attenuationColor="#ffffff"
          color={color}
          transparent
          opacity={0.3}
        />
      </mesh>
    </Float>
  );
};

export default GlassMorphingSphere;

