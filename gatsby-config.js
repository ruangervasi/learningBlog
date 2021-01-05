// gatsby-config.js
module.exports = {
  siteMetadata: {
    title: "Blog Ruan Gervasi",
    description:
      "Desmistificando ferramentas, frameworks e outras coisas do universo Javascript",
  },

  plugins: [
    "gatsby-plugin-catch-links",
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/posts`,
      },
    },
  ],
};
