const path = require("path")
const caseStudyTemplate = path.resolve(`./src/templates/case-study.js`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
  {
    wordpress {
      caseStudies {
          edges{
            node {
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
  }
  `).then(result => {
    result.data.wordpress.caseStudies.edges.forEach(({ node }) => {
        createPage({
          path: `/case-study/${node.slug}`,
          component: caseStudyTemplate,
          context: {
            id: node.caseStudyId
          },
        })
      })
  })
}