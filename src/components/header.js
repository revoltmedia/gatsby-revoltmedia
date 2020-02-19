import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"

export default () => (
  <StaticQuery
  query={graphql `
      query {
        site {
          siteMetadata {
            title,
            logoUrl
          }
        }
      }
    `
  }

  render={data => (
    <header>
      <div>
        <Link to={`/`}>
          <img src={data.site.siteMetadata.logoUrl} alt={data.site.siteMetadata.title} />
          <h1>
            {data.site.siteMetadata.title}
          </h1>
        </Link>
      </div>
    </header>
  )}
 />)
