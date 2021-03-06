import { gql } from "graphql-request";

export default {
  landingPage: gql`
    query landingPageEntryQuery($preview: Boolean) {
      landingPage(id: "${process.env.CONTENTFUL_LANDING_PAGE_ID}", preview: $preview) {
      hero {
        __typename
        headline {
          json
        }
        location
        educationCollection {
          items {
            sys {
              id
            }
            degree
            university
          }
        }
        linksCollection {
          items {
            sys {
              id
            }
            type
            url
          }
        }
      }
      companiesCollection(limit: 20) {
        items {
          sys {
            id
          }
          name
          companyLogoMobile {
            url
            description
          }
          companyLogoDesktop {
            url
            description
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
                        url
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
        __typename
        description {
          json
          links {
            assets {
              hyperlink {
                sys {
                  id
                }
                url
                description
              }
            }
          }
        }
        me {
          url(transform: {
            width: 320
          })
          description
        }
      }
      seo {
        title
        description
        image {
          url(transform: {
            width: 320
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
