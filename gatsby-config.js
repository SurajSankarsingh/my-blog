require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `Suraj Sankarsingh's Blog`,
    description: `This is the personal blog website for Suraj Sankarsingh`,
    author: `@suraj_dev_tt`,
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
    // {
    //   resolve: "gatsby-source-strapi",
    //   options: {
    //     apiURL: process.env.API_URL || "http://localhost:1337",
    //     contentTypes: ["article", "category", "writer"],
    //     singleTypes: [`homepage`, `global`],
    //     queryLimit: 1000,
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("tailwindcss")("./tailwind.config.js")],
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
