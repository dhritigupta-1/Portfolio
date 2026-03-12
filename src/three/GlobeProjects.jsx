import { Float } from "@react-three/drei"

export default function GlobeProjects() {

  return (
    <Float speed={1}>
      <mesh position={[0, -3, -5]}>
        <sphereGeometry args={[1.8, 32, 32]} />
        <meshStandardMaterial
          color="#1e293b"
          wireframe
        />
      </mesh>
    </Float>
  )
}