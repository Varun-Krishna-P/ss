import type { GatsbyConfig } from "gatsby";

interface SitePage {
  path: string;
}

interface AllSitePage {
  nodes: SitePage[];
}

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Vedavid`,
    siteUrl: `https://vedavid.netlify.app/`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-netlify-cms",
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `catalog`,
        path: `${__dirname}/src/data/catalog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `app_config`,
        path: `${__dirname}/src/data/app_config`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contact`,
        path: `${__dirname}/src/data/contact`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `payment`,
        path: `${__dirname}/src/data/payment`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `guru paduka`,
        short_name: `guru paduka`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/icon.png`, // <- your favicon here
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,

      options: {
        output: `/sitemap.xml`,
        excludes: [`/admin/*`, `/dev-404-page`, `/404`, `/404.html`],
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
        }`,
        resolveSiteUrl: () => "https://vedavid.netlify.app",
        resolvePages: ({ allSitePage }: { allSitePage: AllSitePage }) => {
          return allSitePage.nodes.map((page) => {
            return { path: page.path };
          });
        },
        serialize: ({ path }: SitePage) => {
          return {
            url: path,
            changefreq: `daily`,
            priority: 0.7,
          };
        },
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        policy: [{ userAgent: "*", allow: "/" }],
        sitemap: "https://vedavid.netlify.app/sitemap.xml",
        host: "https://vedavid.netlify.app",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `yoga`,
        path: `${__dirname}/src/data/yoga`,
     }
    }
  ],
};

export default config;
