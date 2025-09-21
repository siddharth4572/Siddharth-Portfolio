import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Text3D, MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedSphere = ({ position, color, scale = 1 }) => {
  const meshRef = useRef();
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={2}
    >
      <Sphere ref={meshRef} position={position} scale={scale}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.1}
        />
      </Sphere>
    </Float>
  );
};

const FloatingCube = ({ position }) => {
  const meshRef = useRef();
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.4;
      meshRef.current.rotation.y += delta * 0.6;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial 
        color="#8b5cf6" 
        emissive="#4c1d95"
        emissiveIntensity={0.2}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
};

const LaptopModel = () => {
  const groupRef = useRef();
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.5}
      floatIntensity={1}
    >
      <group ref={groupRef} position={[0, -0.5, 0]}>
        {/* Laptop Base */}
        <mesh position={[0, 0, 0]} rotation={[-0.1, 0, 0]}>
          <boxGeometry args={[2, 0.1, 1.5]} />
          <meshStandardMaterial 
            color="#1f1f1f" 
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
        
        {/* Laptop Screen */}
        <mesh position={[0, 0.6, -0.7]} rotation={[-0.3, 0, 0]}>
          <boxGeometry args={[1.8, 1.2, 0.05]} />
          <meshStandardMaterial 
            color="#0a0a0a" 
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
        
        {/* Screen Content */}
        <mesh position={[0, 0.6, -0.68]} rotation={[-0.3, 0, 0]}>
          <planeGeometry args={[1.6, 1]} />
          <meshStandardMaterial 
            color="#8b5cf6" 
            emissive="#4c1d95"
            emissiveIntensity={0.3}
          />
        </mesh>
        
        {/* Code Lines */}
        {[0.3, 0.1, -0.1, -0.3].map((y, index) => (
          <mesh key={index} position={[-0.3, 0.6 + y, -0.67]} rotation={[-0.3, 0, 0]}>
            <planeGeometry args={[1 - index * 0.2, 0.05]} />
            <meshStandardMaterial 
              color="#22c55e" 
              emissive="#166534"
              emissiveIntensity={0.2}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
};

const AvatarScene = () => {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
      <spotLight 
        position={[0, 10, 0]} 
        angle={0.3} 
        penumbra={1} 
        intensity={1} 
        color="#ec4899" 
      />

      {/* Main Laptop */}
      <LaptopModel />

      {/* Floating Elements */}
      <AnimatedSphere position={[-2, 1, 1]} color="#8b5cf6" scale={0.3} />
      <AnimatedSphere position={[2, -1, -1]} color="#ec4899" scale={0.4} />
      <AnimatedSphere position={[1, 2, 0]} color="#06b6d4" scale={0.25} />
      
      <FloatingCube position={[-1.5, 1.5, 0.5]} />
      <FloatingCube position={[1.8, -0.5, 1]} />

      {/* Particle Field */}
      <group>
        {Array.from({ length: 20 }).map((_, index) => (
          <AnimatedSphere 
            key={index}
            position={[
              (Math.random() - 0.5) * 6,
              (Math.random() - 0.5) * 4,
              (Math.random() - 0.5) * 4
            ]}
            color={['#8b5cf6', '#ec4899', '#06b6d4'][index % 3]}
            scale={0.05 + Math.random() * 0.1}
          />
        ))}
      </group>

      {/* Controls */}
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
};

const ThreeAvatar = () => {
  return (
    <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/10 to-black/20 backdrop-blur-sm border border-purple-500/20">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <AvatarScene />
      </Canvas>
    </div>
  );
};

export default ThreeAvatar;