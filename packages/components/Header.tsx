import { HStack, StackProps, FlexProps } from "@chakra-ui/react";
import type { ComponentStyleConfig } from "@chakra-ui/react";
import { forwardRef, useStyleConfig } from "@chakra-ui/system";
import React from "react";

interface HeaderProps extends Omit<FlexProps, "direction"> {
  children: React.ReactElement<HeaderGroupProps> | React.ReactElement<HeaderGroupProps>[];
}

type HeaderGroupProps = Omit<StackProps, "direction">;

const Header: React.FC<HeaderProps> = forwardRef<HeaderProps, "div">(({ children, ...rest }, ref) => {
  const styles = useStyleConfig("Header", undefined);
  return (
    <HStack __css={styles} {...rest} ref={ref}>
      {children}
    </HStack>
  );
});

export const HeaderGroup: React.FC<HeaderGroupProps> = (props) => <HStack {...props} />;

export const HeaderStyle: ComponentStyleConfig = {
  baseStyle: (props) => ({
    bg: props.colorMode === "dark" ? "base.02" : "base.2",
    h: 16,
    w: "full",
    position: "fixed",
    justifyContent: "space-between",
    boxShadow: "md",
  }),
};

export default Header;
