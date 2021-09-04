import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import {
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Link,
  SlideFade,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { FaSun, FaMoon, FaEnvelope } from "react-icons/fa";
import { PillPity } from "pill-pity";
import { GraphQLClient } from "graphql-request";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { Card, Header, HeaderGroup, SlideFadeWhenVisible } from "@yoelio/components";
import Query from "../contentful/query";
import theme from "../styles/theme";
import { renderOptions } from "../contentful/renderOptions";

const Home: NextPage<{ landingPage: any }> = (props) => {
  const landingPage = props.landingPage;
  const { colors } = theme;
  const { colorMode, toggleColorMode } = useColorMode();
  const buttonIconColor = useColorModeValue(colors.base["03"], colors.base[3]);
  const colorModeIconColor = useColorModeValue(colors.solViolet, colors.solYellow[600]);
  const accentColor = useColorModeValue("solYellow.600", "solCyan.600");
  const inlineLinkColor = useColorModeValue("solYellow.700", "solCyan.600");
  const dividerColor = useColorModeValue("base.00", "base.0");
  return (
    <>
      <Head>
        <title>{landingPage.seo.title}</title>
        <meta name="title" content={landingPage.seo.title} />
        <meta name="description" content={landingPage.seo.description} />
        {landingPage.seo.noindex && <meta name="robots" content="noindex" />}

        <meta property="og:type" content="website" />
        <meta property="og:url" content={landingPage.seo.url} />
        <meta property="og:title" content={landingPage.seo.title} />
        <meta property="og:site_name" content={landingPage.seo.siteName} />
        <meta property="og:description" content={landingPage.seo.description} />
        <meta property="og:image" content={landingPage.seo.image.url} />

        <meta property="twitter:card" content={landingPage.seo.image.url} />
        <meta property="twitter:url" content={landingPage.seo.url} />
        <meta property="twitter:title" content={landingPage.seo.title} />
        <meta property="twitter:description" content={landingPage.seo.description} />
        <meta property="twitter:image" content={landingPage.seo.image.url} />
        <link rel="alternate icon" type="image/png" href="/yk.png" />
        <link rel="icon" type="image/svg+xml" href="/yk.svg" />
      </Head>
      <Header zIndex="banner">
        <HeaderGroup mx={4}>
          <Link href={landingPage.seo.url} _hover={{ textDecoration: "none" }} aria-label={landingPage.seo.siteName}>
            <Text textStyle="h2">
              y
              <Text textStyle="inherit" as="span" color={accentColor}>
                k
              </Text>
            </Text>
          </Link>
        </HeaderGroup>
        <HeaderGroup mx={4}>
          <Button
            variant="alt"
            iconSpacing={0}
            leftIcon={
              colorMode === "dark" ? (
                <FaSun size={20} color={colorModeIconColor} />
              ) : (
                <FaMoon size={20} color={colorModeIconColor} />
              )
            }
            onClick={toggleColorMode}
            aria-label="Toggle Color Mode"
          />
        </HeaderGroup>
      </Header>
      <PillPity
        as="main"
        patFill={accentColor}
        pattern="topography"
        bgColor="transparent"
        minH="100vh"
        patOpacity={0.2}
        pb={36}
      >
        <Flex as="section" id="hero" maxW={"5xl"} mx="auto" px={4} pt={36} direction="column">
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
              landingPage.hero.headline.json,
              renderOptions(landingPage.hero.headline.links, accentColor, landingPage.hero.__typename)
            )}
          </SlideFade>
          <SlideFade in transition={{ enter: { delay: 0.5 } }}>
            <Stack mt={4} spacing={1}>
              <Flex gridGap={3}>
                <Text textStyle="headline">🌎</Text>
                <Text textStyle="h3">{landingPage.hero.location}</Text>
              </Flex>
              <Stack>
                {landingPage.hero.educationCollection.items.map((education: any) => (
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
          <Stack mt={8} spacing={4} direction={["column", "row"]}>
            {[
              <Link
                key={0}
                variant="button"
                border={["1px", "0px"]}
                borderBottom={["1px", "2px"]}
                borderColor={[accentColor, accentColor]}
                href="https://linkedin.com/in/yoel-k"
                isExternal
                placeContent="center"
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
                placeContent="center"
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
                placeContent="center"
                aria-label="Email"
              >
                <FaEnvelope size={20} color={buttonIconColor} />
                <Text>Email</Text>
              </Link>,
            ].map((link, i) => (
              <SlideFade key={i} in transition={{ enter: { delay: 0.6 + i * 0.1 } }}>
                {link}
              </SlideFade>
            ))}
          </Stack>
        </Flex>
        <Flex as="section" id="experience" maxW="5xl" mx="auto" px={4} mt={[24, 48]} direction="column">
          <SlideFadeWhenVisible>
            <Stack spacing={12}>
              <Card p={4} borderLeft="4px" borderColor={accentColor}>
                <Text as="h2" textStyle="h2">
                  Experience
                </Text>
              </Card>
              {landingPage.companiesCollection.items.map((company: any) => (
                <Card
                  key={company.sys.id}
                  p={4}
                  borderTop="4px"
                  borderColor={accentColor}
                  display="flex"
                  flexDirection="column"
                >
                  <Card
                    display="flex"
                    border="2px"
                    borderColor={accentColor}
                    mt={-12}
                    mb={2}
                    p={2}
                    boxSize="max-content"
                  >
                    <SlideFadeWhenVisible threshold={1}>
                      <Image
                        src={company.companyLogoDesktop.url}
                        alt={company.companyLogoDesktop.description}
                        boxSize="30px"
                      />
                    </SlideFadeWhenVisible>
                  </Card>
                  <Stack spacing={6} divider={<Divider borderColor={dividerColor} opacity={0.2} />}>
                    {company.experiencesCollection.items.map((experience: any) => (
                      <Box key={experience.sys.id}>
                        <Text variant="secondary">
                          {experience.location} ·&nbsp;
                          {new Date(experience.startDate).toLocaleDateString("en-US", {
                            month: "short",
                            year: "numeric",
                          })}
                          &nbsp;-&nbsp;
                          {experience.endDate
                            ? new Date(experience.endDate).toLocaleDateString("en-US", {
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
        <Flex as="section" id="about-me" maxW="5xl" mx="auto" px={4} mt={24} direction="column">
          <SlideFadeWhenVisible threshold={0.6}>
            <Flex direction={["column", null, "row"]} alignItems="center" gridGap={8}>
              <Card experimental_spaceY={4} p={4} borderLeft="4px" borderColor={accentColor}>
                {documentToReactComponents(
                  landingPage.aboutMe.description.json,
                  renderOptions(landingPage.aboutMe.description.links, accentColor, landingPage.aboutMe.__typename)
                )}
              </Card>
              <Image
                src={landingPage.aboutMe.me.url}
                borderRadius="full"
                boxSize={["15em", "xs"]}
                objectFit="cover"
                boxShadow={`0 0 0 3px var(--chakra-colors-${accentColor.replace(".", "-")})`}
                alt={landingPage.aboutMe.me.description}
              />
            </Flex>
          </SlideFadeWhenVisible>
        </Flex>
        <Flex as="section" id="contact" maxW="3xl" mx="auto" px={4} mt={36} direction="column">
          <SlideFadeWhenVisible>
            <Text as="h2" textStyle="h2" textAlign="center">
              Don't be a stranger!
            </Text>
            <Text textAlign="center" mt={4}>
              Feel free to reach out! Whether it's about work opportunities or just to chat, I'm more than happy to make
              time to talk. You can reach me by&nbsp;
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
      </PillPity>
      <Flex as="footer" direction="column" textAlign="center" textStyle="footer" py={12} px={4}>
        <Text textStyle="inherit">
          Designed and Developed by&nbsp;
          <Text as="span" textStyle="inherit">
            Yoel Kiflezghi
          </Text>
          .
        </Text>
        <Text textStyle="inherit">
          Built with&nbsp;
          <Link href="https://nextjs.org/" isExternal color={inlineLinkColor} textStyle="inherit" fontWeight="bold">
            Next.js
          </Link>
          &nbsp;&amp;&nbsp;
          <Link href="https://chakra-ui.com/" isExternal color={inlineLinkColor} textStyle="inherit" fontWeight="bold">
            Chakra UI
          </Link>
          . Deployed on&nbsp;
          <Link href="https://vercel.com/" isExternal color={inlineLinkColor} textStyle="inherit" fontWeight="bold">
            Vercel
          </Link>
          .
        </Text>
        <Link
          href="https://github.com/Yoelio/yoel.io/"
          isExternal
          color={inlineLinkColor}
          textStyle="inherit"
          fontWeight="bold"
          mt={4}
          w="max-content"
          alignSelf="center"
          display="flex"
          alignItems="center"
          gridGap={2}
        >
          <SiGithub aria-label="GitHub Logo." />
          Source Code
        </Link>
      </Flex>
    </>
  );
};

export async function getStaticProps() {
  const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`;
  const client = new GraphQLClient(endpoint, {
    headers: {
      Authorization: `Bearer ${
        process.env.NODE_ENV === "development"
          ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
          : process.env.CONTENTFUL_ACCESS_TOKEN
      }`,
    },
  });
  // request data with provided query. In development, the content is delivered from the Contentful Preview API
  const data = await client.request(Query.landingPage, { preview: process.env.NODE_ENV === "development" });

  return {
    props: data,
    revalidate: 1,
  };
}

export default Home;
