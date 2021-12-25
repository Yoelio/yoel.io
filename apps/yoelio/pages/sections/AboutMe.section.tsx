import { Flex, Image } from "@chakra-ui/react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Card, SlideFadeWhenVisible } from "@yoelio/components";
import React from "react";
import { renderOptions } from "../../contentful/renderOptions";

type AboutMeProps = {
  data: any;
  accentColor: string;
};

const AboutMe: React.FC<AboutMeProps> = (props) => {
  const { data, accentColor } = props;

  return (
    <Flex as="section" id="about-me" maxW="5xl" mx="auto" px={4} mt={24} direction="column">
      <SlideFadeWhenVisible threshold={0.6}>
        <Flex direction={["column", null, "row"]} alignItems="center" gridGap={8}>
          <Card experimental_spaceY={4} p={4} borderLeft="4px" borderColor={accentColor}>
            {documentToReactComponents(
              data.aboutMe.description.json,
              renderOptions(data.aboutMe.description.links, accentColor, data.aboutMe.__typename)
            )}
          </Card>
          <Image
            src={data.aboutMe.me.url}
            borderRadius="full"
            boxSize={["15em", "xs"]}
            objectFit="cover"
            boxShadow={`0 0 0 3px var(--chakra-colors-${accentColor.replace(".", "-")})`}
            alt={data.aboutMe.me.description}
          />
        </Flex>
      </SlideFadeWhenVisible>
    </Flex>
  );
};

export default AboutMe;
