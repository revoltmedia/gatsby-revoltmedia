import React from "react"
import { Link } from "gatsby"
import Nav from "./nav"

export default ({ logoUrl, title, nav }) => (
    <header id="main-header">
      <div>
        <div>
          <div id="header-branding">
            <Link to={`/`}>
              <img src={logoUrl} alt={title} />
            </Link>
          </div>
          <nav id="header-navigation">
            <Nav
              nav={nav} 
            />
          </nav>
        </div>
      </div>
    </header>
  )