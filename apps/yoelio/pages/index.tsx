import React from "react";
import type { NextPage, NextPageContext } from "next";
import Head from "next/head";
import Image from "next/image";
import {
  Box,
  Button,
  Divider,
  Flex,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { PillPity } from "pill-pity";
import { GraphQLClient } from "graphql-request";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { Options, documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { Card, Header, HeaderGroup } from "@yoelio/components";
import Query from "../contentful/query";
import theme from "../styles/theme";

const Home: NextPage<{ landingPage: any }> = (props) => {
  const landingPage = props.landingPage;
  const { colors } = theme;
  const { colorMode, toggleColorMode } = useColorMode();
  const buttonIconColor = useColorModeValue(colors.base["03"], colors.base[3]);
  const colorModeIconColor = useColorModeValue(colors.violet, colors.yellow);
  const accentColor = useColorModeValue("yellow", "cyan");
  const dividerColor = useColorModeValue("base.00", "base.0");
  /* eslint-disable react/display-name */
  const options: Options = {
    renderMark: {
      [MARKS.BOLD]: (text) => (
        <Text as="span" fontWeight="bold">
          {text}
        </Text>
      ),
    },
    renderNode: {
      [BLOCKS.HEADING_3]: (_, children) => (
        <Text as="h3" textStyle="h3">
          {children}
        </Text>
      ),
      [BLOCKS.PARAGRAPH]: (_, children) => <Text>{children}</Text>,
      [BLOCKS.UL_LIST]: (_, children) => (
        <UnorderedList spacing={1} listStyleType="square" ml={6} mt={2}>
          {children}
        </UnorderedList>
      ),
      [BLOCKS.LIST_ITEM]: (_, children) => <ListItem color={accentColor}>{children}</ListItem>,
    },
  };
  /* eslint-enable react/display-name */

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <title>Yoel Kiflezghi</title>
        <meta name="title" content="Yoel Kiflezghi" />
        <meta name="description" content="A software engineer from Cary, North Carolina" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yoel.io/" />
        <meta property="og:title" content="Yoel Kiflezghi" />
        <meta property="og:site_name" content="yoel.io" />
        <meta property="og:description" content="A software engineer from Cary, North Carolina" />
        <meta
          property="og:image"
          content="https://images.ctfassets.net/rox7jrv18wsf/3rAjNdYSe86U8s6ohYdufj/33c9fe8d7f9e3f4c52dc7cc5ef81fef4/Yoel.jpeg?h=250"
        />

        <meta
          property="twitter:card"
          content="https://images.ctfassets.net/rox7jrv18wsf/3rAjNdYSe86U8s6ohYdufj/33c9fe8d7f9e3f4c52dc7cc5ef81fef4/Yoel.jpeg?h=250"
        />
        <meta property="twitter:url" content="https://yoel.io/" />
        <meta property="twitter:title" content="Yoel Kiflezghi" />
        <meta property="twitter:description" content="A software engineer from Cary, North Carolina" />
        <meta
          property="twitter:image"
          content="https://images.ctfassets.net/rox7jrv18wsf/3rAjNdYSe86U8s6ohYdufj/33c9fe8d7f9e3f4c52dc7cc5ef81fef4/Yoel.jpeg?h=250"
        />
        <link rel="icon" href="/yoelio_logo.png" />
      </Head>
      <Header zIndex="banner">
        <HeaderGroup mx={4}>
          <Link href="https://www.yoel.io" _hover={{ textDecoration: "none" }} aria-label="yoel.io">
            <Text textStyle="h2">
              Y
              <Text textStyle="inherit" as="span" color={accentColor}>
                K
              </Text>
            </Text>
          </Link>
        </HeaderGroup>
        <HeaderGroup mx={4}>
          <Link variant="buttonGhost" py={2.5} href="https://linkedin.com/in/yoel-k" isExternal aria-label="LinkedIn">
            <FaLinkedin size={20} color={buttonIconColor} />
          </Link>
          <Link variant="buttonGhost" py={2.5} href="https://github.com/Yoelio" isExternal aria-label="GitHub">
            <FaGithub size={20} color={buttonIconColor} />
          </Link>
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
        patOpacity={0.3}
        pb={4}
      >
        <Flex as="section" id="hero" maxW={"5xl"} mx="auto" px={4} pt={36} direction="column">
          <Text fontWeight="normal">Hey there! I&apos;m-</Text>
          <Flex as="h1" textStyle="h1" direction="column" mt={2}>
            <Text as="span" textStyle="inherit">
              Yoel
            </Text>
            <Text as="span" textStyle="inherit" color={accentColor}>
              Kiflezghi.
            </Text>
          </Flex>
          <Text textStyle="headline" mt={8}>
            Software Engineer.
            <Text as="span" textStyle="inherit" variant="secondary">
              &nbsp;A computer science undergrad with three summers of practical software engineering internship
              experience.
            </Text>
          </Text>
          <Stack mt={4} spacing={4} direction={["column", "row"]}>
            <Link
              variant="button"
              href="https://linkedin.com/in/yoel-k"
              isExternal
              placeContent="center"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} color={buttonIconColor} />
              <Text>LinkedIn</Text>
            </Link>
            <Link
              variant="button"
              href="https://github.com/Yoelio"
              isExternal
              placeContent="center"
              aria-label="GitHub"
            >
              <FaGithub size={20} color={buttonIconColor} />
              <Text>GitHub</Text>
            </Link>
            <Link
              variant="button"
              href="mailto:ykiflezghi@gmail.com"
              isExternal
              placeContent="center"
              aria-label="Email"
            >
              <FaEnvelope size={20} color={buttonIconColor} />
              <Text>Email</Text>
            </Link>
          </Stack>
        </Flex>
        <Flex
          as="section"
          id="experience"
          maxW="5xl"
          mx="auto"
          px={4}
          mt={[12, 48]}
          direction="column"
          justifyContent="center"
        >
          <Text as="h2" textStyle="h2">
            Experience
          </Text>
          <Stack mt={4}>
            {landingPage.companiesCollection.items.map((company: any, index: number) => (
              <Card py={4} px={4} key={index}>
                <Box w={6} mb={4}>
                  <Image src={company.companyLogoDesktop.url} alt="Microsoft logo" width="100%" height="100%" />
                </Box>
                <Stack spacing={8} divider={<Divider borderColor={dividerColor} opacity={0.2} />}>
                  {company.experiencesCollection.items.map((experience: any, index: number) => (
                    <Box key={index}>
                      <Text variant="secondary">
                        {experience.location} ·&nbsp;
                        {new Date(experience.startDate).toLocaleDateString("en-US", {
                          month: "short",
                          year: "numeric",
                        })}
                        &nbsp;-&nbsp;
                        {new Date(experience.endDate).toLocaleDateString("en-US", {
                          month: "short",
                          year: "numeric",
                        })}
                      </Text>
                      {documentToReactComponents(experience.description.json, options)}
                    </Box>
                  ))}
                </Stack>
              </Card>
            ))}
          </Stack>
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
          <Link href="https://nextjs.org/" isExternal color={accentColor} textStyle="inherit">
            Next.js
          </Link>
          &nbsp;&amp;&nbsp;
          <Link href="https://chakra-ui.com/" isExternal color={accentColor} textStyle="inherit">
            Chakra UI
          </Link>
          . Deployed on&nbsp;
          <Link href="https://vercel.com/" isExternal color={accentColor} textStyle="inherit">
            Vercel
          </Link>
          .
        </Text>
      </Flex>
    </>
  );
};

export async function getStaticProps(context: NextPageContext) {
  const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`;
  const client = new GraphQLClient(endpoint, {
    headers: {
      Authorization: `Bearer ${process.env.CONTENTFUL_DELIVERY_API_KEY}`,
    },
  });
  const data = await client.request(Query.landingPage);

  return {
    props: data,
    revalidate: 1,
  };
}

export default Home;
