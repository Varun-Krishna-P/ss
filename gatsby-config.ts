import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `ss`,
    siteUrl: `https://www.yourdomain.tld`
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
  ]
};

export default config;
