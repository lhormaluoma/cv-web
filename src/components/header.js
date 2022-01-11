import PropTypes from "prop-types"
import React from 'react';
import './header.css';
import './layout.css';
import { Link } from "gatsby"
import Typing, { Backspace } from "react-typing-animation"

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
      { <Typing>
          <h1>
            HORMIS
            <Backspace count={6} delay={750} />
            <Link to = "../">LEEVI HORMALUOMA</Link>
          </h1>
        </Typing> }
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
