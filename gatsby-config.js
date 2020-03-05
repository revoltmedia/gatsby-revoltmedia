/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    logoUrl: `/assets/images/revoltmedia-white.svg`,
  },
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Wordpress",
        fieldName: "wordpress",
        url: process.env.WORDPRESS_HOST + process.env.WORDPRESS_GRAPHQL_PATH,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8,
      },
    },
  ],
}