import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei'
import * as THREE from 'three'

// Vessel 3D Model Component
const VesselModel = ({ vessel, flooringConfig }) => {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001
    }
  })

  // Create flooring texture based on config
  const createFlooringTexture = () => {
    const canvas = document.createElement('canvas')
    canvas.width = 512
    canvas.height = 512
    const ctx = canvas.getContext('2d')

    // Background
    ctx.fillStyle = flooringConfig.color1
    ctx.fillRect(0, 0, 512, 512)

    // Pattern
    ctx.strokeStyle = flooringConfig.color2
    ctx.lineWidth = flooringConfig.lineWidth * 512

    if (flooringConfig.pattern === 'teak') {
      // Teak pattern - horizontal lines
      for (let i = 0; i < 512; i += 20) {
        ctx.beginPath()
        ctx.moveTo(0, i)
        ctx.lineTo(512, i)
        ctx.stroke()
      }
    } else if (flooringConfig.pattern === 'diamond') {
      // Diamond pattern
      for (let i = 0; i < 512; i += 40) {
        for (let j = 0; j < 512; j += 40) {
          ctx.beginPath()
          ctx.moveTo(i + 20, j)
          ctx.lineTo(i + 40, j + 20)
          ctx.lineTo(i + 20, j + 40)
          ctx.lineTo(i, j + 20)
          ctx.closePath()
          ctx.stroke()
        }
      }
    } else if (flooringConfig.pattern === 'herringbone') {
      // Herringbone pattern
      for (let i = 0; i < 512; i += 30) {
        ctx.save()
        ctx.translate(i, 0)
        ctx.rotate(Math.PI / 4)
        ctx.strokeRect(0, 0, 20, 60)
        ctx.restore()
      }
    }

    const texture = new THREE.CanvasTexture(canvas)
    texture.wrapS = THREE.RepeatWrapping
    texture.wrapT = THREE.RepeatWrapping
    texture.repeat.set(2, 2)
    return texture
  }

  const flooringTexture = createFlooringTexture()

  return (
    <group>
      {/* Vessel Hull */}
      <mesh
        ref={meshRef}
        position={[0, 0, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[4, 1, 2]} />
        <meshStandardMaterial color={hovered ? '#00a8e8' : '#ffffff'} />
      </mesh>

      {/* Deck/Floor */}
      <mesh position={[0, 0.51, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[4, 2]} />
        <meshStandardMaterial map={flooringTexture} />
      </mesh>

      {/* Cabin */}
      <mesh position={[0, 1.2, 0]}>
        <boxGeometry args={[2, 1.5, 1.5]} />
        <meshStandardMaterial color="#e0e0e0" />
      </mesh>
    </group>
  )
}

const Viewer3D = ({ vessel, flooringConfig }) => {
  return (
    <div className="canvas-container bg-gradient-to-b from-sky-200 to-blue-400 rounded-lg">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[5, 3, 5]} />
        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={3}
          maxDistance={15}
        />
        
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />
        
        <VesselModel vessel={vessel} flooringConfig={flooringConfig} />
        
        {/* Water */}
        <mesh position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <planeGeometry args={[50, 50]} />
          <meshStandardMaterial color="#1e90ff" opacity={0.6} transparent />
        </mesh>
        
        <Environment preset="sunset" />
      </Canvas>
      
      <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 p-3 rounded-lg shadow">
        <p className="text-sm font-bold">Controls:</p>
        <p className="text-xs">Left Click + Drag: Rotate</p>
        <p className="text-xs">Right Click + Drag: Pan</p>
        <p className="text-xs">Scroll: Zoom</p>
      </div>
    </div>
  )
}

export default Viewer3D
