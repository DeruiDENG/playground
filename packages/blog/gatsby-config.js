module.exports = {
  siteMetadata: {
    title: `Moonface's wonderland`,
    author: {
      name: `Derui Deng`,
      summary: `A developer who lives and works in Xi'an.`,
    },
    description: `Moonface's personal blog`,
    siteUrl: `https://blog.deeerui.com/`,
    social: {
      twitter: `moonfaceddr`,
      github: `https://github.com/DeruiDENG`,
    },
    blogList: {
      pagination: 10,
      excerptLength: 150,
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
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-164325708-1`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({
              query: { site, allMarkdownRemark, allWordpressPost },
            }) => {
              const markdownNodes = allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.description,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                });
              });

              const wpNodes = allWordpressPost.edges.map(edge => {
                return {
                  description: edge.node.excerpt,
                  date: edge.node.date,
                  url: site.siteMetadata.siteUrl + edge.node.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.slug,
                  custom_elements: [{ 'content:encoded': edge.node.content }],
                };
              });

              return [...markdownNodes, ...wpNodes];
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                        description
                      }
                    }
                  }
                }
                allWordpressPost(sort: {order: DESC, fields: date}) {
                  edges {
                    node {
                      date
                      excerpt
                      title
                      slug
                      content
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "Moonface's Wonderland RSS Feed",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            // match: '^/blog/',
            // optional configuration to specify external rss feed, such as feedburner
            // link: 'https://feeds.feedburner.com/gatsby/blog',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Moonface的异想世界`,
        short_name: `Moonface's wonderland`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `content/assets/app-icon.jpg`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typescript`,
      options: {},
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        /*
         * The base URL of the WordPress site without the trailingslash and the protocol. This is required.
         * Example : 'dev-gatbsyjswp.pantheonsite.io' or 'www.example-site.com'
         */
        baseUrl: `moonfaceddr.wordpress.com`,
        protocol: `https`,
        hostingWPCOM: true,
        useACF: false,
        includedRoutes: ['**/posts'],
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
};
