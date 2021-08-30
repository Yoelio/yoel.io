import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function useAnimateOnceInView(threshold?: number) {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: threshold ? threshold : 0.35 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return { ref, controls };
}
