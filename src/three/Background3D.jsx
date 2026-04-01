import { Canvas, useFrame } from "@react-three/fiber"
import { Stars, Grid, Float } from "@react-three/drei"
import React, { useRef, useMemo } from "react"
import * as THREE from "three"

import FloatingShape from "./FloatingShape"
import GalaxyParticles from "./GalaxyParticles"
import ShootingStars from "./ShootingStars"
import WarpGalaxy from "./WarpGalaxy"
import CrystalShape from "./CrystalShape"
import useTheme from "../hooks/useTheme"

function MouseLight() {
  const light = useRef()

  useFrame(({ mouse }, delta) => {
    if (!light.current) return
    const smoothing = 1 - Math.exp(-delta * 6)
    light.current.position.x += (mouse.x * 10 - light.current.position.x) * smoothing
    light.current.position.y += (mouse.y * 10 - light.current.position.y) * smoothing
    light.current.position.z = 5
  })

  return <pointLight ref={light} intensity={2} color="#8b5cf6" distance={20} />
}

function ScrollCamera() {
  const targetPos = useRef(new THREE.Vector3(0, 0, 8))
  const currentPos = useRef(new THREE.Vector3(0, 0, 8))

  useFrame(({ camera, clock }) => {
    const scrollY = window.scrollY
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight
    const scrollPercent = scrollY / (maxScroll || 1)

    targetPos.current.x = Math.sin(scrollPercent * Math.PI) * 4
    targetPos.current.y = -scrollPercent * 15
    targetPos.current.z = 8 + Math.cos(scrollPercent * Math.PI) * 2

    currentPos.current.lerp(targetPos.current, 0.05)
    camera.position.copy(currentPos.current)

    const t = clock.getElapsedTime()
    camera.position.x += Math.sin(t * 0.1) * 0.05
    camera.position.y += Math.cos(t * 0.1) * 0.02

    camera.lookAt(0, -scrollPercent * 8, -10)
  })

  return null
}

export default function Background3D() {
  const isDark = useTheme()
  const bgColor = isDark ? "#010208" : "#f8fafc"
  const gridColor = isDark ? "#3b82f6" : "#6366f1"

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10" style={{ backgroundColor: bgColor }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          stencil: false,
          depth: true
        }}
      >
        <color attach="background" args={[bgColor]} />
        <fog attach="fog" args={[bgColor, 10, 50]} />

        <ScrollCamera />

        {/* Unified 3D Grid */}
        <Grid
          position={[0, -20, 0]}
          sectionSize={3}
          sectionColor="#915eff"
          sectionThickness={1}
          cellSize={1}
          cellColor={gridColor}
          cellThickness={0.5}
          infiniteGrid
          fadeDistance={50}
          fadeStrength={5}
        />

        {/* 3D Warp Galaxy - Only show in dark mode for best effect */}
        {isDark && <WarpGalaxy />}

        {/* Stable Crystal Cluster with Float */}
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
          <CrystalShape position={[5, 2, -5]} color="#8b5cf6" rotationSpeed={0.2} />
        </Float>
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
          <CrystalShape position={[-6, -8, -10]} color="#3b82f6" rotationSpeed={0.1} />
        </Float>
        <Float speed={2.5} rotationIntensity={1.5} floatIntensity={1.5}>
          <CrystalShape position={[3, -18, -8]} color="#ec4899" rotationSpeed={0.25} />
        </Float>

        <MouseLight />

        {isDark && (
          <Stars
            radius={100}
            depth={50}
            count={1000}
            factor={4}
            saturation={0}
            fade
            speed={0.3}
          />
        )}

        {isDark && <GalaxyParticles />}
        {isDark && <ShootingStars />}
        <FloatingShape />

        <ambientLight intensity={isDark ? 0.5 : 0.8} />
        <hemisphereLight args={["#8ab4ff", isDark ? "#010208" : "#f8fafc", 0.4]} />
        <directionalLight position={[5, 10, 5]} intensity={isDark ? 1.5 : 2} color="#ffffff" />
      </Canvas>
    </div>
  )
}