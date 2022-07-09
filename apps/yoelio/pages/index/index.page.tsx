import type { NextPage } from "next";
import Head from "next/head";

import { Button, Flex, Icon, Link, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";

import { FaSun, FaMoon, FaGithub } from "react-icons/fa";
import { PillPity } from "pill-pity";
import { GraphQLClient } from "graphql-request";

import { Header, HeaderGroup } from "@yoelio/components";
import Query from "../../contentful/query";
import { Hero, Experience, AboutMe, Contact } from "./sections";

const Home: NextPage<any> = (data) => {
  const accentColor = useColorModeValue("solYellow.600", "solCyan.600");
  const inlineLinkColor = useColorModeValue("solYellow.700", "solCyan.600");
  const ColorModeIcon = useColorModeValue(
    <Icon as={FaMoon} boxSize={5} color="solViolet" />,
    <Icon as={FaSun} boxSize={5} color="solYellow.600" />
  );
  const { toggleColorMode } = useColorMode();

  return (
    <>
      <Head>
        <title>{data.seo.title}</title>
        <meta name="title" content={data.seo.title} />
        <meta name="description" content={data.seo.description} />
        {data.seo.noindex && <meta name="robots" content="noindex" />}

        <meta property="og:type" content="website" />
        <meta property="og:url" content={data.seo.url} />
        <meta property="og:title" content={data.seo.title} />
        <meta property="og:site_name" content={data.seo.siteName} />
        <meta property="og:description" content={data.seo.description} />
        <meta property="og:image" content={data.seo.image.url} />

        <meta property="twitter:card" content={data.seo.image.url} />
        <meta property="twitter:url" content={data.seo.url} />
        <meta property="twitter:title" content={data.seo.title} />
        <meta property="twitter:description" content={data.seo.description} />
        <meta property="twitter:image" content={data.seo.image.url} />

        <link rel="alternate icon" type="image/png" href="/yk.png" />
        <link rel="icon" type="image/svg+xml" href="/yk.svg" />
      </Head>
      <Header zIndex="banner">
        <HeaderGroup mx={4}>
          <Link href={data.seo.url} _hover={{ textDecoration: "none" }} aria-label={data.seo.siteName}>
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
            leftIcon={ColorModeIcon}
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
        <Hero data={data} accentColor={accentColor} />
        <Experience data={data} accentColor={accentColor} />
        <AboutMe data={data} accentColor={accentColor} />
        <Contact />
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
          <FaGithub aria-label="GitHub Logo." />
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
    props: data.landingPage,
    revalidate: 1,
  };
}

export default Home;
