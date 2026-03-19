import { Float } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

function GravityShape({ position, geometry, color }) {

  const mesh = useRef()

  useFrame(({ mouse }, delta) => {
    if (!mesh.current) return

    const smoothing = 1 - Math.exp(-delta * 4)
    mesh.current.position.x += (position[0] + mouse.x * 1.1 - mesh.current.position.x) * smoothing
    mesh.current.position.y += (position[1] + mouse.y * 0.9 - mesh.current.position.y) * smoothing
  })

  return (
    <Float speed={1.6} rotationIntensity={0.9} floatIntensity={1.8}>
      <mesh ref={mesh} castShadow receiveShadow position={position}>
        {geometry}
        <meshStandardMaterial
          color={color}
          wireframe
          roughness={0.15}
          metalness={0.65}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  )
}

export default function FloatingShape() {
  return (
    <>
      <GravityShape
        position={[3,2,-4]}
        geometry={<icosahedronGeometry args={[0.9]} />}
        color="#6366f1"
      />

      <GravityShape
        position={[-3,-1,-5]}
        geometry={<octahedronGeometry args={[0.9]} />}
        color="#22c55e"
      />

      <GravityShape
        position={[1,3,-5]}
        geometry={<coneGeometry args={[0.8,1.5,4]} />}
        color="#38bdf8"
      />
    </>
  )
}