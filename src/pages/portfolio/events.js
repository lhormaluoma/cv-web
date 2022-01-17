import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import Layout from "../../components/layout"

const Events = () => (
  <Layout>
        <div className="portfolio">
    <div className="portfoliolayout">
    <div className="portfolioimg">
        <Zoom><StaticImage
        layout="constrained"
        alt=""
        src="../../images/IMG_5690.jpg"
        quality={[95]}
        formats={["auto", "webp", "avif"]}
      /></Zoom>
      </div>
      <div className="portfolioimg">
        
      </div>
    </div>
    <div className="portfoliolayout">
    <div className="portfolioimg">
    <Zoom><StaticImage
        layout="constrained"
        alt=""
        src="../../images/IMG_8934.jpg"
        quality={[95]}
        formats={["auto", "webp", "avif"]}
      /></Zoom>
      </div>
    <div className="portfolioimg">

      </div>
    </div>
    </div>
  </Layout>
)

export default Events