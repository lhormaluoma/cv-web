import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

const People = () => (
  <Layout>
    <div className="portfolioimg">
    <StaticImage
        layout="constrained"
        alt=""
        src="../images/IMG_0591.jpg"
        quality={[95]}
        formats={["auto", "webp", "avif"]}
      />
      </div>
      <div className="portfoliotext">
          <p style={{marginBottom:"0.1rem", color:"#E9E9E6"}}>Canon EOS 80D</p>
      </div>
  </Layout>
)

export default People