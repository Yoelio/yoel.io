import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import { Options } from "@contentful/rich-text-react-renderer";
import { Code, ListItem, Tag, TagLabel, TagLeftIcon, Text, UnorderedList } from "@chakra-ui/react";
import * as SimpleIcons from "react-icons/si";
import { IconType } from "react-icons/lib";

export function renderOptions(links: any, accentColor: string): Options {
  // create an entry map
  const entryMap = new Map();
  if (links)
    // loop through the inline linked entries and add them to the map
    for (const entry of links.entries.inline) {
      entryMap.set(entry.sys.id, entry);
    }

  return {
    /* eslint-disable react/display-name */
    renderMark: {
      [MARKS.CODE]: (text) => (
        <Code colorScheme="orange" fontWeight="bold" borderRadius="md">
          {text}
        </Code>
      ),
      [MARKS.BOLD]: (text) => (
        <Text as="span" fontWeight="bold">
          {text}
        </Text>
      ),
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
      [BLOCKS.PARAGRAPH]: (_, children) => <Text>{children}</Text>,
      [BLOCKS.UL_LIST]: (_, children) => (
        <UnorderedList spacing={1} listStyleType="square" ml={6} mt={4}>
          {children}
        </UnorderedList>
      ),
      [BLOCKS.LIST_ITEM]: (_, children) => <ListItem color={accentColor}>{children}</ListItem>,
      // other options...
      [INLINES.EMBEDDED_ENTRY]: (node, _) => {
        // find the entry in the entryMap by ID
        const entry = entryMap.get(node.data.target.sys.id);

        // render the entries as needed
        if (entry.__typename === "Tool") {
          const { name, iconId, color } = entry as { name: string; iconId: IconType; color: string };

          return (
            <Tag colorScheme={color} mr={2} mt={2}>
              {/* @ts-ignore*/}
              <TagLeftIcon boxSize="12px" as={SimpleIcons[iconId]} aria-label={name} />
              <TagLabel>{name}</TagLabel>
            </Tag>
          );
        }
      },
    },
    /* eslint-enable react/display-name */
  };
}