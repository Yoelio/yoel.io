import { Flex, FlexProps, ComponentStyleConfig, useStyleConfig, forwardRef } from "@chakra-ui/react";

const Card: React.FC<FlexProps> = forwardRef<FlexProps, "div">((props, ref) => {
  const styles = useStyleConfig("Card", undefined);
  return <Flex __css={styles} {...props} ref={ref} />;
});

export const CardStyle: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: "md",
    boxShadow: "md",
  },
};

export default Card;
