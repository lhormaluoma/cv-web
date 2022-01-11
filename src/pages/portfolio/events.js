import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"

const Events = () => (
  <Layout>
    <div className="portfolioimg">
    <StaticImage
        layout="constrained"
        alt=""
        src="../../images/IMG_8934.jpg"
        quality={[95]}
        formats={["auto", "webp", "avif"]}
      />
      </div>
      <div className="portfoliotext">
          <p style={{marginBottom:"0.1rem", color:"#E9E9E6"}}>Otaniemi 2021, Canon EOS 80D, 42mm f4.5</p>
      </div>
    <div className="portfolioimg">
    <StaticImage
        layout="constrained"
        alt=""
        src="../../images/IMG_5690.jpg"
        quality={[95]}
        formats={["auto", "webp", "avif"]}
      />
      </div>
      <div className="portfoliotext">
          <p style={{marginBottom:"0.1rem", color:"#E9E9E6"}}>Otaniemi 2021, Canon EOS 80D, 50mm f1.8</p>
      </div>
  </Layout>
)

export default Events