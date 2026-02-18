import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

const GlassOrb = ({ position, scale, speed }: { position: [number, number, number]; scale: number; speed: number }) => {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x = Math.sin(t * speed * 0.3) * 0.2;
    ref.current.rotation.y = Math.cos(t * speed * 0.2) * 0.3;
  });

  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={0.6} floatingRange={[-0.1, 0.1]}>
      <mesh ref={ref} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshTransmissionMaterial
          backside
          samples={6}
          resolution={256}
          transmission={0.95}
          roughness={0.1}
          thickness={0.5}
          ior={1.5}
          chromaticAberration={0.15}
          anisotropy={0.3}
          distortion={0.2}
          distortionScale={0.3}
          color="#00848C"
        />
      </mesh>
    </Float>
  );
};

const DistortedSphere = ({ position, scale, speed }: { position: [number, number, number]; scale: number; speed: number }) => {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.position.y = position[1] + Math.sin(t * speed * 0.5) * 0.15;
  });

  return (
    <Float speed={speed * 0.7} rotationIntensity={0.3} floatIntensity={0.4}>
      <mesh ref={ref} position={position} scale={scale}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color="#037272"
          roughness={0.2}
          metalness={0.8}
          distort={0.3}
          speed={1.5}
          transparent
          opacity={0.7}
        />
      </mesh>
    </Float>
  );
};

const TorusElement = ({ position, scale, speed }: { position: [number, number, number]; scale: number; speed: number }) => {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x = t * speed * 0.15;
    ref.current.rotation.z = Math.sin(t * speed * 0.2) * 0.5;
  });

  return (
    <Float speed={speed * 0.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <mesh ref={ref} position={position} scale={scale}>
        <torusGeometry args={[1, 0.35, 32, 64]} />
        <meshStandardMaterial
          color="#FCCF17"
          roughness={0.3}
          metalness={0.6}
          transparent
          opacity={0.25}
          emissive="#FCCF17"
          emissiveIntensity={0.1}
        />
      </mesh>
    </Float>
  );
};

const Particles = () => {
  const count = 40;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    return pos;
  }, []);

  const ref = useRef<THREE.Points>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#EDEBD9" transparent opacity={0.4} sizeAttenuation />
    </points>
  );
};

const HeroScene = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} color="#EDEBD9" />
        <pointLight position={[-3, 2, 2]} intensity={0.4} color="#00848C" />
        <pointLight position={[3, -1, 3]} intensity={0.2} color="#FCCF17" />

        <GlassOrb position={[2.2, 0.5, 0]} scale={1.1} speed={1.2} />
        <DistortedSphere position={[3.2, -1.2, -1]} scale={0.6} speed={0.8} />
        <TorusElement position={[1.5, -0.8, -0.5]} scale={0.45} speed={1} />
        <GlassOrb position={[3.8, 1.5, -1.5]} scale={0.4} speed={1.5} />
        <Particles />
      </Canvas>
    </div>
  );
};

export default HeroScene;
