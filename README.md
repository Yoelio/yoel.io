# yoel.io

## Overview

A monorepo containing the source code for the `yoel.io` web app and custom Chakra UI components.

- The Next.js web app can be found in `apps/yoelio`
- The custom Chakra UI components can be found in `packages/components`

## Setup

The `yoel.io` web app consumes data from a headless CMS called [Contentful](https://www.contentful.com/developers/docs/). Without a Contentful Delivery API and a Preview API token, this project cannot be built. I've provided [a content model export JSON](https://github.com/Yoelio/yoel.io/blob/main/apps/yoelio/contentful_yoelio_content_model.json) that can be imported into your own Contentful space with the [Contentful CLI](https://www.contentful.com/developers/docs/tutorials/cli/import-and-export/). A successful import should leave you with a content model like this:
![Contentful content model](https://imgur.com/PXv4HKx.png)


Begin by adding an entry of the `Landing Page` content type.

<img src="https://imgur.com/TqlLtgL.png" alt="Example landing page entry" width="50%"/>

### Environment variables

Include these environment variables in a `.env.local` file in `apps/yoelio`.

```
CONTENTFUL_SPACE_ID=??? // Can be found in Contentful settings
CONTENTFUL_LANDING_PAGE_ID=??? // The entry ID of the landing page content.
CONTENTFUL_ACCESS_TOKEN=??? // Used in production
CONTENTFUL_PREVIEW_ACCESS_TOKEN=??? // Used in development
```

Learn more about Next.js [environment variables here](https://nextjs.org/docs/basic-features/environment-variables).

Install yarn globally:

```bash
npm install -g yarn
```

In project root, install dependencies:

```bash
yarn
```

## Development

To run the web app in development mode, execute the following in project root and go to http://localhost:3000 on your preferred browser:

```bash
yarn dev:yoel.io
```

## Production

To generate a production build, execute the following in project root:

```bash
yarn build:yoel.io
```

Run the production build with:

```bash
yarn start:yoel.io
```

## Further reading
Chakra UI: https://chakra-ui.com/docs/getting-started
GraphQL: https://graphql.org/learn/
Contentful concepts: https://www.contentful.com/developers/docs/concepts/
