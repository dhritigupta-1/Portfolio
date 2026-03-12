import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

export default function ShootingStars() {

  const star = useRef()

  useFrame(() => {
    if (!star.current) return

    star.current.position.x += 0.6
    star.current.position.y -= 0.3

    if (star.current.position.x > 15) {
      star.current.position.x = -15
      star.current.position.y = 8
    }
  })

  return (
    <mesh ref={star} position={[-15, 8, -10]}>
      <boxGeometry args={[0.02, 0.02, 2]} />
      <meshBasicMaterial color="white" />
    </mesh>
  )
}