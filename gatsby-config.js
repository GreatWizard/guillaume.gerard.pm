module.exports = {
  siteMetadata: {
    title: `guillaume.sh`,
    author: `Guillaume Gérard`,
    description: `Guillaume Gérard's personnal blog.`,
    siteUrl: `https://guillaume.sh/`,
    keywords: [
      `blog`,
      `engineering`,
      `javascript`,
      `guillaume gerard`,
      `guillaume gérard`,
      `guillaume.sh`,
      `greatwizard`
    ],
    social: {
      github: `GreatWizard`,
      gitlab: `GreatWizard`,
      twitter: `ggerard88`,
      linkedin: `guillaume-gérard-0263b946`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/talks`,
        name: `talks`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-code-titles`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-external-links`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-reading-time`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Guillaume Gérard's personnal blog`,
        short_name: `Guillaume Gérard blog`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ff7f50`,
        display: `minimal-ui`,
        icon: `content/assets/hamburger.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-favicon`,
      options: { logo: "./static/favicon.png" },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
  ],
}
