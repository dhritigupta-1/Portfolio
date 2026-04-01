/* eslint-disable react-hooks/purity */
import { Points, PointMaterial } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useMemo, useRef, useEffect } from "react"

export default function WarpGalaxy() {

  const points = useRef()
  const velocity = useRef(0)

  const particles = useMemo(() => {
    const count = 800 // Drastic reduction for absolute stability
    const arr = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 60
      arr[i * 3 + 1] = (Math.random() - 0.5) * 60
      arr[i * 3 + 2] = Math.random() * -150
    }

    return arr
  }, [])

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      velocity.current = Math.min(0.15, velocity.current + 0.05)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useFrame((_, delta) => {
    if (!points.current) return
    
    // Cap delta to prevent huge jumps on hang
    const d = Math.min(delta, 0.05)
    
    const baseSpeed = 4 * d
    const burstSpeed = velocity.current * (d * 30)
    const speed = baseSpeed + burstSpeed

    const positions = points.current.geometry.attributes.position.array

    for (let i = 0; i < positions.length; i += 3) {
      positions[i + 2] += speed
      if (positions[i + 2] > 10) {
        positions[i + 2] = -150
      }
    }

    velocity.current = Math.max(0, velocity.current - d * 0.2)
    points.current.geometry.attributes.position.needsUpdate = true
  })


  return (
    <Points ref={points} positions={particles} stride={3}>
      <PointMaterial
        color="white"
        size={0.1}
        transparent
        depthWrite={false}
        opacity={0.9}
      />
    </Points>
  )
}