import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

/* ── Glowing node (represents a digital worker) ── */
const WorkerNode = ({
  position,
  scale = 0.12,
  color = "#00848C",
  speed = 1,
  emissiveIntensity = 0.6,
}: {
  position: [number, number, number];
  scale?: number;
  color?: string;
  speed?: number;
  emissiveIntensity?: number;
}) => {
  const ref = useRef<THREE.Mesh>(null!);
  const glowRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const pulse = 1 + Math.sin(t * speed * 2) * 0.15;
    ref.current.scale.setScalar(scale * pulse);
    if (glowRef.current) {
      glowRef.current.scale.setScalar(scale * pulse * 3);
    }
  });

  return (
    <Float speed={speed * 0.6} rotationIntensity={0} floatIntensity={0.3} floatingRange={[-0.05, 0.05]}>
      <group position={position}>
        {/* Core */}
        <mesh ref={ref} scale={scale}>
          <sphereGeometry args={[1, 24, 24]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={emissiveIntensity}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
        {/* Glow halo */}
        <mesh ref={glowRef} scale={scale * 3}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshBasicMaterial color={color} transparent opacity={0.06} />
        </mesh>
      </group>
    </Float>
  );
};

/* ── Animated data flow line between two points ── */
const DataFlow = ({
  start,
  end,
  color = "#00848C",
  speed = 1,
}: {
  start: [number, number, number];
  end: [number, number, number];
  color?: string;
  speed?: number;
}) => {
  const ref = useRef<THREE.Mesh>(null!);

  const { midPoint, length, rotation } = useMemo(() => {
    const s = new THREE.Vector3(...start);
    const e = new THREE.Vector3(...end);
    const mid = s.clone().add(e).multiplyScalar(0.5);
    const dir = e.clone().sub(s);
    const len = dir.length();
    const rot = new THREE.Euler(0, 0, Math.atan2(dir.y, dir.x));
    return { midPoint: mid, length: len, rotation: rot };
  }, [start, end]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      (ref.current.material as THREE.MeshBasicMaterial).opacity =
        0.08 + Math.sin(t * speed * 1.5) * 0.04;
    }
  });

  return (
    <mesh ref={ref} position={midPoint} rotation={rotation}>
      <planeGeometry args={[length, 0.008]} />
      <meshBasicMaterial color={color} transparent opacity={0.1} side={THREE.DoubleSide} />
    </mesh>
  );
};

/* ── Pulsing data packet traveling along a path ── */
const DataPacket = ({
  start,
  end,
  speed = 0.4,
  color = "#FCCF17",
  delay = 0,
}: {
  start: [number, number, number];
  end: [number, number, number];
  speed?: number;
  color?: string;
  delay?: number;
}) => {
  const ref = useRef<THREE.Mesh>(null!);
  const s = useMemo(() => new THREE.Vector3(...start), [start]);
  const e = useMemo(() => new THREE.Vector3(...end), [end]);

  useFrame((state) => {
    const t = ((state.clock.getElapsedTime() + delay) * speed) % 1;
    const pos = s.clone().lerp(e.clone(), t);
    ref.current.position.copy(pos);
    ref.current.scale.setScalar(0.03 + Math.sin(t * Math.PI) * 0.02);
    (ref.current.material as THREE.MeshBasicMaterial).opacity =
      Math.sin(t * Math.PI) * 0.8;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1, 12, 12]} />
      <meshBasicMaterial color={color} transparent opacity={0.5} />
    </mesh>
  );
};

/* ── Orbital ring (represents a system boundary) ── */
const OrbitalRing = ({
  position,
  radius = 1,
  speed = 0.3,
  color = "#00848C",
}: {
  position: [number, number, number];
  radius?: number;
  speed?: number;
  color?: string;
}) => {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x = Math.PI / 2.5 + Math.sin(t * speed) * 0.1;
    ref.current.rotation.z = t * speed * 0.5;
  });

  return (
    <mesh ref={ref} position={position}>
      <torusGeometry args={[radius, 0.006, 16, 100]} />
      <meshBasicMaterial color={color} transparent opacity={0.15} />
    </mesh>
  );
};

/* ── Scene composition ── */
const nodes: { pos: [number, number, number]; color: string; scale: number; speed: number; emissive: number }[] = [
  // Central hub (main digital worker)
  { pos: [2.5, 0.2, 0], color: "#00848C", scale: 0.18, speed: 0.8, emissive: 0.8 },
  // Satellite workers
  { pos: [3.5, 1.2, -0.5], color: "#037272", scale: 0.1, speed: 1.2, emissive: 0.5 },
  { pos: [1.5, -0.8, 0.3], color: "#037272", scale: 0.1, speed: 1, emissive: 0.5 },
  { pos: [3.8, -0.5, -0.8], color: "#00848C", scale: 0.08, speed: 1.4, emissive: 0.4 },
  { pos: [1.8, 1.0, -0.3], color: "#037272", scale: 0.09, speed: 0.9, emissive: 0.4 },
  // Outer nodes
  { pos: [4.5, 0.8, -1.2], color: "#037272", scale: 0.06, speed: 1.1, emissive: 0.3 },
  { pos: [0.8, -1.5, 0.5], color: "#00848C", scale: 0.06, speed: 1.3, emissive: 0.3 },
  { pos: [4.2, -1.3, -0.3], color: "#037272", scale: 0.07, speed: 1, emissive: 0.35 },
  // Accent nodes
  { pos: [3.0, 1.8, -0.8], color: "#FCCF17", scale: 0.05, speed: 1.5, emissive: 1 },
  { pos: [1.2, 0.3, 0.2], color: "#FCCF17", scale: 0.04, speed: 1.6, emissive: 0.8 },
];

const connections: [number, number][] = [
  [0, 1], [0, 2], [0, 3], [0, 4],
  [1, 5], [2, 6], [3, 7],
  [1, 4], [4, 8], [2, 9],
];

const HeroScene = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.15} />
        <pointLight position={[2.5, 0.2, 2]} intensity={0.6} color="#00848C" distance={8} />
        <pointLight position={[4, 1, 1]} intensity={0.2} color="#FCCF17" distance={6} />
        <pointLight position={[1, -1, 2]} intensity={0.15} color="#037272" distance={5} />

        {/* Worker nodes */}
        {nodes.map((n, i) => (
          <WorkerNode
            key={i}
            position={n.pos}
            color={n.color}
            scale={n.scale}
            speed={n.speed}
            emissiveIntensity={n.emissive}
          />
        ))}

        {/* Connection lines */}
        {connections.map(([a, b], i) => (
          <DataFlow
            key={`line-${i}`}
            start={nodes[a].pos}
            end={nodes[b].pos}
            color="#00848C"
            speed={0.8 + i * 0.1}
          />
        ))}

        {/* Data packets flowing between nodes */}
        {connections.map(([a, b], i) => (
          <DataPacket
            key={`packet-${i}`}
            start={nodes[a].pos}
            end={nodes[b].pos}
            speed={0.25 + (i % 3) * 0.1}
            delay={i * 1.2}
            color={i % 4 === 0 ? "#FCCF17" : "#00848C"}
          />
        ))}

        {/* Orbital rings around central hub */}
        <OrbitalRing position={[2.5, 0.2, 0]} radius={1.2} speed={0.25} color="#00848C" />
        <OrbitalRing position={[2.5, 0.2, 0]} radius={0.75} speed={0.35} color="#037272" />
      </Canvas>
    </div>
  );
};

export default HeroScene;
