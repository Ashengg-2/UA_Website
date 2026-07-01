import { Canvas } from "@react-three/fiber";
import { WoodPlane } from "./WoodPlane";

function resolveDprCap() {
  if (typeof window === "undefined") return 0.55;
  const coarse = window.matchMedia("(max-width: 768px)").matches;
  return coarse ? 0.45 : 0.6;
}

export function WoodCanvas() {
  const dprCap = resolveDprCap();
  const dpr: [number, number] = [0.4, Math.min(window.devicePixelRatio * 0.75, dprCap)];

  return (
    <Canvas
      data-wood-canvas
      frameloop="demand"
      dpr={dpr}
      orthographic
      camera={{ position: [0, 0, 1], zoom: 1, near: 0.1, far: 10 }}
      gl={{
        antialias: false,
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
      <WoodPlane />
    </Canvas>
  );
}
