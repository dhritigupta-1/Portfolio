import { Canvas, useFrame } from "@react-three/fiber"
import { Stars, OrbitControls } from "@react-three/drei"
import { useRef } from "react"

import FloatingShape from "./FloatingShape"
import GalaxyParticles from "./GalaxyParticles"
import ShootingStars from "./ShootingStars"
import WarpGalaxy from "./WarpGalaxy"
//import GlobeProjects from "./GlobeProjects"

function MouseLight() {
  const light = useRef()

  useFrame(({ mouse }) => {
    if (!light.current) return

    light.current.position.x += (mouse.x * 10 - light.current.position.x) * 0.1
    light.current.position.y += (mouse.y * 6 - light.current.position.y) * 0.1
  })

  return <pointLight ref={light} intensity={2} color="#6366f1" />
}

export default function Background3D() {

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">

      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 2]}
      >
        <WarpGalaxy />

        {/* Mouse reactive light */}
        <MouseLight />

        {/* Accent light */}
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#6366f1" />

        {/* Galaxy background stars */}
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
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
        <ambientLight intensity={0.4} />
        <directionalLight position={[2, 2, 2]} intensity={1} />

        {/* Camera controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.25}
        />

      </Canvas>

    </div>
  )
}