module.exports = {
  siteMetadata: {
    title: `Justin Venbrux`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/img/`,
      },
    },
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
        extensions: [`.mdx`, `.md`],
        remarkPlugins: [require('remark-unwrap-images')],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 970,
              backgroundColor: "none",
              tracedSVG: true,
              linkImagesToOriginal: false,
              showCaptions: ['title'],
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`],
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
    `gatsby-plugin-netlify-cms`,
  ],
}