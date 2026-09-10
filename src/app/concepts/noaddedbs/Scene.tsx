"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, Environment, Float, Lightformer } from "@react-three/drei";
import * as THREE from "three";
import { PROFILE } from "./profile";

// The hero object: Logan's pump bottle, modelled procedurally so nothing is
// downloaded. The label is drawn to a canvas texture from his real label copy.
// `spin` is a mutable ref (0..1 scroll progress) so scrolling turns the bottle.
// `focus` is an ingredient index; changing it nudges the bottle to face front.

const TEAL = "#1e9fb5";
const INK = "#0f2a33";
const smooth = (t: number) => t * t * (3 - 2 * t);


// The hero object is Logan's actual bottle. The silhouette above was traced from
// the 2000px store photo (IMG-7941), and the label texture is that same photo
// unwrapped around the cylinder, so the print, logo and type are the real ones.
// Body height is 3 units; the pump is measured from the same photo.
function useLabel(): THREE.Texture | null {
  const [t, setT] = useState<THREE.Texture | null>(null);
  const { gl } = useThree();
  useEffect(() => {
    let live = true;
    new THREE.TextureLoader().load("/concepts/noaddedbs/label.jpg", (tex) => {
      if (!live) return;
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = Math.min(16, gl.capabilities.getMaxAnisotropy());
      tex.wrapS = THREE.RepeatWrapping;
      tex.offset.x = 0.5; // texture centre (the front panel) sits at +z
      tex.needsUpdate = true;
      setT(tex);
    });
    return () => { live = false; };
  }, [gl]);
  return t;
}

function bodyGeometry(): THREE.LatheGeometry {
  // smooth the traced radii a little, then close the base and the neck
  const pts: THREE.Vector2[] = [];
  const sm = PROFILE.map(([r], i) => {
    const a = PROFILE[Math.max(0, i - 1)][0], b = PROFILE[Math.min(PROFILE.length - 1, i + 1)][0];
    return (a + r + b) / 3;
  });
  pts.push(new THREE.Vector2(0, 0.02), new THREE.Vector2(sm[0] - 0.05, 0.0), new THREE.Vector2(sm[0] - 0.012, 0.012));
  const cut = PROFILE.length - 9; // the last points are the shoulder: smooth them into a round-over
  PROFILE.slice(0, cut).forEach(([, y], i) => pts.push(new THREE.Vector2(sm[i], y)));
  const shoulder = new THREE.SplineCurve(PROFILE.slice(cut).map(([, y], j) => new THREE.Vector2(sm[cut + j], y)));
  shoulder.getPoints(28).forEach((v) => pts.push(v));
  pts.push(new THREE.Vector2(0.27, 3.0), new THREE.Vector2(0.27, 3.02), new THREE.Vector2(0, 3.02));
  const g = new THREE.LatheGeometry(pts, 128);
  // linear V along height so the unwrapped photo lands where it was on the bottle
  const pos = g.attributes.position as THREE.BufferAttribute;
  const uv = g.attributes.uv as THREE.BufferAttribute;
  for (let i = 0; i < pos.count; i++) uv.setY(i, Math.min(1, Math.max(0, pos.getY(i) / 3.0)));
  uv.needsUpdate = true;
  return g;
}

const PLASTIC = { color: "#f7f9f9", roughness: 0.42, clearcoat: 0.3, clearcoatRoughness: 0.3 } as const;

// Pump traced from the same photo. Heights are photo rows converted at the body scale:
// collar 3.00-3.42, lock ring 3.42-3.50, stem 3.50-3.70, head 3.70-3.81, spout tip to x=-0.45.
function headGeometry(): THREE.ExtrudeGeometry {
  const sh = new THREE.Shape();
  // rounded block over the stem, spout running left and drooping at the tip
  sh.moveTo(-0.16, 3.7);
  sh.lineTo(0.14, 3.7);
  sh.quadraticCurveTo(0.225, 3.7, 0.225, 3.76);
  sh.quadraticCurveTo(0.225, 3.815, 0.14, 3.815);
  sh.lineTo(-0.05, 3.815);
  sh.quadraticCurveTo(-0.3, 3.815, -0.42, 3.79);
  sh.quadraticCurveTo(-0.46, 3.775, -0.45, 3.74);
  sh.quadraticCurveTo(-0.44, 3.705, -0.4, 3.71);
  sh.lineTo(-0.24, 3.74);
  sh.quadraticCurveTo(-0.19, 3.74, -0.16, 3.7);
  sh.closePath();
  const g = new THREE.ExtrudeGeometry(sh, { depth: 0.16, bevelEnabled: true, bevelSize: 0.045, bevelThickness: 0.045, bevelSegments: 8, curveSegments: 16 });
  g.translate(0, 0, -0.08);
  return g;
}

// fine vertical ribs on the closure collar, drawn once as a bump map
function ribTexture(): THREE.CanvasTexture {
  const c = document.createElement("canvas");
  c.width = 512; c.height = 8;
  const g = c.getContext("2d")!;
  for (let x = 0; x < 512; x++) {
    const v = 0.5 + 0.5 * Math.sin((x / 512) * Math.PI * 2 * 96);
    g.fillStyle = `rgb(${Math.round(v * 255)},${Math.round(v * 255)},${Math.round(v * 255)})`;
    g.fillRect(x, 0, 1, 8);
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = THREE.RepeatWrapping;
  return t;
}

function Pump() {
  const head = useMemo(() => headGeometry(), []);
  const ribs = useMemo(() => ribTexture(), []);
  return (
    <group>
      <mesh position={[0, 3.215, 0]}>
        <cylinderGeometry args={[0.252, 0.268, 0.41, 96, 1]} />
        <meshPhysicalMaterial {...PLASTIC} roughness={0.42} bumpMap={ribs} bumpScale={0.012} />
      </mesh>
      <mesh position={[0, 3.005, 0]}>
        <cylinderGeometry args={[0.274, 0.274, 0.03, 64]} />
        <meshPhysicalMaterial {...PLASTIC} />
      </mesh>
      <mesh position={[0, 3.425, 0]}>
        <cylinderGeometry args={[0.2, 0.245, 0.02, 64]} />
        <meshPhysicalMaterial {...PLASTIC} />
      </mesh>
      <mesh position={[0, 3.46, 0]}>
        <cylinderGeometry args={[0.175, 0.19, 0.07, 48]} />
        <meshPhysicalMaterial {...PLASTIC} />
      </mesh>
      <mesh position={[0, 3.6, 0]}>
        <cylinderGeometry args={[0.158, 0.158, 0.21, 48]} />
        <meshPhysicalMaterial {...PLASTIC} />
      </mesh>
      <mesh geometry={head}>
        <meshPhysicalMaterial {...PLASTIC} />
      </mesh>
      {/* the outlet slot at the spout tip */}
      <mesh position={[-0.44, 3.722, 0]} rotation={[0, 0, 0.3]}>
        <boxGeometry args={[0.03, 0.02, 0.09]} />
        <meshStandardMaterial color="#5a6b70" roughness={0.9} />
      </mesh>
    </group>
  );
}

function Bottle({ spin, focus, shadow }: { spin: React.MutableRefObject<number>; focus: React.MutableRefObject<number>; shadow: React.RefObject<THREE.Group | null> }) {
  const group = useRef<THREE.Group>(null);
  const label = useLabel();
  const body = useMemo(() => bodyGeometry(), []);
  const targetY = useRef(0);
  const lastFocus = useRef(0);
  const pulseAt = useRef(-10);

  useFrame((state, dt) => {
    const g = group.current;
    if (!g) return;
    // a full turn over the stage; a chip tap yaws the bottle a little per ingredient and pulses it
    const f = focus.current > 0 ? (focus.current - 5) * 0.07 : 0;
    // the full turn completes by 85% of the stage, so the front panel is already facing
    // the reader while the label card is on screen
    const want = smooth(Math.min(1, spin.current / 0.85)) * Math.PI * 2 + f;
    targetY.current += (want - targetY.current) * Math.min(1, dt * 4);
    g.rotation.y = targetY.current + Math.sin(state.clock.elapsedTime * 0.4) * 0.05;
    const since = state.clock.elapsedTime - pulseAt.current;
    g.rotation.z = since < 1 ? 0.04 * Math.sin(since * Math.PI) : 0;
    const wide = state.viewport.width > 7;
    // the glide finishes in the first 60% of the stage so the card never bisects the bottle
    const t = smooth(Math.min(1, spin.current / 0.6));
    // desktop: bottle glides from the right of the hero to the left of the label card.
    // phone: bottle parks in the top third while the label card slides under it.
    // in the last 10% of the stage the bottle lifts out instead of being sliced by the canvas edge
    const outStart = wide ? 0.93 : 0.78;
    const out = smooth(Math.max(0, (spin.current - outStart) / (1 - outStart)));
    const x = wide ? 1.9 - t * 4.2 : 0;
    // desktop: the base clears the fold by ~6% of the view whatever the window height
    const baseY = -state.viewport.height * 0.42 + 0.3;
    const y = (wide ? baseY : 0.5 + t * 0.1) + out * 1.2;
    // recede behind the hero copy mid-glide, then come back
    const z = -1.6 * Math.sin(t * Math.PI);
    const pulse = 1 + Math.max(0, 1 - since * 3) * 0.04;
    const sc = (wide ? 0.92 - out * 0.12 : (0.44 - t * 0.02) * (1 - out * 0.7)) * pulse;
    g.position.x += (x - g.position.x) * Math.min(1, dt * 3);
    g.position.y += (y - g.position.y) * Math.min(1, dt * 3);
    g.position.z += (z - g.position.z) * Math.min(1, dt * 3);
    const sh = shadow.current;
    if (sh) {
      sh.position.set(g.position.x, wide ? baseY - 0.01 : g.position.y - 0.02, g.position.z);
      const k = (1 - out) * (1 - Math.min(1, Math.abs(g.position.z) / 1.6)) * (g.scale.x / 0.92);
      sh.scale.setScalar(Math.max(0.001, k));
    }
    g.scale.setScalar(g.scale.x + (sc - g.scale.x) * Math.min(1, dt * 3));
    if (focus.current !== lastFocus.current) { lastFocus.current = focus.current; pulseAt.current = state.clock.elapsedTime; }
  });

  return (
    <group ref={group} position={[1.9, -1.65, 0]} scale={0.92}>
      <mesh geometry={body}>
        {label ? (
          <meshPhysicalMaterial key="print" map={label} roughness={0.32} clearcoat={0.8} clearcoatRoughness={0.2} envMapIntensity={1.4} sheen={0.25} sheenColor="#ffffff" />
        ) : (
          <meshPhysicalMaterial key="blank" color="#f6f8f8" roughness={0.28} clearcoat={0.8} clearcoatRoughness={0.18} />
        )}
      </mesh>
      <Pump />
      <Bubbles focus={focus} />
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
    <mesh position={[0, 0, -3]} scale={[viewport.width * 1.5, viewport.height * 1.5, 1]}>
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

function Bubbles({ focus }: { focus: React.MutableRefObject<number> }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const { viewport } = useThree();
  const count = viewport.width > 7 ? 26 : 14;
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const lastFocus = useRef(0);
  const seeds = useMemo(
    () =>
      Array.from({ length: 26 }, () => ({
        a: Math.random() * Math.PI * 2,
        r: 0.8 + Math.random() * 0.7,
        y: Math.random() * 3.8,
        s: 0.03 + Math.random() * 0.08,
        v: 0.08 + Math.random() * 0.14,
        w: Math.random() * Math.PI * 2,
      })),
    []
  );
  useFrame((state, dt) => {
    const m = mesh.current;
    if (!m) return;
    const t = state.clock.elapsedTime;
    if (focus.current !== lastFocus.current) {
      // a small burst of bubbles from the spout when an ingredient is tapped
      lastFocus.current = focus.current;
      for (let i = 0; i < 6; i++) {
        const b = seeds[(i * 4) % count];
        b.y = 3.7; b.r = 0.2 + Math.random() * 0.2; b.a = Math.PI + (Math.random() - 0.5); b.s = 0.03 + Math.random() * 0.05;
      }
    }
    for (let i = 0; i < count; i++) {
      const b = seeds[i];
      b.y += b.v * dt;
      if (b.y > 4.2) { b.y = -0.2; b.r = 0.8 + Math.random() * 0.7; }
      const a = b.a + t * 0.12;
      dummy.position.set(Math.cos(a) * b.r, b.y + Math.sin(t + b.w) * 0.06, Math.sin(a) * b.r);
      dummy.scale.setScalar(b.s);
      dummy.updateMatrix();
      m.setMatrixAt(i, dummy.matrix);
    }
    m.instanceMatrix.needsUpdate = true;
  });
  return (
    <instancedMesh key={count} ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, viewport.width > 7 ? 20 : 10, viewport.width > 7 ? 20 : 10]} />
      <meshPhysicalMaterial color="#d8f1f5" transparent opacity={0.38} roughness={0.08} metalness={0.1} clearcoat={1} iridescence={0.6} envMapIntensity={1.2} />
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

export function Scene({ spin, focus, onReady, active = true }: { spin: React.MutableRefObject<number>; focus: React.MutableRefObject<number>; onReady?: () => void; active?: boolean }) {
  const reduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const frameloop = !active ? "never" : reduced ? "demand" : "always";
  const mobile = typeof window !== "undefined" && window.innerWidth < 900;
  const shadow = useRef<THREE.Group>(null);
  return (
    <Canvas
      className="nab-scene"
      dpr={[1, mobile ? 1.25 : 1.5]}
      frameloop={frameloop}
      onCreated={({ gl }) => { gl.toneMappingExposure = 1.15; onReady?.(); }}
      camera={{ position: [0, 0.4, 9.2], fov: 30 }}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      aria-hidden="true"
    >
      <Liquid />
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 6, 6]} intensity={2.6} />
      <directionalLight position={[-4, 2, -2]} intensity={0.4} color={TEAL} />
      <directionalLight position={[-3, 3, -5]} intensity={1.6} />
      <Environment resolution={256}>
        <Lightformer intensity={3} position={[0, 4, -4]} scale={[8, 3, 1]} />
        <Lightformer intensity={2} position={[-5, 1, 2]} scale={[2, 6, 1]} color="#ffffff" />
        <Lightformer intensity={1.5} position={[5, 0, 2]} scale={[2, 6, 1]} color="#dff6fa" />
        <Lightformer intensity={2} position={[-2, 2, 3]} scale={[1.6, 6, 1]} />
        <Lightformer intensity={1.5} position={[3, 2, 4]} scale={[1.6, 6, 1]} />
        <Lightformer intensity={1.2} position={[-3, -4, 2]} scale={[4, 2, 1]} color={TEAL} />
      </Environment>
      <Float speed={reduced ? 0 : 1.2} rotationIntensity={0.15} floatIntensity={0.6}>
        <Bottle spin={spin} focus={focus} shadow={shadow} />
      </Float>
      <group ref={shadow} position={[1.9, -1.66, 0]}>
        <ContactShadows opacity={0.35} scale={6} blur={2.4} far={3} />
      </group>
      <Rig />
    </Canvas>
  );
}
