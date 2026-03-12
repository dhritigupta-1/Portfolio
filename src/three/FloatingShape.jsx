import { Float } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

function GravityShape({ position, geometry, color }) {

  const mesh = useRef()

  useFrame(({ mouse }) => {
    if (!mesh.current) return

    mesh.current.position.x += (position[0] + mouse.x * 1.5 - mesh.current.position.x) * 0.05
    mesh.current.position.y += (position[1] + mouse.y * 1.2 - mesh.current.position.y) * 0.05
  })

  return (
    <Float speed={2} rotationIntensity={1.3} floatIntensity={2}>
      <mesh ref={mesh} position={position}>
        {geometry}
        <meshStandardMaterial color={color} wireframe />
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