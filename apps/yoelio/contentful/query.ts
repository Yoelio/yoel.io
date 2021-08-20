import { gql } from "graphql-request";

export default {
  query: gql`
    query landingPageEntryQuery {
      landingPage(id: ${process.env.CONTENTFUL_LANDING_PAGE_ID}) {
        sys {
          id
        }
        companiesCollection {
          items {
            companyLogoMobile {
              url
            }
            companyLogoDesktop {
              url
            }
            experiencesCollection {
              items {
                location
                startDate
                endDate
                description {
                  json
                }
              }
            }
          }
        }
      }
    }
  `,
};
