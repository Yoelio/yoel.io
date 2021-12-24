import { motion, MotionProps } from "framer-motion";
import { useAnimateOnceInView } from "@yoelio/hooks";

type SlideFadeWhenVisibleProps = {
  children: React.ReactChild | React.ReactChild[];
  threshold?: number;
  duration?: number;
  offsetX?: number;
  offsetY?: number;
  delay?: number;
} & MotionProps;

export default function SlideFadeWhenVisible({
  threshold,
  duration = 0.4,
  offsetX = 0,
  offsetY = 20,
  delay = 0,
  ...rest
}: SlideFadeWhenVisibleProps) {
  const { ref, controls } = useAnimateOnceInView(threshold);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration, delay }}
      variants={{
        hidden: { opacity: 0, y: offsetY, x: offsetX },
        visible: { opacity: 1, y: 0, x: 0 },
      }}
      {...rest}
    />
  );
}
