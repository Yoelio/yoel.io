import { gql } from "graphql-request";

export default {
  landingPage: gql`
    query landingPageEntryQuery($preview: Boolean) {
      landingPage(id: "${process.env.CONTENTFUL_LANDING_PAGE_ID}", preview: $preview) {
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
        aboutMe {
          description {
            json
          }
          me {
            url
          }
        }
      }
    }
  `,
};
