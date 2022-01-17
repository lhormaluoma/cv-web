module.exports = {
  siteMetadata: {
    title: `> Leevi Hormaluoma`,
    description: `Hey! You've landed on my personal website. Here you can find my CV, contact details and a photo portfolio.`,
    author: `@gatsbyjs`,
    siteUrl: `https://www.leevihormaluoma.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/l_icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
      threshold: 0.1, // Percentage of an element's area that needs to be visible to launch animation
      once: true, // Defines if animation needs to be launched once
      }
    },
    `gatsby-plugin-anchor-links`,
    'react-typing-animation',
    'gatsby-background-image',
    'react-medium-image-zoom',
    {
    resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto\:300,400,400i,700`,
          'Montserrat\:300,400,400i,500,700',
          'Roboto Mono'
        ],
        display: 'swap'
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
