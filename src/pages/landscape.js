import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

const Landscape = () => (
  <Layout>
    <StaticImage
        layout="constrained"
        alt=""
        src="../images/IMG_0591.jpg"
        quality={[95]}
        formats={["auto", "webp", "avif"]}
      />
  </Layout>
)

export default Landscape