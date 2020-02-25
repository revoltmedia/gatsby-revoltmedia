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
            caseStudiesMain {
              clientName,
              linkUrl,
              description,
            }
          }
        }
        wordpress {
          carouselSlides {
            nodes {
              id
              slug
              title
              content(format: RENDERED)
              carouselContent {
                carouselImage {
                  altText
                  id
                  sourceUrl
                }
                carouselLinkUrl
                carouselLinkText
              }
            }
          }
        }
      }
      `
    }

    render={data => (
      <Layout>
        <Carousel
          slides={data.wordpress.carouselSlides.nodes}
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