import { Canvas } from "@react-three/fiber";
import { WoodPlane } from "./WoodPlane";

function resolveSegments() {
  if (typeof window === "undefined") return 160;
  const coarse = window.matchMedia("(max-width: 768px)").matches;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (coarse || reduced) return 112;
  return 224;
}

export function WoodCanvas() {
  const segments = resolveSegments();
  const dpr = typeof window !== "undefined"
    ? Math.min(window.devicePixelRatio, 1.5)
    : 1;

  return (
    <Canvas
      dpr={dpr}
      orthographic
      camera={{ position: [0, 0, 1], zoom: 1, near: 0.1, far: 10 }}
      gl={{
        antialias: true,
        alpha: false,
        powerPreference: "high-performance",
        stencil: false,
        depth: false,
      }}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <WoodPlane segments={segments} />
    </Canvas>
  );
}
