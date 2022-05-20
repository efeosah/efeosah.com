module.exports = {
  siteMetadata: {
    title: `efeosah.com`,
    siteUrl: `https://efeosah.netlify.app/`,
    author: {
      name: 'Efe Osah',
    },
    pathPrefix: '/',
    description: 'Portfolio for Efe Osah',
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
    "gatsby-transformer-inline-svg",
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Efe Osah',
        short_name: 'Efe Osah',
        description:
          'Efe\'s portfolio',
        start_url: '/',
        background_color: 'white',
        theme_color: '#6b76f3',
        display: 'minimal-ui',
        icon: `static/logo.png`,
      },
    }
  ]
};