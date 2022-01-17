import PropTypes from "prop-types"
import React from 'react';
import './header.css';
import './layout.css';
import { Link } from "gatsby"
import Typing, { Backspace } from "react-typing-animation"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => {
  
  Header.propTypes = {
    siteTitle: PropTypes.string,
  }
  
  Header.defaultProps = {
    siteTitle: ``,
  }

  return (      
  <header className="header">
  <nav className="nav">
    <div className="logo">
      <div style={{paddingRight:"1rem", flex:"1"}}>
      
      <Link to = "/"><StaticImage
        layout="constrained"
        alt=""
        src="../images/loh.png"
        quality={[95]}
        width={24}
        formats={["auto", "webp", "avif"]}
      /></Link>
      </div>
      <div style={{flex:"15"}}>
      { <Typing>
          <h1>
            HORMIS
            <Backspace count={6} delay={750} />
            <Link to = "/">LEEVI HORMALUOMA</Link>
          </h1>
        </Typing> }
      </div>
    </div>
    <div className="navelements">
    <div className="navigation" style = {{flex:"0.8"}}>
      {<h1><Link to = "/" activeClassName="active">CV</Link></h1>}
    </div>

    <div className="navigation">
      {<h1><Link to = "/portfolio/" activeClassName="active">Photos</Link></h1>}
    </div>

    <div className="navigation" style = {{flex:"1.5"}}>
      {<h1><Link to = "/contact/" activeClassName="active">Contact me</Link></h1>}
    </div>
    </div>
  </nav>
  </header>
)
}

export default Header
