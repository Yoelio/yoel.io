import { gql } from "graphql-request";

export default {
  landingPage: gql`
    query landingPageEntryQuery($preview: Boolean) {
      landingPage(id: "${process.env.CONTENTFUL_LANDING_PAGE_ID}", preview: $preview) {
      sys {
        id
      }
      companiesCollection(limit: 20) {
        items {
          sys {
            id
          }
          companyLogoMobile {
            url
          }
          companyLogoDesktop {
            url
          }
          experiencesCollection(limit: 20) {
            items {
              sys {
                id
              }
              location
              startDate
              endDate
              description {
                json
                links {
                  entries {
                    inline {
                      sys {
                        id
                      }
                      __typename
                      ... on Tool {
                        name
                        color
                        iconId
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      aboutMe {
        description {
          json
        }
        me {
          url
        }
      }
      seo {
        title
        description
        image {
          url(transform: {
            quality: 75
          })
        }
        url
        siteName
        keywords
        noindex
      }
    }
  }`,
};
