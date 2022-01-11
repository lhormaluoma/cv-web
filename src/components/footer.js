import PropTypes from "prop-types"
import React from 'react';
import './footer.css';
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Footer = ({ siteTitle }) => {
  
  Footer.propTypes = {
    siteTitle: PropTypes.string,
  }
  
  Footer.defaultProps = {
    siteTitle: ``,
  }

  return (      
    <footer className="footer">
        <socials className="socials">
            <Link to = "https://github.com/lhormaluoma/cv-web" target="_blank">
            <StaticImage
                src="../images/githubicon.png"
                alt=""
                placeholder="blurred"
                layout="fixed"
                width={25}
            />
            </Link>
        </socials>
        <socials className="socials">
            <Link to = "https://www.linkedin.com/in/leevi-hormaluoma-85095019b/" target="_blank">
            <StaticImage
                src="../images/linkedinicon.png"
                alt=""
                placeholder="blurred"
                layout="fixed"
                width={25}
            />
            </Link>
        </socials>
        <socials className="socials">
            <Link to = "https://t.me/leevihormaluoma" target="_blank">
            <StaticImage
                src="../images/telegramicon.png"
                alt=""
                placeholder="blurred"
                layout="fixed"
                width={25}
            />
            </Link>
        </socials>
        <socials className="socials">
            <Link to = "https://www.instagram.com/leevihormaluoma/" target="_blank">
            <StaticImage
                src="../images/instagramicon.png"
                alt=""
                placeholder="blurred"
                layout="fixed"
                width={25}
            />
            </Link>
        </socials>
    </footer>
)
}

export default Footer