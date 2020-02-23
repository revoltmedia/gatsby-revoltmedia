import React from "react"
import { Link } from "gatsby"
import Nav from "./nav"

export default ({ title, logoUrl, nav }) => (
  <footer id="main-footer">
    <div>
      <div>
        <div id="footer-branding">
          <Link to={`/`}>
            <img src={logoUrl} alt={title} />
          </Link>
        </div>
        <nav id="footer-navigation">
          <Nav
            nav={nav}
          />
        </nav>
      </div>
    </div>
  </footer>
)