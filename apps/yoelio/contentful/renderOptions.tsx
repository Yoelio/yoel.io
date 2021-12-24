import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import { Options } from "@contentful/rich-text-react-renderer";
import { Code, ListItem, Image, Tag, TagLabel, TagLeftIcon, Text, UnorderedList, Link } from "@chakra-ui/react";
import * as SimpleIcons from "react-icons/si";
import { IconType } from "react-icons/lib";
import { SlideFadeWhenVisible } from "@yoelio/components";

export function renderOptions(links: any, accentColor: string, typename?: string): Options {
  // create an entry map
  const entryMap = new Map();
  if (links?.entries?.inline) {
    // loop through the inline linked entries and add them to the map
    links.entries.inline.forEach((entry: any, i: number) => {
      entryMap.set(entry.sys.id, [entry, i]);
    });
  }
  // create an asset map
  const assetMap = new Map();
  if (links?.assets?.hyperlink)
    // loop through the assets and add them to the map
    for (const asset of links.assets.hyperlink) {
      assetMap.set(asset.sys.id, asset);
    }
  return {
    /* eslint-disable react/display-name */
    renderMark: {
      [MARKS.CODE]: (text) => (
        <Code colorScheme={accentColor.split(".")[0]} fontWeight="bold" borderRadius="md">
          {text}
        </Code>
      ),
      [MARKS.BOLD]: (text) => {
        if (typename === "Hero") {
          return (
            <Text as="span" textStyle="headline">
              {text}
            </Text>
          );
        }
        return (
          <Text as="span" fontWeight="bold">
            {text}
          </Text>
        );
      },
    },
    renderNode: {
      [BLOCKS.HEADING_2]: (_, children) => (
        <Text as="h2" textStyle="h2">
          {children}
        </Text>
      ),
      [BLOCKS.HEADING_3]: (_, children) => (
        <Text as="h3" textStyle="h3">
          {children}
        </Text>
      ),
      [BLOCKS.PARAGRAPH]: (_, children) => {
        if (typename === "Hero")
          return (
            <Text textStyle="headline" variant="secondary">
              {children}
            </Text>
          );
        return <Text>{children}</Text>;
      },
      [BLOCKS.UL_LIST]: (_, children) => (
        <UnorderedList spacing={1} listStyleType="square" ml={6} mt={4}>
          {children}
        </UnorderedList>
      ),
      [BLOCKS.LIST_ITEM]: (_, children) => <ListItem color={accentColor}>{children}</ListItem>,
      [INLINES.EMBEDDED_ENTRY]: (node, _) => {
        // find the entry in the entryMap by ID
        const [entry, i] = entryMap.get(node.data.target.sys.id);

        // render the entries as needed
        if (entry.__typename === "Tool") {
          const { name, iconId, color, url } = entry as { name: string; iconId: IconType; color: string; url: string };

          return (
            <SlideFadeWhenVisible threshold={1} delay={(entryMap.size - i) * 0.1} style={{ display: "inline-block" }}>
              <Tag colorScheme={color} mr={2} mt={2} boxShadow="sm">
                <Link isExternal href={url}>
                  {/* @ts-ignore*/}
                  <TagLeftIcon boxSize="14px" as={SimpleIcons[iconId]} aria-label={name} />
                  <TagLabel>{name}</TagLabel>
                </Link>
              </Tag>
            </SlideFadeWhenVisible>
          );
        }
      },
      [INLINES.ASSET_HYPERLINK]: (node, _) => {
        // find the asset in the assetMap by ID
        const asset = assetMap.get(node.data.target.sys.id);
        // render the asset accordingly
        if (typename === "AboutMe")
          return <Image display="inline" w={["1rem", "1.25rem"]} src={asset.url} alt={asset.description} />;
      },
    },
    /* eslint-enable react/display-name */
  };
}
