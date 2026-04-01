import { Float, MeshTransmissionMaterial } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"

function CrystalFragment({ position, color, size = 0.5 }) {
  const mesh = useRef()

  useFrame(({ mouse }, delta) => {
    if (!mesh.current) return
    const smoothing = 1 - Math.exp(-delta * 3)
    mesh.current.position.x += (position[0] + mouse.x * 0.4 - mesh.current.position.x) * smoothing
    mesh.current.position.y += (position[1] + mouse.y * 0.3 - mesh.current.position.y) * smoothing
    mesh.current.rotation.x += delta * 0.3
    mesh.current.rotation.y += delta * 0.2
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={mesh} position={position}>
        <dodecahedronGeometry args={[size, 0]} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={1}
          chromaticAberration={0.2}
          anisotropy={0.1}
          distortion={0.1}
          clearcoat={1}
          attenuationDistance={0.5}
          attenuationColor={color}
          color={color}
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  )
}

export default function FloatingShape() {
  return (
    <>
      <CrystalFragment
        position={[3, 4, -8]}
        color="#8b5cf6"
        size={0.6}
      />
      <CrystalFragment
        position={[-4, 1, -10]}
        color="#3b82f6"
        size={0.5}
      />
      <CrystalFragment
        position={[5, -6, -12]}
        color="#ec4899"
        size={0.7}
      />
      <CrystalFragment
        position={[-2, -8, -15]}
        color="#6366f1"
        size={0.4}
      />
    </>
  )
}
