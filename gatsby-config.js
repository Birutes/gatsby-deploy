module.exports = {
  siteMetadata: {
      title: 'Wordpress Gatsby',
      subtitle: `Fetch Data From Local WP Install`,
      description: 'This is a site',
      author: 'Birute'
  },
  plugins: [
      'gatsby-plugin-react-helmet',
      {
          resolve: "gatsby-source-wordpress",
          options: {
              baseUrl: "localhost/project",
              protocol: "http",
              hostingWPCOM: false,
              useACF: true,
              verboseOutput: true,
              includedRoutes: [
                "**/categories",
                "**/posts",
                "**/pages",
                "**/media",
                "**/tags",
                "**/taxonomies",
                "**/users",
                "**/menus"
              ],
          }
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`
  ],
};