import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"

export default () => (
  <StaticQuery
  query={graphql `
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  }

  render={data => (
    <header>
      <div>
        <Link to={`/`}>
          <h1>
            {data.site.siteMetadata.title}
          </h1>
        </Link>
      </div>
    </header>
  )}
 />)
