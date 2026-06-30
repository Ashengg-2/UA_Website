import { lazy, Suspense, useEffect, useState } from "react";

const WoodCanvas = lazy(() =>
  import("./WoodCanvas").then((module) => ({ default: module.WoodCanvas })),
);

function detectWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("webgl2"))
    );
  } catch {
    return false;
  }
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function AnimatedWoodBackground() {
  const [renderMode, setRenderMode] = useState<"loading" | "webgl" | "static">("loading");

  useEffect(() => {
    const useStatic = prefersReducedMotion() || !detectWebGL();
    setRenderMode(useStatic ? "static" : "webgl");

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMotionChange = () => {
      setRenderMode(motionQuery.matches || !detectWebGL() ? "static" : "webgl");
    };
    motionQuery.addEventListener("change", onMotionChange);
    return () => motionQuery.removeEventListener("change", onMotionChange);
  }, []);

  if (renderMode === "loading" || renderMode === "static") {
    return <div className="wood-surface-static" aria-hidden="true" />;
  }

  return (
    <Suspense fallback={<div className="wood-surface-static" aria-hidden="true" />}>
      <WoodCanvas />
    </Suspense>
  );
}
