import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/* ── Node: glowing sphere representing a digital worker ── */
const WorkerNode = ({
  position,
  radius = 0.12,
  color,
  speed = 1,
  emissiveIntensity = 0.6,
  floatAmplitude = 0.06,
  phaseOffset = 0,
}: {
  position: [number, number, number];
  radius?: number;
  color: string;
  speed?: number;
  emissiveIntensity?: number;
  floatAmplitude?: number;
  phaseOffset?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const haloRef = useRef<THREE.Mesh>(null!);
  const baseY = position[1];

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const pulse = 1 + Math.sin(t * speed * 2 + phaseOffset) * 0.12;
    meshRef.current.scale.setScalar(radius * pulse);
    meshRef.current.position.y = baseY + Math.sin(t * speed * 0.7 + phaseOffset) * floatAmplitude;

    const halo = haloRef.current.material as THREE.MeshBasicMaterial;
    halo.opacity = 0.04 + Math.sin(t * speed + phaseOffset) * 0.02;
    haloRef.current.scale.setScalar(radius * 3.5 * pulse);
    haloRef.current.position.y = meshRef.current.position.y;
  });

  return (
    <group position={[position[0], position[1], position[2]]}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[1, 24, 24]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={emissiveIntensity}
          roughness={0.25}
          metalness={0.75}
        />
      </mesh>
      <mesh ref={haloRef}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial color={color} transparent opacity={0.05} depthWrite={false} />
      </mesh>
    </group>
  );
};

/* ── Edge: thin line between two nodes using BufferGeometry ── */
const Edge = ({
  start,
  end,
  color = "#00848C",
}: {
  start: [number, number, number];
  end: [number, number, number];
  color?: string;
}) => {
  const ref = useRef<THREE.LineSegments>(null!);
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute([...start, ...end], 3)
    );
    return geo;
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    (ref.current.material as THREE.LineBasicMaterial).opacity =
      0.06 + Math.sin(t * 0.8) * 0.03;
  });

  return (
    <lineSegments ref={ref} geometry={geometry}>
      <lineBasicMaterial color={color} transparent opacity={0.08} depthWrite={false} />
    </lineSegments>
  );
};

/* ── Packet: small sphere traveling along an edge ── */
const Packet = ({
  start,
  end,
  speed = 0.35,
  color = "#FCCF17",
  phaseOffset = 0,
}: {
  start: [number, number, number];
  end: [number, number, number];
  speed?: number;
  color?: string;
  phaseOffset?: number;
}) => {
  const ref = useRef<THREE.Mesh>(null!);
  const sv = useMemo(() => new THREE.Vector3(...start), []); // eslint-disable-line react-hooks/exhaustive-deps
  const ev = useMemo(() => new THREE.Vector3(...end), []); // eslint-disable-line react-hooks/exhaustive-deps
  const tmp = useMemo(() => new THREE.Vector3(), []);

  useFrame(({ clock }) => {
    const t = ((clock.getElapsedTime() * speed + phaseOffset) % 1 + 1) % 1;
    tmp.lerpVectors(sv, ev, t);
    ref.current.position.copy(tmp);

    const fade = Math.sin(t * Math.PI);
    ref.current.scale.setScalar(0.025 + fade * 0.02);
    (ref.current.material as THREE.MeshBasicMaterial).opacity = fade * 0.85;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1, 10, 10]} />
      <meshBasicMaterial color={color} transparent opacity={0} depthWrite={false} />
    </mesh>
  );
};

/* ── Orbital ring ── */
const Ring = ({
  position,
  radius = 1,
  speed = 0.28,
  color = "#00848C",
  tiltX = 1.2,
}: {
  position: [number, number, number];
  radius?: number;
  speed?: number;
  color?: string;
  tiltX?: number;
}) => {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ref.current.rotation.x = tiltX + Math.sin(t * speed * 0.6) * 0.08;
    ref.current.rotation.z = t * speed * 0.4;
    (ref.current.material as THREE.MeshBasicMaterial).opacity =
      0.1 + Math.sin(t * speed) * 0.04;
  });

  return (
    <mesh ref={ref} position={position}>
      <torusGeometry args={[radius, 0.005, 16, 120]} />
      <meshBasicMaterial color={color} transparent opacity={0.12} depthWrite={false} />
    </mesh>
  );
};

/* ── Scene ── */
const nodes: {
  pos: [number, number, number];
  color: string;
  radius: number;
  speed: number;
  emissive: number;
  phase: number;
  float: number;
}[] = [
  // Central hub
  { pos: [2.5, 0.2, 0],    color: "#00848C", radius: 0.18, speed: 0.8,  emissive: 0.9, phase: 0,    float: 0.08 },
  // Inner workers
  { pos: [3.5, 1.2, -0.4], color: "#037272", radius: 0.1,  speed: 1.2,  emissive: 0.55, phase: 1.1, float: 0.06 },
  { pos: [1.6, -0.9, 0.3], color: "#037272", radius: 0.1,  speed: 1.0,  emissive: 0.5,  phase: 2.3, float: 0.05 },
  { pos: [3.8, -0.6, -0.7],color: "#00848C", radius: 0.08, speed: 1.4,  emissive: 0.45, phase: 0.7, float: 0.06 },
  { pos: [1.9, 1.0, -0.3], color: "#037272", radius: 0.09, speed: 0.9,  emissive: 0.45, phase: 1.8, float: 0.05 },
  // Outer nodes
  { pos: [4.6, 0.7, -1.1], color: "#037272", radius: 0.06, speed: 1.1,  emissive: 0.35, phase: 0.4, float: 0.04 },
  { pos: [0.9, -1.5, 0.4], color: "#00848C", radius: 0.06, speed: 1.3,  emissive: 0.3,  phase: 2.9, float: 0.04 },
  { pos: [4.2, -1.4, -0.3],color: "#037272", radius: 0.07, speed: 1.0,  emissive: 0.35, phase: 1.5, float: 0.04 },
  // Golden accent nodes
  { pos: [3.0, 1.9, -0.7], color: "#FCCF17", radius: 0.05, speed: 1.5,  emissive: 1.2,  phase: 3.3, float: 0.05 },
  { pos: [1.3, 0.3, 0.2],  color: "#FCCF17", radius: 0.04, speed: 1.6,  emissive: 1.0,  phase: 0.9, float: 0.04 },
];

const connections: [number, number][] = [
  [0, 1], [0, 2], [0, 3], [0, 4],
  [1, 5], [2, 6], [3, 7],
  [1, 4], [4, 8], [2, 9],
];

const SceneContent = () => (
  <>
    <ambientLight intensity={0.12} />
    <pointLight position={[2.5, 0.2, 2.5]} intensity={0.7} color="#00848C" distance={9} decay={2} />
    <pointLight position={[4.2, 1.5, 1]}   intensity={0.25} color="#FCCF17" distance={6} decay={2} />
    <pointLight position={[1.2, -1.2, 2]}   intensity={0.18} color="#037272" distance={5} decay={2} />

    {nodes.map((n, i) => (
      <WorkerNode
        key={i}
        position={n.pos}
        color={n.color}
        radius={n.radius}
        speed={n.speed}
        emissiveIntensity={n.emissive}
        floatAmplitude={n.float}
        phaseOffset={n.phase}
      />
    ))}

    {connections.map(([a, b], i) => (
      <Edge
        key={`e-${i}`}
        start={nodes[a].pos}
        end={nodes[b].pos}
        color="#00848C"
      />
    ))}

    {connections.map(([a, b], i) => (
      <Packet
        key={`p-${i}`}
        start={nodes[a].pos}
        end={nodes[b].pos}
        speed={0.22 + (i % 4) * 0.07}
        phaseOffset={i * 0.38}
        color={i % 4 === 0 ? "#FCCF17" : "#00C2CB"}
      />
    ))}

    <Ring position={[2.5, 0.2, 0]} radius={1.2}  speed={0.22} color="#00848C" tiltX={1.2} />
    <Ring position={[2.5, 0.2, 0]} radius={0.75} speed={0.33} color="#037272" tiltX={1.4} />
  </>
);

const HeroScene = () => (
  <div className="absolute inset-0">
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <SceneContent />
    </Canvas>
  </div>
);

export default HeroScene;
