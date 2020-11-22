module.exports = {
  siteMetadata: {
    title: `Justin Venbrux`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 970,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sharp`, 
    {
      resolve: `gatsby-transformer-sharp`
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}