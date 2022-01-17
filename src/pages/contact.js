import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <form method="post" action="https://getform.io/f/65e228bd-d98d-4e15-8f1c-c8e264cd79a4">
    <div style = {{paddingTop:"2rem"}}>
      <h6 style={{textAlign:"center", fontWeight:"500"}}>Here you can contact me!</h6>
      <h6 style={{textAlign:"center", fontWeight:"500"}}>You can always also email me at l.hormaluoma@gmail.com and I also read my social media linked in the footer.</h6>
    </div>
    <div className = "forms">
      <label>
        Name
        <input type="text" name="name" id="name"/>
      </label>
      <label>
        Email
        <input type="email" name="email" id="email" />
      </label>
      <label>
        Subject
        <input type="text" name="subject" id="subject" />
      </label>
      <label>
        Message
        <textarea name="message" id="message" rows="5" />
      </label>
      <button type="submit">Send</button>
      </div>
    </form>
    <div style = {{paddingTop:"2rem"}}>
      <body style={{textAlign:"center"}}>The form works with Getform.io</body>
      <body style={{textAlign:"center"}}>I'll read these ASAP!</body>
    </div>
  </Layout>
)

export default SecondPage
