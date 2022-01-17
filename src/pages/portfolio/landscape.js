import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import Layout from "../../components/layout"

const Landscape = () => {

  return (
  <Layout>
    <div className="portfolio">
    <div className="portfoliolayout">
    <div className="portfolioimg">
      <Zoom>
        <StaticImage
        layout="constrained"
        alt=""
        src="../../images/IMG_5106.jpg"
        quality={[95]}
        formats={["auto", "webp", "avif"]}
      /></Zoom>
      </div>
      <div className="portfolioimg">
      <Zoom>
        <StaticImage
        layout="constrained"
        alt=""
        src="../../images/IMG_1388-2.jpg"
        quality={[95]}
        formats={["auto", "webp", "avif"]}
      /></Zoom>
      </div>
      <div className="portfolioimg">
        <Zoom>
        <StaticImage
        layout="constrained"
        alt=""
        src="../../images/IMG_2125-2.jpg"
        quality={[95]}
        formats={["auto", "webp", "avif"]}
      /></Zoom>
      </div>
    </div>
    <div className="portfoliolayout">
    <div className="portfolioimg">
    <Zoom>
    <StaticImage
        layout="constrained"
        alt=""
        src="../../images/IMG_0591.jpg"
        quality={[95]}
        formats={["auto", "webp", "avif"]}
      /></Zoom>
      </div>
    <div className="portfolioimg">
    <Zoom>
        <StaticImage
        layout="constrained"
        alt=""
        src="../../images/IMG_0430.jpg"
        quality={[95]}
        formats={["auto", "webp", "avif"]}
      /></Zoom>
      </div>
    <div className="portfolioimg">
    <Zoom>
      <StaticImage
        layout="constrained"
        alt=""
        src="../../images/IMG_0780.jpg"
        quality={[95]}
        formats={["auto", "webp", "avif"]}
      /></Zoom>
    </div>
    </div>
    </div>
  </Layout>
  )
}

export default Landscape