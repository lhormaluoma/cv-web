import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {

  
  return (
  <Layout>
    <Seo title="Home" />
    <div style={{ display: "grid" }}>
      <StaticImage
        style={{
          gridArea: "1/1",
        }}
        layout="fullWidth"
        alt=""
        src="../images/bannerphoto.png"
        quality={[95]}
        formats={["auto", "webp", "avif"]}
      />
      <div
        style={{
          gridArea: "1/1",
          position: "relative",
          placeItems: "left",
          display: "grid",
        }}
      >
        <div className = "imgtext">
          <div
          style={{
            marginTop: '25%'
          }}>
            <h2>Who? What? Where?</h2>
            <h3>Hey! Welcome! I'm Leevi, an Information Technology student from Aalto University. My passions include, but aren't limited to: Visual creation, Audio and Music, Coding and general technology</h3>
            <h3>You want more? Well that's what the website is for, keep on scrolling!</h3>
          </div>
        </div>
      </div>
    </div>
    <div className="content"
    data-sal="slide-up"
    data-sal-delay="300"
    data-sal-easing="ease"
    >
      <div className="contenthead">
      <h4>What do I know?</h4>
      </div>
      <div className="contentbody">
        <div className="contenttext">
        <h5>Websites</h5>
        <h6>Journalist</h6>
        <p>I completed my military service as a Journalist at the official newspaper of the Finnish Defence Forces (Ruotuväki). My job comprised of writing articles centered around defence and security issues. In addition to my role as a journalist I did photography and acted as the superior to our team of conscripts.</p>
        <p>The channels I produced content for were: a print newspaper that appears 22 times per year, news for our website and content for our social media platforms with a combined following of close to 15,000. I mostly focused on the equipment and training of the Defence Forces as well as entertainment topics with the highlight being my production around the HX fighter programme.</p>
        </div>
        <div className="contenttext">
        <h5>Reila Oy</h5>
        <h6>Salesperson/Security Guard (Seifi)</h6>
        <p>I grabbed the opportunity to tackle the most hectic starting level job in retail by going to work as a Seifi in one of the busiest parts of Helsinki. A Seifi is responsible with guarding and securing a grocery store, while also working as a regular part of staff. The biggest aims while working was producing a safe customer experience and a comfortable shopping environment</p>
        <p>Before beginning working in a store, I completed the necessary course and I am still permitted to work as a security guard in Finland</p>
        </div>
      </div>
    </div>
    <div className="content"
    data-sal="slide-up"
    data-sal-delay="300"
    data-sal-easing="ease"
    style = {{
      backgroundColor: "#1C291C",
    }}
    > 
      <div className="contenthead" style={{backgroundColor:"#1C291C"}}>
      <h4 style = {{color:"#E9E9E6"}}>Work experience</h4>
      </div>
      <div className="contentbody">
        <div className="contenttext">
        <h5 style = {{color:"#E9E9E6"}}>Ruotuväki</h5>
        <h6 style = {{color:"#E9E9E6"}}>Journalist</h6>
        <p style = {{color:"#E9E9E6"}}>I completed my military service as a Journalist at the official newspaper of the Finnish Defence Forces (Ruotuväki). My job comprised of writing articles centered around defence and security issues. In addition to my role as a journalist I did photography and acted as the superior to our team of conscripts.</p>
        <p style = {{color:"#E9E9E6"}}>The channels I produced content for were: a print newspaper that appears 22 times per year, news for our website and content for our social media platforms with a combined following of close to 15,000. I mostly focused on the equipment and training of the Defence Forces as well as entertainment topics with the highlight being my production around the HX fighter programme.</p>
        </div>
        <div className="contenttext">
        <h5 
        style = {{color:"#E9E9E6"}}>Reila Oy</h5>
        <h6 style = {{color:"#E9E9E6"}}>Salesperson/Security Guard (Seifi)</h6>
        <p style = {{color:"#E9E9E6"}}>I grabbed the opportunity to tackle the most hectic starting level job in retail by going to work as a Seifi in one of the busiest parts of Helsinki. A Seifi is responsible with guarding and securing a grocery store, while also working as a regular part of staff. The biggest aims while working was producing a safe customer experience and a comfortable shopping environment</p>
        <p style = {{color:"#E9E9E6"}}>Before beginning working in a store, I completed the necessary course and I am still permitted to work as a security guard in Finland</p>
        </div>
      </div>
    </div>
  </Layout>
)
}

export default IndexPage
