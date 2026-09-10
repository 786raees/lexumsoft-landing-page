"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, Environment, Float, Lightformer } from "@react-three/drei";
import * as THREE from "three";

// The hero object: Logan's pump bottle, modelled procedurally so nothing is
// downloaded. The label is drawn to a canvas texture from his real label copy.
// `spin` is a mutable ref (0..1 scroll progress) so scrolling turns the bottle.
// `focus` is an ingredient index; changing it nudges the bottle to face front.

const TEAL = "#1e9fb5";
const INK = "#0f2a33";

function makeLabel(): THREE.CanvasTexture {
  const c = document.createElement("canvas");
  c.width = 2048;
  c.height = 1320;
  const g = c.getContext("2d")!;
  g.fillStyle = "#ffffff";
  g.fillRect(0, 0, c.width, c.height);
  // teal band across the lower third, wraps the whole bottle
  g.fillStyle = TEAL;
  g.fillRect(0, 900, c.width, 320);
  g.fillStyle = "#166f80";
  g.fillRect(0, 1220, c.width, 100);
  // front panel text, centred at u=0.5
  const cx = c.width * 0.5;
  g.textAlign = "center";
  g.fillStyle = INK;
  // logo ring
  g.beginPath();
  g.arc(cx, 330, 70, 0, Math.PI * 2);
  g.lineWidth = 7;
  g.strokeStyle = TEAL;
  g.stroke();
  g.font = "700 30px sans-serif";
  g.fillText("NO ADDED", cx, 316);
  g.font = "800 48px sans-serif";
  g.fillText("BS", cx, 366);
  g.font = "500 58px sans-serif";
  g.fillText("NATURE'S", cx, 500);
  g.fillText("FINEST", cx, 566);
  g.fillText("SHAMPOO", cx, 632);
  g.font = "500 26px sans-serif";
  g.fillStyle = "#3f5a63";
  g.fillText("For All Hair Types", cx, 700);
  g.fillText("100% Made by Nature", cx, 736);
  g.fillStyle = "#ffffff";
  g.font = "800 40px sans-serif";
  g.fillText("ORGANIC SHAMPOO", cx, 990);
  g.font = "500 24px sans-serif";
  g.fillText("All-Natural Formula for Scalp", cx, 1050);
  g.fillText("and Hair Wellness", cx, 1082);
  g.font = "500 24px sans-serif";
  g.fillText("12 FL OZ / 350 ML", cx, 1180);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  t.wrapS = THREE.RepeatWrapping;
  // rotate so the front panel faces +z
  t.offset.x = 0.25;
  return t;
}

function Bottle({ spin, focus }: { spin: React.MutableRefObject<number>; focus: React.MutableRefObject<number> }) {
  const group = useRef<THREE.Group>(null);
  const label = useMemo(() => makeLabel(), []);
  const body = useMemo(() => {
    // lathe profile: x = radius, y = height. Rounded shoulders, flat base.
    const pts: THREE.Vector2[] = [];
    const prof: [number, number][] = [
      [0, 0], [0.62, 0], [0.7, 0.04], [0.72, 0.2], [0.72, 2.2], [0.68, 2.42], [0.52, 2.6], [0.3, 2.7], [0.26, 2.75], [0.26, 2.9], [0, 2.9],
    ];
    prof.forEach(([x, y]) => pts.push(new THREE.Vector2(x, y)));
    return new THREE.LatheGeometry(pts, 96);
  }, []);
  const targetY = useRef(0);

  useFrame((state, dt) => {
    const g = group.current;
    if (!g) return;
    // scroll drives a full turn; a chip tap pulls the front panel back to face the camera
    const want = Math.PI * 0.5 + spin.current * Math.PI * 2 + focus.current * 0.0001;
    targetY.current += (want - targetY.current) * Math.min(1, dt * 4);
    g.rotation.y = targetY.current + Math.sin(state.clock.elapsedTime * 0.4) * 0.06;
    const wide = state.viewport.width > 7;
    // desktop: bottle glides from the right of the hero to the left of the label card.
    // phone: bottle sits above the copy, then drifts off the top as the label card arrives.
    const x = wide ? 1.9 - spin.current * 4.2 : 0.2;
    const y = wide ? -1.55 : 0.55 + spin.current * 7;
    const sc = wide ? 0.92 : 0.6;
    g.position.x += (x - g.position.x) * Math.min(1, dt * 3);
    g.position.y += (y - g.position.y) * Math.min(1, dt * 3);
    g.scale.setScalar(g.scale.x + (sc - g.scale.x) * Math.min(1, dt * 3));
  });

  return (
    <group ref={group} position={[1.9, -1.55, 0]} scale={0.92}>
      {/* body with label texture */}
      <mesh geometry={body} castShadow>
        <meshPhysicalMaterial map={label} roughness={0.32} clearcoat={0.7} clearcoatRoughness={0.25} />
      </mesh>
      {/* pump */}
      <mesh position={[0, 3.05, 0]}>
        <cylinderGeometry args={[0.2, 0.22, 0.3, 48]} />
        <meshPhysicalMaterial color="#f4f7f8" roughness={0.35} clearcoat={0.8} />
      </mesh>
      <mesh position={[0, 3.45, 0]}>
        <cylinderGeometry args={[0.11, 0.11, 0.55, 32]} />
        <meshPhysicalMaterial color="#f4f7f8" roughness={0.35} clearcoat={0.8} />
      </mesh>
      <mesh position={[0, 3.78, 0]}>
        <capsuleGeometry args={[0.16, 0.34, 8, 24]} />
        <meshPhysicalMaterial color="#f4f7f8" roughness={0.35} clearcoat={0.8} />
      </mesh>
      <mesh position={[0.32, 3.86, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.11, 0.13, 0.48, 24]} />
        <meshPhysicalMaterial color="#f4f7f8" roughness={0.35} clearcoat={0.8} />
      </mesh>
    </group>
  );
}

function Liquid() {
  const mat = useRef<THREE.ShaderMaterial>(null);
  const { viewport } = useThree();
  useFrame((state) => {
    if (mat.current) mat.current.uniforms.uTime.value = state.clock.elapsedTime;
  });
  const uniforms = useMemo(() => ({ uTime: { value: 0 }, uColor: { value: new THREE.Color(TEAL) } }), []);
  return (
    <mesh position={[0, 0, -3]} scale={[viewport.width * 2.2, viewport.height * 2.2, 1]}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <shaderMaterial
        ref={mat}
        transparent
        uniforms={uniforms}
        vertexShader={`varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`}
        fragmentShader={`
          varying vec2 vUv; uniform float uTime; uniform vec3 uColor;
          float n(vec2 p){ return sin(p.x)*sin(p.y); }
          void main(){
            vec2 p = vUv * 6.0;
            float t = uTime * 0.25;
            float v = n(p + vec2(t, -t*0.7)) + 0.6*n(p*1.9 + vec2(-t*1.3, t)) + 0.35*n(p*3.7 + vec2(t*0.5, t*0.9));
            float ring = smoothstep(0.15, 0.9, abs(v));
            float vignette = smoothstep(1.1, 0.35, distance(vUv, vec2(0.62, 0.5)));
            float a = (0.16 * ring + 0.05) * vignette;
            gl_FragColor = vec4(uColor, a);
          }`}
      />
    </mesh>
  );
}

function Bubbles({ count = 26 }: { count?: number }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const seeds = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        a: Math.random() * Math.PI * 2,
        r: 1.3 + Math.random() * 1.6,
        y: Math.random() * 4 - 2,
        s: 0.04 + Math.random() * 0.1,
        v: 0.08 + Math.random() * 0.14,
        w: Math.random() * Math.PI * 2,
      })),
    [count]
  );
  useFrame((state, dt) => {
    const m = mesh.current;
    if (!m) return;
    const t = state.clock.elapsedTime;
    seeds.forEach((b, i) => {
      b.y += b.v * dt;
      if (b.y > 2.4) b.y = -2.2;
      const a = b.a + t * 0.12;
      dummy.position.set(Math.cos(a) * b.r, b.y + Math.sin(t + b.w) * 0.08, Math.sin(a) * b.r);
      dummy.scale.setScalar(b.s);
      dummy.updateMatrix();
      m.setMatrixAt(i, dummy.matrix);
    });
    m.instanceMatrix.needsUpdate = true;
  });
  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 20, 20]} />
      <meshPhysicalMaterial color="#bfe9f0" transparent opacity={0.5} roughness={0.1} transmission={0.7} thickness={0.3} clearcoat={1} iridescence={0.6} />
    </instancedMesh>
  );
}

function Rig() {
  const { camera, pointer } = useThree();
  useFrame((_, dt) => {
    camera.position.x += (pointer.x * 0.35 - camera.position.x) * Math.min(1, dt * 2);
    camera.position.y += (0.4 + pointer.y * 0.3 - camera.position.y) * Math.min(1, dt * 2);
    camera.lookAt(0, 0.2, 0);
  });
  return null;
}

export function Scene({ spin, focus }: { spin: React.MutableRefObject<number>; focus: React.MutableRefObject<number> }) {
  const reduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const frameloop = reduced ? "demand" : "always";
  useEffect(() => {}, []);
  return (
    <Canvas
      className="nab-scene"
      dpr={[1, 1.75]}
      shadows
      frameloop={frameloop}
      camera={{ position: [0, 0.4, 9.2], fov: 30 }}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      aria-hidden="true"
    >
      <Liquid />
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 5, 4]} intensity={2.2} castShadow shadow-mapSize={[1024, 1024]} />
      <directionalLight position={[-4, 2, -2]} intensity={0.8} color={TEAL} />
      <Environment resolution={256}>
        <Lightformer intensity={3} position={[0, 4, -4]} scale={[8, 3, 1]} />
        <Lightformer intensity={2} position={[-5, 1, 2]} scale={[2, 6, 1]} color="#ffffff" />
        <Lightformer intensity={1.5} position={[5, 0, 2]} scale={[2, 6, 1]} color="#dff6fa" />
      </Environment>
      <Float speed={reduced ? 0 : 1.2} rotationIntensity={0.15} floatIntensity={0.6}>
        <Bottle spin={spin} focus={focus} />
      </Float>
      <Bubbles />
      <ContactShadows position={[0, -1.62, 0]} opacity={0.35} scale={8} blur={2.4} far={3} />
      <Rig />
    </Canvas>
  );
}
