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
            logoUrl
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
          caseStudies {
            nodes {
              id
              slug
              title
              content(format: RENDERED)
              caseStudyContent {
                caseStudyFeatured
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
          caseStudies={data.wordpress.caseStudies.nodes}
        />
        <div>
            Hello
        </div>
      </Layout>
    )}

    />
  )
}