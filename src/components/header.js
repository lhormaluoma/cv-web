import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Header = ({ siteTitle }) => (
  <section class="wrap-header" >
  <div class = "socials">
    <p>
      <Link to="https://www.twitter.com">
        Twitter
      </Link>
    </p>
  </div>
  <div class="header">
  <div class="headertext"
  
  >
    <h1>
      <Link to="/">
        {siteTitle}
      </Link>
    </h1>
  </div>
  <div class="navbox"

  >
  <div class="nav">
    <h1>
      <Link to="/">
        CV
      </Link>
    </h1>
    </div>
    <div class="nav">
    <h1>
      <Link to="/">
        Portfolio
      </Link>
    </h1>
    </div>
    <div class="nav">
      <h1>
        <AnchorLink to="/#team" title="Our team">
          <span>Team</span>
        </AnchorLink>
      </h1>
    </div>
  </div>
  </div>
</section>
) 

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
