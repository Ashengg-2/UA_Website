import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { woodFragmentShader, woodVertexShader } from "./woodShaders";
import { useWoodBackgroundActive } from "./useWoodBackgroundActive";
import { useWoodPointer } from "./useWoodPointer";

const ANIMATION_MS = 90;

export function WoodPlane() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const { viewport, size, invalidate } = useThree();
  const woodActive = useWoodBackgroundActive();
  const woodActiveRef = useRef(woodActive);
  woodActiveRef.current = woodActive;

  const requestRender = () => {
    if (woodActiveRef.current && !document.hidden) invalidate();
  };

  const { tick } = useWoodPointer(requestRender);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uResolution: { value: new THREE.Vector2(size.width, size.height) },
    }),
    [size.height, size.width],
  );

  useEffect(() => {
    if (!woodActive || document.hidden) return;

    requestRender();
    const interval = window.setInterval(requestRender, ANIMATION_MS);

    const onVisibility = () => {
      if (!document.hidden && woodActiveRef.current) requestRender();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      window.clearInterval(interval);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [woodActive, invalidate]);

  useFrame((state) => {
    if (!materialRef.current || document.hidden || !woodActiveRef.current) return;
    materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    materialRef.current.uniforms.uMouse.value.copy(tick());
    materialRef.current.uniforms.uResolution.value.set(size.width, size.height);
  });

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        vertexShader={woodVertexShader}
        fragmentShader={woodFragmentShader}
      />
    </mesh>
  );
}
