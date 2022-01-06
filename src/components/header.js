import PropTypes from "prop-types"
import React,{useEffect} from 'react';
import './header.css';
import './layout.css';
import { Link } from "gatsby"
import Typing, { Backspace } from "react-typing-animation"

const Header = ({ siteTitle }) => {
  
const [scrolled,setScrolled]=React.useState(false);

const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 200 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })
  let headerClasses=['header'];
  if(scrolled){
    headerClasses.push('scrolled');
  }

  Header.propTypes = {
    siteTitle: PropTypes.string,
  }
  
  Header.defaultProps = {
    siteTitle: ``,
  }

  return (      
  
  <header className={headerClasses.join(" ")}>

    <div className="logo">
      { <Typing>
          <h1>
            &gt; Hormis
            <Backspace count={6} delay={750} />
            <Link to = "../">Leevi Hormaluoma_</Link>
          </h1>
        </Typing> }
    </div>
    <nav className="navigation">
      {<h1><Link to = "../">CV</Link></h1>}
    </nav>

    <nav className="navigation">
      {<h1><Link to = "../404/">Portfolio</Link></h1>}
    </nav>

    <nav className="navigation">
      {<h1><Link to = "../page-2/">Contact me</Link></h1>}
    </nav>

  </header>
)
}

export default Header
