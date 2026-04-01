/* eslint-disable react-hooks/purity */
import { Points, PointMaterial } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useMemo } from "react"
import { useRef } from "react"

export default function GalaxyParticles() {
  const pointsRef = useRef()

  const particles = useMemo(() => {
    const positions = new Float32Array(500 * 3) // Safe-mode reduction from 1000

    for (let i = 0; i < 500; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 80
      positions[i * 3 + 1] = (Math.random() - 0.5) * 80
      positions[i * 3 + 2] = (Math.random() - 0.5) * 80
    }

    return positions
  }, [])



  useFrame((_, delta) => {
    if (!pointsRef.current) return
    pointsRef.current.rotation.y += delta * 0.01
  })

  return (
    <Points ref={pointsRef} positions={particles} stride={3}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.16}
        sizeAttenuation
        depthWrite={false}
        opacity={0.85}
      />
    </Points>
  )
}