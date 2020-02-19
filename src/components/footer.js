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
    <footer>
      <Link to={`/`}>
        <h3>
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <div className="disclaimer">
      </div>
    </footer>
  )}
 />)
