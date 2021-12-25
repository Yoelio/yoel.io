import React from "react";
import { Box, Flex, Link, SlideFade, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { FaEnvelope, FaFileAlt } from "react-icons/fa";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { renderOptions } from "../../contentful/renderOptions";
import theme from "../../styles/theme";

type HeroProps = {
  data: any;
  accentColor: string;
};

const Hero: React.FC<HeroProps> = (props) => {
  const { data, accentColor } = props;
  const { colors } = theme;
  const buttonIconColor = useColorModeValue(colors.base["03"], colors.base["3"]);
  return (
    <Flex as="section" id="hero" maxW="5xl" mx="auto" px={4} pt={[24, 36]} direction="column">
      <SlideFade in>
        <Text fontWeight="normal">Hey there! I&apos;m-</Text>
      </SlideFade>
      <Flex as="h1" textStyle="h1" direction="column" mt={2} mb={4}>
        <SlideFade in transition={{ enter: { delay: 0.2 } }}>
          <Text as="span" textStyle="inherit">
            Yoel
          </Text>
        </SlideFade>
        <SlideFade in transition={{ enter: { delay: 0.3 } }}>
          <Text as="span" textStyle="inherit" color={accentColor}>
            Kiflezghi.
          </Text>
        </SlideFade>
      </Flex>
      <SlideFade in transition={{ enter: { delay: 0.4 } }}>
        {documentToReactComponents(
          data.hero.headline.json,
          renderOptions(data.hero.headline.links, accentColor, data.hero.__typename)
        )}
      </SlideFade>
      <SlideFade in transition={{ enter: { delay: 0.5 } }}>
        <Stack mt={4} spacing={1}>
          <Flex gridGap={3}>
            <Text textStyle="headline">🌎</Text>
            <Text textStyle="h3">{data.hero.location}</Text>
          </Flex>
          <Stack>
            {data.hero.educationCollection.items.map((education: any) => (
              <Flex gridGap={3} key={education.sys.id}>
                <Text textStyle="headline">🎓</Text>
                <Box display="inline-block">
                  <Text textStyle="h3">{education.degree}</Text>
                  <Text variant="secondary" fontWeight="medium">
                    {education.university}
                  </Text>
                </Box>
              </Flex>
            ))}
          </Stack>
        </Stack>
      </SlideFade>
      <Stack mt={8} gridGap={2} direction={["column", "row"]} wrap="wrap">
        {[
          <Link
            key={0}
            variant="button"
            border={["1px", "0px"]}
            borderBottom={["1px", "2px"]}
            borderColor={[accentColor, accentColor]}
            href="https://linkedin.com/in/yoel-k"
            isExternal
            alignItems="center"
            justifyContent="center"
          >
            <SiLinkedin size={20} color={buttonIconColor} aria-label="LinkedIn" />
            <Text>LinkedIn</Text>
          </Link>,
          <Link
            key={1}
            variant="button"
            border={["1px", "0px"]}
            borderBottom={["1px", "2px"]}
            borderColor={[accentColor, accentColor]}
            href="https://github.com/Yoelio"
            isExternal
            alignItems="center"
            justifyContent="center"
          >
            <SiGithub size={20} color={buttonIconColor} aria-label="GitHub" />
            <Text>GitHub</Text>
          </Link>,
          <Link
            key={2}
            variant="button"
            border={["1px", "0px"]}
            borderBottom={["1px", "2px"]}
            borderColor={[accentColor, accentColor]}
            href="mailto:ykiflezghi@gmail.com"
            isExternal
            alignItems="center"
            justifyContent="center"
          >
            <FaEnvelope size={20} color={buttonIconColor} aria-label="Email" />
            <Text>Email</Text>
          </Link>,
          <Link
            key={3}
            variant="button"
            border={["1px", "0px"]}
            borderBottom={["1px", "2px"]}
            borderColor={[accentColor, accentColor]}
            href="/api/resume"
            isExternal
            alignItems="center"
            justifyContent="center"
          >
            <FaFileAlt size={20} color={buttonIconColor} aria-label="Résumé" />
            <Text>Resume</Text>
          </Link>,
        ].map((link, i) => (
          <SlideFade key={i} in transition={{ enter: { delay: 0.6 + i * 0.1 } }}>
            {link}
          </SlideFade>
        ))}
      </Stack>
    </Flex>
  );
};

export default Hero;
