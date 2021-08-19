import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {
  Box,
  Button,
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

import { Card, Header, HeaderGroup } from "@yoelio/components";
import google from "../public/google.svg";
import microsoft from "../public/microsoft.svg";
import theme from "../styles/theme";

const Home: NextPage = () => {
  const { colors } = theme;
  const { colorMode, toggleColorMode } = useColorMode();
  const buttonIconColor = useColorModeValue(colors.base["03"], colors.base[3]);
  const colorModeIconColor = useColorModeValue(colors.violet, colors.yellow);
  const accentColor = useColorModeValue("yellow", "cyan");
  return (
    <>
      <Head>
        <title>Yoel Kiflezghi</title>
        <meta name="title" content="Yoel Kiflezghi" />
        <meta name="description" content="A software engineer from Cary, North Carolina" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yoel.io/" />
        <meta property="og:title" content="Yoel Kiflezghi" />
        <meta property="og:description" content="A software engineer from Cary, North Carolina" />
        <meta
          property="og:image"
          content="https://images.ctfassets.net/rox7jrv18wsf/3rAjNdYSe86U8s6ohYdufj/33c9fe8d7f9e3f4c52dc7cc5ef81fef4/Yoel.jpeg?h=250"
        />

        <meta property="twitter:card" content="summary_large_image" />
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
          <Text textStyle="h2">Experience</Text>
          <Stack mt={4}>
            <Card py={4} px={4}>
              <Box w={6}>
                <Image src={microsoft} alt="Microsoft logo" width="100%" height="100%" />
              </Box>
              <Box>
                <Text mt={4} textStyle="h3">
                  Explore Intern at&nbsp;
                  <Text as="span" fontWeight="bold" textStyle="inherit">
                    Microsoft
                  </Text>
                </Text>
                <Text variant="secondary">Remote</Text>
                <UnorderedList spacing={1} listStyleType="square" ml={6} mt={4}>
                  <ListItem color={accentColor}>
                    <Text>
                      Designed and developed a global theming system for the entire Power Apps mobile app allowing for
                      dynamic light/dark mode switching with minimal refactoring.
                    </Text>
                  </ListItem>
                  <ListItem color={accentColor}>
                    <Text>
                      Worked closely with UI designer to implement themes in accordance with design and accessibility
                      specifications.
                    </Text>
                  </ListItem>
                  <ListItem color={accentColor}>
                    <Text>Developed in React Native and TypeScript.</Text>
                  </ListItem>
                </UnorderedList>
              </Box>
            </Card>
            <Card py={4} px={4}>
              <Box w={6}>
                <Image src={google} alt="Google logo" width="100%" height="100%" />
              </Box>
              <Box>
                <Text mt={4} textStyle="h3">
                  Engineering Practicum Intern at&nbsp;
                  <Text as="span" fontWeight="extrabold" textStyle="inherit">
                    Google
                  </Text>
                </Text>
                <Text variant="secondary">Sunnyvale, CA</Text>
                <UnorderedList spacing={1} listStyleType="square" ml={6} mt={4}>
                  <ListItem color={accentColor}>
                    <Text>
                      Built a consumer-facing feature enabling users to receive, edit, and save phone contacts sent over
                      MMS in the Google Voice Android app.
                    </Text>
                  </ListItem>
                  <ListItem color={accentColor}>
                    <Text>
                      Utilized Google&apos;s internal Android concurrency framework to free up the main UI thread while
                      parsing contact information payload.
                    </Text>
                  </ListItem>
                  <ListItem color={accentColor}>
                    <Text>Developed in Java.</Text>
                  </ListItem>
                </UnorderedList>
              </Box>
            </Card>
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

export default Home;
