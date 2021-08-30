import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import { Options } from "@contentful/rich-text-react-renderer";
import { Code, ListItem, Tag, TagLabel, TagLeftIcon, Text, UnorderedList } from "@chakra-ui/react";
import * as SimpleIcons from "react-icons/si";
import { IconType } from "react-icons/lib";
import { SlideFadeWhenVisible } from "@yoelio/components";

export function renderOptions(links: any, accentColor: string, typename?: string): Options {
  // create an entry map
  const entryMap = new Map();
  if (links)
    // loop through the inline linked entries and add them to the map
    links.entries.inline.forEach((entry: any, i: number) => {
      entryMap.set(entry.sys.id, [entry, i]);
    });

  return {
    /* eslint-disable react/display-name */
    renderMark: {
      [MARKS.CODE]: (text) => (
        <Code colorScheme="orange" fontWeight="bold" borderRadius="md">
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
          const { name, iconId, color } = entry as { name: string; iconId: IconType; color: string };

          return (
            <SlideFadeWhenVisible delay={i * 0.1} style={{ display: "inline-block" }} offsetX={-20} offsetY={0}>
              <Tag colorScheme={color} mr={2} mt={2}>
                {/* @ts-ignore*/}
                <TagLeftIcon boxSize="12px" as={SimpleIcons[iconId]} aria-label={name} />
                <TagLabel>{name}</TagLabel>
              </Tag>
            </SlideFadeWhenVisible>
          );
        }
      },
    },
    /* eslint-enable react/display-name */
  };
}
