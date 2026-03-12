import { Points, PointMaterial } from "@react-three/drei"
import { useMemo } from "react"
import * as THREE from "three"

export default function GalaxyParticles() {

  const particles = useMemo(() => {
    const positions = new Float32Array(3000 * 3)

    for (let i = 0; i < 3000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 80
      positions[i * 3 + 1] = (Math.random() - 0.5) * 80
      positions[i * 3 + 2] = (Math.random() - 0.5) * 80
    }

    return positions
  }, [])

  return (
    <Points positions={particles} stride={3}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.2}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  )
}