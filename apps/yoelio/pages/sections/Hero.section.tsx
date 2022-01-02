import React from "react";
import { Box, Flex, Icon, Link, SlideFade, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from "react-icons/fa";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { renderOptions } from "../../contentful/renderOptions";
import { IconType } from "react-icons/lib";

type HeroProps = {
  data: any;
  accentColor: string;
};

const linkTypeToIconMap = new Map<string, IconType>([
  ["GitHub", FaGithub],
  ["LinkedIn", FaLinkedin],
  ["Email", FaEnvelope],
  ["Resume", FaFileAlt],
]);

const Hero: React.FC<HeroProps> = (props) => {
  const { data, accentColor } = props;
  const buttonTextColor = useColorModeValue("base.03", "base.3");
  const buttonTextColorOnHover = useColorModeValue("base.3", "base.03");

  return (
    <Flex as="section" id="hero" maxW="5xl" mx="auto" px={4} pt={[24, 36]} direction="column">
      <SlideFade in>
        <Text>Hey there! I&apos;m-</Text>
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
              <Flex key={education.sys.id} gridGap={3}>
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
      <Stack mt={8} gridGap={3} spacing={0} direction={["column", "row"]} wrap="wrap">
        {data.hero.linksCollection.items.map((link: any, i: number) => (
          <SlideFade key={link.sys.id} in transition={{ enter: { delay: 0.6 + i * 0.1 } }}>
            <Link
              variant="button"
              border={["1px", "0px"]}
              borderBottom={["1px", "2px"]}
              borderColor={[accentColor, accentColor]}
              color={buttonTextColor}
              _hover={{
                bg: accentColor,
                color: buttonTextColorOnHover,
              }}
              href={link.url}
              isExternal
              alignItems="center"
              justifyContent="center"
            >
              <Icon as={linkTypeToIconMap.get(link.type)} boxSize={5} />
              <Text color="inherit">{link.type}</Text>
            </Link>
          </SlideFade>
        ))}
      </Stack>
    </Flex>
  );
};

export default Hero;
