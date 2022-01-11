import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

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
          <div>
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
        <h6><Link to = "./">This one</Link></h6>
        <p>You're currently looking at a website project of mine. This project started while thinking of applying for summer jobs for 2022 to get something concrete to present to possible employers. My main aim was to produce something that resembled a CV, could host an online visual portfolio, and still have room for improvement</p>
        <p>I chose a static website generator called Gatsby to begin my project and it's being hosted by Gatsby's own Gatsby Cloud service. This was started with <Link to = "">gatsby-default-starter</Link> and upgraded with various plugins. I'm constantly trying to improve my abilities concerning gatsby and I hope this website will look different when you see it the next time</p>
        </div>
        <div className="contenttext">
        <h5 style={{color:"#E9E9E6"}}>A</h5>
        <h6><Link to = "https://as.fi/">as.fi</Link></h6>
        <p>I volunteered as my university guild's Head of Communications, which also gave me the responsibility over the <Link to = "https://as.fi/">as.fi</Link> website. The Jekyll based platform taught me the basics of web development with navigating and updating html, markdown and markup files. My predecessor also taught me good practices with git based projects and working in a multi-developer environment.</p>
        </div>
      </div>
      <div className="contentbody">
        <div className="contenttext">
        <h5>Visual Creation</h5>
        <p>I've always been a visual person and my hobbies definitely reflect it. I've taken a liking especially to photography, which I've been doing for the past five years. I can consider myself proficient with Adobe's creative tool arsenal. I use Lightroom and Photoshop almost daily and have also done multiple projects on Illustrator, InDesign and Premiere Pro</p>
        <p>My visual skills have gotten me volunteering positions concerning communications in five different organisations, mostly around my studies, but also including a professional environment during my mandatory service in the Finnish military.</p>
        <p>I'm hosting my portfolio on <Link to="../portfolio">this page</Link></p>
        </div>
        <div className="contenttext">
        <StaticImage
                src="../images/IMG_0591.jpg"
                alt=""
                placeholder="blurred"
                layout="constrained"
            />
        <p style = {{textAlign:"right"}}>Riisitunturi, 2022, Canon EOS 80D, 50mm f1.8</p>
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
    <div className="content"
    data-sal="slide-up"
    data-sal-delay="300"
    data-sal-easing="ease"
    > 
      <div className="contenthead">
      <h4>Volunteering</h4>
      </div>
      <div className="contentbody">
        <div className="contenttext">
        <h5>the Guild of Automation and Systems Technology</h5>
        <h6>Head of Communications, Tutor Coordinator</h6>
        <p>The Aalto community sucked me in on my first year, when I got the position of Head of Communications. In practice the title entails producing content towards social media channels, email lists and making sure the organisation's members are up to date of what's happening in the community around them. I lead a team of likeminded students interested in photography, graphic design and other visual subjects to keep our organisation's inner and outer communication channels fresh.</p>
        <p>Now for my second year on the guild board, I'm taking on the challenging position of tutor coordinator. This consists of recruiting and organising a committee of around 80 individual tutors, who will take care of first year students coming into our guild.</p>
        </div>
        <div className="contenttext">
        <h5>The Union of Upper Secondary School Students in Finland (SLL), District of Helsinki</h5>
        <h6>Head of Communications</h6>
        <p>I produced material and managed communications channels and social media for the Helsinki district of SLL for approximately 2500 followers. Days consisted of a TON of photo editing with a professional style guide and writing event descriptions.</p>
        </div>
      </div>
      <div className="contentbody">
        <div className="contenttext">
        <StaticImage
                src="../images/leevibust.png"
                alt=""
                placeholder="blurred"
                layout="constrained"
            />
        <p style = {{textAlign:"left"}}>2021, Canon EOS 80D, 50mm f1.8</p></div>
        <div className="contenttext">
        <h5>Oulunkylä Upper Secondary School (OYK) student and alumni board</h5>
        <h6>Chairperson, Head of Communications, Head of Communications for the Alumni organisation</h6>
        <p>My days as an active in the field of student boards and organisations began in upper secondary school, where I began as one of three Heads of Communication. After updating social media for a year I wanted to take on the responsibilities of becoming a chairperson</p>
        <p>As a chairperson I led a 12 member board that looked after our students by organising events, participating in school meetings and offering opportunities such as better deals for drivers education. After graduating I produced content for the school's alumni organisation as the Head of Communications</p>
        </div>
      </div>
      <div className="content"
    data-sal="slide-up"
    data-sal-delay="300"
    data-sal-easing="ease"
    style = {{
      backgroundColor: "#301C1B",
    }}
    > 
      <div className="contentbody">
        <div className="contenttext">
        <h4 style = {{color:"#E9E9E6", textAlign:"left", paddingTop:"3rem"}}>Summary</h4>
        <p style = {{color:"#E9E9E6"}}>I'm a creative person with focuses in technology, development and engineering and I'm constantly looking for new opportunities concerning anything from visual work to engineering and development. Contact me through the form on this website, or through my social media, to which links can be found at the bottom right corner of your screen</p>
        </div>
        <div className="contenttext">
        </div>
      </div>
      <div className="contentbody">
        <div className="contenttext">
        <h5 style = {{color:"#E9E9E6"}}>IT</h5>
        <p style = {{color:"#E9E9E6"}}>Web Development</p>
        <p style = {{color:"#E9E9E6"}}>JavaScript/CSS/HTML</p>
        <p style = {{color:"#E9E9E6"}}>Python and Scala</p>
        <p style = {{color:"#E9E9E6"}}>c</p>
        <p style = {{color:"#E9E9E6"}}>All common operating systems</p>
        <p style = {{color:"#E9E9E6"}}>Producing visual and audio content</p>
        </div>
        <div className="contenttext">
        <h5 style = {{color:"#E9E9E6"}}>Language</h5>
        <p style = {{color:"#E9E9E6", marginBottom:"0"}}>Finnish</p>
        <div class="container">
        <div class="skills finnish">Fluent</div>
        </div>

        <p style = {{color:"#E9E9E6", marginBottom:"0"}}>English</p>
        <div class="container">
        <div class="skills english">Fluent</div>
        </div>

        <p style = {{color:"#E9E9E6", marginBottom:"0"}}>Swedish</p>
        <div class="container">
        <div class="skills swedish">Can hold a conversation</div>
        </div>

        <p style = {{color:"#E9E9E6", marginBottom:"0"}}>German</p>
        <div class="container">
        <div class="skills german">Just Okay</div>
        </div>
        </div>
      </div>
    </div>
    </div>
  </Layout>
)
}

export default IndexPage
