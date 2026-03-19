import { Canvas, useFrame } from "@react-three/fiber"
import { Stars } from "@react-three/drei"
import { useRef } from "react"

import FloatingShape from "./FloatingShape"
import GalaxyParticles from "./GalaxyParticles"
import ShootingStars from "./ShootingStars"
import WarpGalaxy from "./WarpGalaxy"
//import GlobeProjects from "./GlobeProjects"

function MouseLight() {
  const light = useRef()

  useFrame(({ mouse }, delta) => {
    if (!light.current) return

    const smoothing = 1 - Math.exp(-delta * 6)
    light.current.position.x += (mouse.x * 6 - light.current.position.x) * smoothing
    light.current.position.y += (mouse.y * 4 - light.current.position.y) * smoothing
    light.current.position.z = 2
  })

  return <pointLight ref={light} intensity={1.6} color="#8b5cf6" />
}

function CameraDrift() {
  useFrame(({ camera, clock }) => {
    const t = clock.getElapsedTime()
    camera.position.x = Math.sin(t * 0.08) * 0.35
    camera.position.y = Math.cos(t * 0.11) * 0.25
    camera.lookAt(0, 0, -8)
  })

  return null
}

export default function Background3D() {

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">

      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.6]}
        shadows
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <fog attach="fog" args={["#050816", 12, 52]} />

        <CameraDrift />

        <WarpGalaxy />

        {/* Mouse reactive light */}
        <MouseLight />

        {/* Accent light */}
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#6366f1" />

        {/* Galaxy background stars */}
        <Stars
          radius={100}
          depth={50}
          count={2800}
          factor={3}
          saturation={0}
          fade
          speed={0.65}
        />

        {/* Galaxy particle cloud */}
        <GalaxyParticles />

        {/* Shooting star animation */}
        <ShootingStars />

        {/* Floating geometric shapes */}
        <FloatingShape />

        {/* Project globe */}
        {/* <GlobeProjects /> */}

        {/* Lighting */}
        <ambientLight intensity={0.25} />
        <hemisphereLight args={["#8ab4ff", "#050816", 0.55]} />
        <directionalLight
          castShadow
          position={[2.5, 4, 2]}
          intensity={0.9}
          color="#9ca3ff"
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

      </Canvas>

    </div>
  )
}