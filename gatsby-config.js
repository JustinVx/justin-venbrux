module.exports = {
  siteMetadata: {
    title: `Justin Venbrux`,
    description: `My name is Justin Venbrux. I am Product Designer who likes to create cool things that help people.`,
    author: `Justin Venbrux`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Justin Venbrux`,
        short_name: `Justin`,
        start_url: `/`,
        background_color: `#ff7676`,
        theme_color: `#ff7676`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/img/`,
      },
    },
    {
      resolve: `gatsby-plugin-panelbear`,
      options: {
        siteID: 'Ltp5EpzWVYr',
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