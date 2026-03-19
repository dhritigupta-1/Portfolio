/* eslint-disable react-hooks/purity */
import { Points, PointMaterial } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useMemo, useRef, useEffect } from "react"

export default function WarpGalaxy() {

  const points = useRef()
  const velocity = useRef(0)

  const particles = useMemo(() => {

    const count = 5200
    const arr = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {

      arr[i * 3] = (Math.random() - 0.5) * 80
      arr[i * 3 + 1] = (Math.random() - 0.5) * 80
      arr[i * 3 + 2] = Math.random() * -200

    }

    return arr

  }, [])

  // Detect scroll
  useEffect(() => {

    const handleScroll = () => {
      velocity.current = Math.min(0.2, velocity.current + 0.08)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)

  }, [])

  useFrame((_, delta) => {

    if (!points.current) return

    const baseSpeed = 4.8 * delta
    const burstSpeed = velocity.current * (delta * 45)
    const speed = baseSpeed + burstSpeed

    const positions = points.current.geometry.attributes.position.array

    for (let i = 0; i < positions.length; i += 3) {

      positions[i + 2] += speed

      if (positions[i + 2] > 10) {
        positions[i + 2] = -200
      }

    }

    velocity.current = Math.max(0, velocity.current - delta * 0.35)

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