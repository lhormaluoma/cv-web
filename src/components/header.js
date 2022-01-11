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
      <div style={{paddingRight:"1rem"}}>
      <Link to = "../"><StaticImage
        layout="constrained"
        alt=""
        src="../images/loh.png"
        quality={[95]}
        width={25}
        formats={["auto", "webp", "avif"]}
      /></Link>
      </div>
      <div>
      { <Typing>
          <h1>
            HORMIS
            <Backspace count={6} delay={750} />
            <Link to = "../">LEEVI HORMALUOMA</Link>
          </h1>
        </Typing> }
      </div>
    </div>

    <div className="navigation">
      {<h1><Link to = "../" activeClassName="active">CV</Link></h1>}
    </div>

    <div className="navigation">
      {<h1><Link to = "../portfolio/" activeClassName="active">Portfolio</Link></h1>}
    </div>

    <div className="navigation">
      {<h1><Link to = "../page-2/" activeClassName="active">Contact me</Link></h1>}
    </div>
  </nav>
  </header>
)
}

export default Header
