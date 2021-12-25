import { Box, Divider, Flex, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Card, SlideFadeWhenVisible } from "@yoelio/components";
import { useRouter } from "next/router";
import React from "react";
import { renderOptions } from "../../contentful/renderOptions";

type ExperienceProps = {
  data: any;
  accentColor: string;
};

const Experience: React.FC<ExperienceProps> = (props) => {
  const { data, accentColor } = props;
  const dividerColor = useColorModeValue("base.00", "base.0");
  const { locale } = useRouter();

  return (
    <Flex as="section" id="experience" maxW="5xl" mx="auto" px={4} mt={[24, 48]} direction="column">
      <SlideFadeWhenVisible>
        <Stack spacing={12}>
          <Card p={4} borderLeft="4px" borderColor={accentColor}>
            <Text as="h2" textStyle="h2">
              Experience
            </Text>
          </Card>
          {data.companiesCollection.items.map((company: any) => (
            <Card
              key={company.sys.id}
              p={4}
              borderTop="4px"
              borderColor={accentColor}
              display="flex"
              flexDirection="column"
            >
              <Card display="flex" border="2px" borderColor={accentColor} mt={-12} mb={4} p={3} boxSize="max-content">
                <SlideFadeWhenVisible threshold={1}>
                  <Flex gridGap={4} alignItems="center">
                    <Image
                      src={company.companyLogoDesktop.url}
                      alt={company.companyLogoDesktop.description}
                      boxSize="30px"
                      display="inline-block"
                    />
                    <Text textStyle="h3" display="inline-block">
                      {company.name}
                    </Text>
                  </Flex>
                </SlideFadeWhenVisible>
              </Card>
              <Stack spacing={6} divider={<Divider borderColor={dividerColor} opacity={0.2} />}>
                {company.experiencesCollection.items.map((experience: any) => (
                  <Box key={experience.sys.id}>
                    <Text variant="secondary">
                      {experience.location} ·&nbsp;
                      {new Date(experience.startDate).toLocaleDateString(locale, {
                        month: "short",
                        year: "numeric",
                      })}
                      &nbsp;-&nbsp;
                      {experience.endDate
                        ? new Date(experience.endDate).toLocaleDateString(locale, {
                            month: "short",
                            year: "numeric",
                          })
                        : "Present"}
                    </Text>
                    {documentToReactComponents(
                      experience.description.json,
                      renderOptions(experience.description.links, accentColor)
                    )}
                  </Box>
                ))}
              </Stack>
            </Card>
          ))}
        </Stack>
      </SlideFadeWhenVisible>
    </Flex>
  );
};

export default Experience;
