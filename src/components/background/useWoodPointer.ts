import { useEffect, useRef } from "react";
import * as THREE from "three";

const LERP = 0.06;
const MAX_OFFSET = 0.012;

export function useWoodPointer() {
  const target = useRef(new THREE.Vector2(0, 0));
  const current = useRef(new THREE.Vector2(0, 0));

  useEffect(() => {
    const handleMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * MAX_OFFSET * 2;
      const y = -(event.clientY / window.innerHeight - 0.5) * MAX_OFFSET * 2;
      target.current.set(x, y);
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  const tick = () => {
    current.current.lerp(target.current, LERP);
    return current.current;
  };

  return { tick };
}
