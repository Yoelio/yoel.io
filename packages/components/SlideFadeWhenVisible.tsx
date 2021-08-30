import { motion, MotionProps } from "framer-motion";
import { useAnimateOnceInView } from "@yoelio/hooks";

type SlideFadeWhenVisibleProps = {
  children: React.ReactChild;
  threshold?: number;
  duration?: number;
  offsetX?: number;
  offsetY?: number;
  delay?: number;
} & MotionProps;

export default function SlideFadeWhenVisible({
  children,
  threshold,
  duration,
  offsetX,
  offsetY,
  delay,
  ...rest
}: SlideFadeWhenVisibleProps) {
  const { ref, controls } = useAnimateOnceInView(threshold);

  return (
    <motion.div
      {...rest}
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: duration ?? 0.4, delay: delay ?? 0 }}
      variants={{
        visible: { opacity: 1, y: 0, x: 0 },
        hidden: { opacity: 0, y: offsetY ?? 20, x: offsetX },
      }}
    >
      {children}
    </motion.div>
  );
}
