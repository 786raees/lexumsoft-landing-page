"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// A slow field of soap bubbles that drift upward and lean toward the pointer.
// Transparent canvas, no lighting model beyond what the material needs, capped
// device pixel ratio, and it pauses under prefers-reduced-motion.

const COUNT = 30;

function Field({ reduced }: { reduced: boolean }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const { viewport, pointer } = useThree();
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const seeds = useMemo(
    () =>
      Array.from({ length: COUNT }, () => ({
        x: Math.random() < 0.55 ? 0.15 + Math.random() * 0.85 : -1 + Math.random() * 0.35,
        y: Math.random() * 2 - 1,
        z: Math.random() * -2,
        r: 0.035 + Math.random() * 0.11,
        v: 0.05 + Math.random() * 0.12,
        w: Math.random() * Math.PI * 2,
      })),
    []
  );

  useFrame((state, dt) => {
    const m = mesh.current;
    if (!m) return;
    const t = state.clock.elapsedTime;
    const step = reduced ? 0 : dt;
    seeds.forEach((s, i) => {
      s.y += s.v * step;
      if (s.y > 1.25) s.y = -1.25;
      const sway = Math.sin(t * 0.6 + s.w) * 0.05;
      const px = s.x * viewport.width * 0.5 + sway + pointer.x * 0.08 * (1 + s.z);
      const py = s.y * viewport.height * 0.5 + pointer.y * 0.05;
      dummy.position.set(px, py, s.z);
      dummy.scale.setScalar(s.r);
      dummy.updateMatrix();
      m.setMatrixAt(i, dummy.matrix);
    });
    m.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, COUNT]}>
      <sphereGeometry args={[1, 24, 24]} />
      <meshPhysicalMaterial
        color="#9fdbe6"
        transparent
        opacity={0.42}
        roughness={0.15}
        transmission={0.6}
        thickness={0.4}
        clearcoat={1}
        clearcoatRoughness={0.1}
        iridescence={0.5}
      />
    </instancedMesh>
  );
}

export function Bubbles() {
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return (
    <Canvas
      className="nab-bubbles"
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 3], fov: 45 }}
      gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      aria-hidden="true"
    >
      <ambientLight intensity={1.2} />
      <directionalLight position={[2, 3, 4]} intensity={1.4} color="#ffffff" />
      <directionalLight position={[-3, -2, 2]} intensity={0.6} color="#1e9fb5" />
      <Field reduced={reduced} />
    </Canvas>
  );
}
