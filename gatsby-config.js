module.exports = {
  siteMetadata: {
    title: "Epic Design Labs",
    titleTemplate: "%s | Epic Design Labs",
    description:
      "High quality design development and marketing for ecommerce stores. We help businesses increase conversions and get more traffic. We can help you grow too.",
    url: "https://epicdesignlabs.com", // No trailing slash allowed!
    siteUrl: "https://epicdesignlabs.com",
    //image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@occlumency",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "https://epicdesignlabs.com/graphql",
        perPage: 10,
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },

    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Roboto",
              variants: ["400", "700"],
            },
            { family: "Open Sans" },
          ],
        },
      },
    }
    
  ],
};
