import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
export default ({ data }) => {
    return (
        <Layout>
            <article id="featured-case-study">
                <header>
                    <h2>{data.wordpress.caseStudies.nodes[0].title}</h2>
                </header>
                <div 
                    className="content"
                    dangerouslySetInnerHTML={{__html: data.wordpress.caseStudies.nodes[0].content}}
                />
            </article>
        </Layout>
    )
}


export const query = graphql `
    query(
        $id: Int!
    ) {
        wordpress {
            caseStudies(
                where: {id: $id}
            ) {
                nodes {
                    caseStudyId
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