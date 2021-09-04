import { Box, BoxProps, ComponentStyleConfig, useStyleConfig, forwardRef } from "@chakra-ui/react";

const Card: React.FC<BoxProps> = forwardRef<BoxProps, "div">((props, ref) => {
  const styles = useStyleConfig("Card");
  return <Box __css={styles} {...props} ref={ref} />;
});

export const CardStyle: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: "md",
    boxShadow: "md",
  },
};

export default Card;
