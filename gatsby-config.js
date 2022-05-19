module.exports = {
  siteMetadata: {
    title: `efeosah.com`,
    siteUrl: `https://efeosah.netlify.app/`,
    author: {
      name: 'Efe Osah',
    },
    pathPrefix: '/',
    description:
      'Portfolio for Efe Osah',
    logo: 'https://efeosah.netlify.app/logo.png',
  },
  plugins: [
    "gatsby-plugin-react-helmet", 
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: '/assets/' // See below to configure properly
        }
      }
    },
    "gatsby-transformer-inline-svg"
  ]
};