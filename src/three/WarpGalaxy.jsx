import { Points, PointMaterial } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useMemo, useRef, useEffect } from "react"

export default function WarpGalaxy() {

  const points = useRef()
  const velocity = useRef(0)

  const particles = useMemo(() => {

    const count = 8000
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
      velocity.current = 0.15   // VERY slow warp speed
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  }, [])

  useFrame(() => {

    if (!points.current) return

    const positions = points.current.geometry.attributes.position.array

    for (let i = 0; i < positions.length; i += 3) {

      positions[i + 2] += velocity.current

      if (positions[i + 2] > 10) {
        positions[i + 2] = -200
      }

    }

    // smooth slowdown
    velocity.current *= 0.96

    points.current.geometry.attributes.position.needsUpdate = true

  })

  return (
    <Points ref={points} positions={particles} stride={3}>
      <PointMaterial
        color="white"
        size={0.12}
        transparent
        depthWrite={false}
      />
    </Points>
  )
}