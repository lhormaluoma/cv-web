import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"

const People = () => (
  <Layout>
    <div className="portfolioimg">
    <StaticImage
        layout="constrained"
        alt=""
        src="../../images/IMG_1260.jpg"
        quality={[95]}
        formats={["auto", "webp", "avif"]}
      />
      </div>
      <div className="portfoliotext">
          <p style={{marginBottom:"0.1rem", color:"#E9E9E6"}}>Roihuvuori 2021, Canon EOS 80D, 50mm f1.8</p>
      </div>
      <div className="portfolioimg">
    <StaticImage
        layout="constrained"
        alt=""
        src="../../images/IMG_0623.jpg"
        quality={[95]}
        formats={["auto", "webp", "avif"]}
      />
      </div>
      <div className="portfoliotext">
          <p style={{marginBottom:"0.1rem", color:"#E9E9E6"}}>Riisitunturi 2022, Canon EOS 80D, 50mm f1.8</p>
      </div>
      <div className="portfolioimg">
    <StaticImage
        layout="constrained"
        alt=""
        src="../../images/IMG_5861.jpg"
        quality={[95]}
        formats={["auto", "webp", "avif"]}
      />
      </div>
      <div className="portfoliotext">
          <p style={{marginBottom:"0.1rem", color:"#E9E9E6"}}>Jätkäsaari 2021, Canon EOS 80D, 50mm f1.8</p>
      </div>
  </Layout>
)

export default People