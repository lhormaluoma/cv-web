import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h2>Moikka!</h2>
    <div class="containerimg">
    <StaticImage
    src="../images/bannerphoto.png"
    layout="full-width"
    quality={95}
    formats={["auto", "webp", "avif"]}
    alt="It's me!"
    style={{ marginBottom: `1.45rem` }}/>
    </div>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p>
    <p>...</p>
    <p>...</p>
    <p>...</p>
    <a href="/#team" title="Our team"><span>Team</span></a>
  </Layout>
)

export default IndexPage
