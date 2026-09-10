"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, Environment, Float, Lightformer } from "@react-three/drei";
import * as THREE from "three";

// The hero object: Logan's pump bottle, modelled procedurally so nothing is
// downloaded. The label is drawn to a canvas texture from his real label copy.
// `spin` is a mutable ref (0..1 scroll progress) so scrolling turns the bottle.
// `focus` is an ingredient index; changing it nudges the bottle to face front.

const TEAL = "#1e9fb5";
const INK = "#0f2a33";
const smooth = (t: number) => t * t * (3 - 2 * t);

const PROFILE: [number, number][] = [[0.562,0.0082],[0.5671,0.0327],[0.5661,0.0572],[0.5671,0.0817],[0.5671,0.1063],[0.5681,0.1308],[0.5651,0.1553],[0.5681,0.1798],[0.5681,0.2044],[0.5671,0.2289],[0.5671,0.2534],[0.5671,0.2779],[0.5671,0.3025],[0.5671,0.327],[0.5671,0.3515],[0.5681,0.376],[0.5661,0.4005],[0.5671,0.4251],[0.5681,0.4496],[0.5681,0.4741],[0.5661,0.4986],[0.5681,0.5232],[0.5661,0.5477],[0.5671,0.5722],[0.5681,0.5967],[0.5671,0.6213],[0.5671,0.6458],[0.5691,0.6703],[0.5681,0.6948],[0.5671,0.7193],[0.5671,0.7439],[0.5681,0.7684],[0.5671,0.7929],[0.5671,0.8174],[0.5681,0.842],[0.5681,0.8665],[0.5671,0.891],[0.5671,0.9155],[0.5671,0.9401],[0.562,0.9646],[0.5681,0.9891],[0.5671,1.0136],[0.5691,1.0381],[0.5681,1.0627],[0.5681,1.0872],[0.5691,1.1117],[0.5681,1.1362],[0.5671,1.1608],[0.5671,1.1853],[0.5681,1.2098],[0.5671,1.2343],[0.5681,1.2589],[0.5691,1.2834],[0.5671,1.3079],[0.5681,1.3324],[0.5691,1.3569],[0.5681,1.3815],[0.5671,1.406],[0.5691,1.4305],[0.5691,1.455],[0.5681,1.4796],[0.5681,1.5041],[0.5681,1.5286],[0.5681,1.5531],[0.5681,1.5777],[0.5681,1.6022],[0.5691,1.6267],[0.5671,1.6512],[0.5691,1.6757],[0.5681,1.7003],[0.5681,1.7248],[0.5691,1.7493],[0.5681,1.7738],[0.5671,1.7984],[0.5691,1.8229],[0.5681,1.8474],[0.5681,1.8719],[0.5691,1.8965],[0.5681,1.921],[0.5681,1.9455],[0.5681,1.97],[0.5681,1.9946],[0.5681,2.0191],[0.5681,2.0436],[0.5671,2.0681],[0.5691,2.0926],[0.5691,2.1172],[0.5681,2.1417],[0.5691,2.1662],[0.5681,2.1907],[0.5681,2.2153],[0.5681,2.2398],[0.5681,2.2643],[0.5681,2.2888],[0.5681,2.3134],[0.5691,2.3379],[0.5681,2.3624],[0.5691,2.3869],[0.5681,2.4114],[0.5691,2.436],[0.5691,2.4605],[0.5691,2.485],[0.5691,2.5095],[0.5681,2.5341],[0.5681,2.5586],[0.5681,2.5831],[0.5691,2.6076],[0.5671,2.6322],[0.5691,2.6567],[0.5702,2.6812],[0.5671,2.7057],[0.5691,2.7302],[0.5691,2.7548],[0.5681,2.7793],[0.5702,2.8038],[0.5691,2.8283],[0.5691,2.8529],[0.5691,2.8774],[0.564,2.9019],[0.5467,2.9264],[0.4772,2.951],[0.3372,2.9755],[0.2718,3.0]];

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
  pts.push(new THREE.Vector2(0, 0.02), new THREE.Vector2(sm[0] * 0.9, 0.0));
  PROFILE.forEach(([, y], i) => pts.push(new THREE.Vector2(sm[i], y)));
  pts.push(new THREE.Vector2(0.27, 3.0), new THREE.Vector2(0.27, 3.02), new THREE.Vector2(0, 3.02));
  const g = new THREE.LatheGeometry(pts, 128);
  // linear V along height so the unwrapped photo lands where it was on the bottle
  const pos = g.attributes.position as THREE.BufferAttribute;
  const uv = g.attributes.uv as THREE.BufferAttribute;
  for (let i = 0; i < pos.count; i++) uv.setY(i, Math.min(1, Math.max(0, pos.getY(i) / 3.0)));
  uv.needsUpdate = true;
  return g;
}

const PLASTIC = { color: "#f6f8f8", roughness: 0.3, clearcoat: 0.9, clearcoatRoughness: 0.2 } as const;

// Pump head traced from the same photo: a flat duckbill spout that runs to the left,
// highest over the left-middle, sloping down to a rounded heel on the right.
function headGeometry(): THREE.ExtrudeGeometry {
  const sh = new THREE.Shape();
  const pts: [number, number][] = [
    [-0.441, 3.712], [-0.446, 3.745], [-0.43, 3.768], [-0.405, 3.787], [-0.2, 3.8], [-0.03, 3.797],
    [0.12, 3.776], [0.19, 3.755], [0.213, 3.735], [0.2, 3.708], [0.16, 3.695], [-0.15, 3.695], [-0.2, 3.706],
  ];
  sh.moveTo(pts[0][0], pts[0][1]);
  pts.slice(1).forEach(([x, y]) => sh.lineTo(x, y));
  sh.closePath();
  const g = new THREE.ExtrudeGeometry(sh, { depth: 0.2, bevelEnabled: true, bevelSize: 0.06, bevelThickness: 0.06, bevelSegments: 6, curveSegments: 12 });
  g.translate(0, 0, -0.1);
  return g;
}

function Pump() {
  const head = useMemo(() => headGeometry(), []);
  return (
    <group>
      {/* closure collar with fine vertical ribs: flat-shaded facets read as the ribs */}
      <mesh position={[0, 3.2, 0]}>
        <cylinderGeometry args={[0.25, 0.266, 0.41, 44, 1]} />
        <meshPhysicalMaterial {...PLASTIC} flatShading roughness={0.5} />
      </mesh>
      <mesh position={[0, 3.0, 0]}>
        <cylinderGeometry args={[0.272, 0.272, 0.028, 64]} />
        <meshPhysicalMaterial {...PLASTIC} />
      </mesh>
      {/* lock ring, then the stem */}
      <mesh position={[0, 3.44, 0]}>
        <cylinderGeometry args={[0.178, 0.19, 0.08, 48]} />
        <meshPhysicalMaterial {...PLASTIC} />
      </mesh>
      <mesh position={[0, 3.59, 0]}>
        <cylinderGeometry args={[0.158, 0.158, 0.22, 48]} />
        <meshPhysicalMaterial {...PLASTIC} />
      </mesh>
      <mesh geometry={head}>
        <meshPhysicalMaterial {...PLASTIC} />
      </mesh>
    </group>
  );
}

function Bottle({ spin, focus }: { spin: React.MutableRefObject<number>; focus: React.MutableRefObject<number> }) {
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
    const f = focus.current > 0 ? (focus.current - 5) * 0.22 : 0;
    // the full turn completes by 85% of the stage, so the front panel is already facing
    // the reader while the label card is on screen
    const want = smooth(Math.min(1, spin.current / 0.85)) * Math.PI * 2 + f;
    targetY.current += (want - targetY.current) * Math.min(1, dt * 4);
    g.rotation.y = targetY.current + Math.sin(state.clock.elapsedTime * 0.4) * 0.05;
    const wide = state.viewport.width > 7;
    // the glide finishes in the first 60% of the stage so the card never bisects the bottle
    const t = smooth(Math.min(1, spin.current / 0.6));
    // desktop: bottle glides from the right of the hero to the left of the label card.
    // phone: bottle parks in the top third while the label card slides under it.
    const x = wide ? 1.9 - t * 4.2 : 0;
    const y = wide ? -1.65 : 0.72 + t * 0.12;
    const pulse = 1 + Math.max(0, 1 - (state.clock.elapsedTime - pulseAt.current) * 3) * 0.04;
    const sc = (wide ? 0.92 : 0.47 - t * 0.04) * pulse;
    g.position.x += (x - g.position.x) * Math.min(1, dt * 3);
    g.position.y += (y - g.position.y) * Math.min(1, dt * 3);
    g.scale.setScalar(g.scale.x + (sc - g.scale.x) * Math.min(1, dt * 3));
    if (focus.current !== lastFocus.current) { lastFocus.current = focus.current; pulseAt.current = state.clock.elapsedTime; }
  });

  return (
    <group ref={group} position={[1.9, -1.65, 0]} scale={0.92}>
      <mesh geometry={body}>
        {label ? (
          <meshPhysicalMaterial key="print" map={label} roughness={0.28} clearcoat={0.8} clearcoatRoughness={0.18} envMapIntensity={1.1} />
        ) : (
          <meshPhysicalMaterial key="blank" color="#f6f8f8" roughness={0.28} clearcoat={0.8} clearcoatRoughness={0.18} />
        )}
      </mesh>
      <Pump />
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

export function Scene({ spin, focus, onReady }: { spin: React.MutableRefObject<number>; focus: React.MutableRefObject<number>; onReady?: () => void }) {
  const reduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const frameloop = reduced ? "demand" : "always";
  return (
    <Canvas
      className="nab-scene"
      dpr={[1, 1.5]}
      frameloop={frameloop}
      onCreated={() => onReady?.()}
      camera={{ position: [0, 0.4, 9.2], fov: 30 }}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      aria-hidden="true"
    >
      <Liquid />
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 5, 4]} intensity={2.2} />
      <directionalLight position={[-4, 2, -2]} intensity={0.8} color={TEAL} />
      <Environment resolution={256}>
        <Lightformer intensity={3} position={[0, 4, -4]} scale={[8, 3, 1]} />
        <Lightformer intensity={2} position={[-5, 1, 2]} scale={[2, 6, 1]} color="#ffffff" />
        <Lightformer intensity={1.5} position={[5, 0, 2]} scale={[2, 6, 1]} color="#dff6fa" />
        <Lightformer intensity={4} position={[-2, 2, 3]} scale={[0.4, 6, 1]} />
        <Lightformer intensity={1.2} position={[-3, -4, 2]} scale={[4, 2, 1]} color={TEAL} />
      </Environment>
      <Float speed={reduced ? 0 : 1.2} rotationIntensity={0.15} floatIntensity={0.6}>
        <Bottle spin={spin} focus={focus} />
      </Float>
      <Bubbles />
      <ContactShadows position={[0, -1.66, 0]} opacity={0.35} scale={8} blur={2.4} far={3} />
      <Rig />
    </Canvas>
  );
}
