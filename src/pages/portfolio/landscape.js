import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"

const Landscape = () => (
  <Layout>
    <div className="portfolioimg">
    <StaticImage
        layout="constrained"
        alt=""
        src="../../images/IMG_0591.jpg"
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
        src="../../images/IMG_0430.jpg"
        quality={[95]}
        formats={["auto", "webp", "avif"]}
      />
      </div>
      <div className="portfoliotext">
          <p style={{marginBottom:"0.1rem", color:"#E9E9E6"}}>Ruka 2022, Canon EOS 80D, 50mm f1.8</p>
      </div>
      <div className="portfolioimg">
        <StaticImage
        layout="constrained"
        alt=""
        src="../../images/IMG_5106.jpg"
        quality={[95]}
        formats={["auto", "webp", "avif"]}
      />
      </div>
      <div className="portfoliotext">
          <p style={{marginBottom:"0.1rem", color:"#E9E9E6"}}>Arboretum 2020, Canon EOS 80D, 50mm f1.8</p>
      </div>
      <div className="portfolioimg">
        <StaticImage
        layout="constrained"
        alt=""
        src="../../images/IMG_1388-2.jpg"
        quality={[95]}
        formats={["auto", "webp", "avif"]}
      />
      </div>
      <div className="portfoliotext">
          <p style={{marginBottom:"0.1rem", color:"#E9E9E6"}}>Arboretum 2020, Canon EOS 80D, 50mm f1.8</p>
      </div>
      <div className="portfolioimg">
        <StaticImage
        layout="constrained"
        alt=""
        src="../../images/IMG_2125-2.jpg"
        quality={[95]}
        formats={["auto", "webp", "avif"]}
      />
      </div>
      <div className="portfoliotext">
          <p style={{marginBottom:"0.1rem", color:"#E9E9E6"}}>Pyhäjärvi 2020, Canon EOS 80D, 18mm f3.5</p>
      </div>
  </Layout>
)

export default Landscape