/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
    domains: [
      {
        domain: "yoel.io",
        defaultLocale: "en-US",
      },
    ],
  },
  images: {
    domains: ["images.ctfassets.net"],
  },
  experimental: {
    externalDir: true,
  },
};
