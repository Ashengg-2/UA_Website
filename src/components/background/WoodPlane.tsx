import { useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { woodFragmentShader, woodVertexShader } from "./woodShaders";
import { useWoodPointer } from "./useWoodPointer";

interface WoodPlaneProps {
  segments: number;
}

export function WoodPlane({ segments }: WoodPlaneProps) {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const { viewport, size } = useThree();
  const { tick } = useWoodPointer();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uResolution: { value: new THREE.Vector2(size.width, size.height) },
    }),
    [size.height, size.width],
  );

  useFrame((state) => {
    if (!materialRef.current || document.hidden) return;
    materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    materialRef.current.uniforms.uMouse.value.copy(tick());
    materialRef.current.uniforms.uResolution.value.set(size.width, size.height);
  });

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1, segments, segments]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        vertexShader={woodVertexShader}
        fragmentShader={woodFragmentShader}
      />
    </mesh>
  );
}
