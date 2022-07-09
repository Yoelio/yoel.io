import { Flex, Link, Text, useColorModeValue } from "@chakra-ui/react";
import { SlideFadeWhenVisible } from "@yoelio/components";
import React from "react";

const Contact: React.FC = () => {
  const inlineLinkColor = useColorModeValue("solYellow.700", "solCyan.600");

  return (
    <Flex as="section" id="contact" maxW="3xl" mx="auto" px={4} mt={36} direction="column">
      <SlideFadeWhenVisible threshold={1}>
        <Text as="h2" textStyle="h2" textAlign="center">
          Don&apos;t be a stranger!
        </Text>
        <Text textAlign="center" mt={4}>
          Feel free to reach out! Whether it&apos;s about work opportunities or just to chat, I&apos;m more than happy
          to make time to talk. You can reach me by&nbsp;
          <Link isExternal fontWeight="bold" color={inlineLinkColor} href="mailto:ykiflezghi@gmail.com">
            Email
          </Link>
          &nbsp;or&nbsp;
          <Link isExternal fontWeight="bold" color={inlineLinkColor} href="https://linkedin.com/in/yoel-k">
            LinkedIn
          </Link>
          .
        </Text>
      </SlideFadeWhenVisible>
    </Flex>
  );
};

export default Contact;
