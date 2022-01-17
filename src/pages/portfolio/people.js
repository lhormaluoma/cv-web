import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import Layout from "../../components/layout"

const People = () => (
  <Layout>
    <div className="portfolio">
    <div className="portfoliolayout">
    <div className="portfolioimg">
        <Zoom><StaticImage
        layout="full-width"
        alt=""
        src="../../images/IMG_1260.jpg"
        quality={[95]}
        formats={["auto", "webp", "avif"]}
      /></Zoom>
      </div>
      <div className="portfolioimg">
        <Zoom><StaticImage
        layout="full-width"
        alt=""
        src="../../images/IMG_5861.jpg"
        quality={[95]}
        formats={["auto", "webp", "avif"]}
      /></Zoom>
      </div>
      <div className="portfolioimg">
        <Zoom><StaticImage
        layout="full-width"
        alt=""
        src="../../images/IMG_0623.jpg"
        quality={[95]}
        formats={["auto", "webp", "avif"]}
      /></Zoom>
      </div>
    </div>
    <div className="portfoliolayout">
    <div className="portfolioimg">
    <Zoom><StaticImage
        layout="full-width"
        alt=""
        src="../../images/2864_.jpg"
        quality={[95]}
        formats={["auto", "webp", "avif"]}
      /></Zoom>
      </div>
      <div className="portfolioimg">
    <Zoom><StaticImage
        layout="full-width"
        alt=""
        src="../../images/1023_.jpg"
        quality={[95]}
        formats={["auto", "webp", "avif"]}
      /></Zoom>
      </div>
      <div className="portfolioimg">
        <Zoom><StaticImage
        layout="full-width"
        alt=""
        src="../../images/IMG_9663.jpg"
        quality={[95]}
        formats={["auto", "webp", "avif"]}
      /></Zoom>
      </div>
    </div>
    </div>
  </Layout>
)

export default People