import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

const Portfolio = () => { 
    
return(
  <Layout>
    <div className="content"> 
      <div className="contenthead">
      </div>
      <div className="contentbody">
        <div className="contenttext">
        <div style={{ display: "grid"}}>
    <Link to = "../portfolio/landscape"><StaticImage
        layout="constrained"
        alt=""
        src="../images/landscape.png"
        quality={[95]}
        formats={["auto", "webp", "avif"]}
      /> </Link>
    </div>
    </div>
    <div className="contenttext">
        <div style={{ display: "grid"}}>
    <Link to = "../portfolio/people"><StaticImage
        layout="constrained"
        alt=""
        src="../images/people.png"
        quality={[95]}
        formats={["auto", "webp", "avif"]}
      /> </Link>
    </div>
    </div>
    </div>
    </div>
    <div className="content"> 
      <div className="contenthead">
      </div>
      <div className="contentbody">
        <div className="contenttext">
        <div style={{ display: "grid"}}>
    <Link to = "../portfolio/events"><StaticImage
        layout="constrained"
        alt=""
        src="../images/events.png"
        quality={[95]}
        formats={["auto", "webp", "avif"]}
      /> </Link>
    </div>
    </div>
    </div>
    </div>
  </Layout>
)
}

export default Portfolio