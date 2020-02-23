import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Carousel from "../components/carousel"
import CaseStudies from "../components/case-studies"

export default ({ data }) => {
  return (
    <StaticQuery
    query={graphql `
      query {
        site {
          siteMetadata {
            logoUrl,
            slidesMain {
              title,
              link,
              description,
              iconUrl,
            }
            caseStudiesMain {
              clientName,
              linkUrl,
              description,
            }
          }
        }
      }
      `
    }

    render={data => (
      <Layout>
        <Carousel
          slides={data.site.siteMetadata.slidesMain}
        />
        <CaseStudies
          caseStudies={data.site.siteMetadata.caseStudiesMain}
        />
        <div>
            Hello
        </div>
      </Layout>
    )}

    />
  )
}