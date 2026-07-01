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

function StaticWoodFallback() {
  return <div className="wood-surface-static" aria-hidden="true" />;
}

export function AnimatedWoodBackground() {
  const [renderMode, setRenderMode] = useState<"loading" | "webgl" | "static">("loading");
  const [webglReady, setWebglReady] = useState(false);

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

  useEffect(() => {
    if (renderMode !== "webgl") {
      setWebglReady(false);
      return;
    }

    const schedule = () => setWebglReady(true);
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(schedule, { timeout: 1200 });
      return () => window.cancelIdleCallback(id);
    }

    const id = window.setTimeout(schedule, 400);
    return () => window.clearTimeout(id);
  }, [renderMode]);

  if (renderMode === "loading" || renderMode === "static") {
    return <StaticWoodFallback />;
  }

  if (!webglReady) {
    return <StaticWoodFallback />;
  }

  return (
    <Suspense fallback={<StaticWoodFallback />}>
      <WoodCanvas />
    </Suspense>
  );
}
