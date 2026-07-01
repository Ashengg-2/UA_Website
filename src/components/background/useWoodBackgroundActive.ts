import { useEffect, useState } from "react";

const OPAQUE_COVER =
  "section.bg-gray-900, .bg-gray-900, .bg-black, .bg-gray-800, .bg-gray-700";

function isViewportCenterCovered() {
  const x = window.innerWidth * 0.5;
  const y = window.innerHeight * 0.5;
  const stack = document.elementsFromPoint(x, y);

  for (const el of stack) {
    if (el.closest("[data-wood-canvas]")) continue;
    if (el.closest(OPAQUE_COVER)) return true;
  }

  return false;
}

export function useWoodBackgroundActive() {
  const [active, setActive] = useState(true);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      setActive(!isViewportCenterCovered());
    };

    const schedule = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return active;
}
