module.exports = {
  siteMetadata: {
    title: `portfolio`,
    siteUrl: `https://olonnye.com`,
    wordPressUrl: `https://olonnye.com`,
    description: `portfolio webiste`,
    author: `Olonnye Taylor`,
    pagePrefix: ``,
    siteLanguage: `en`,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-typescript`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-less`,
      options: {
        javascriptEnabled: true,
        modifyVars: {
          // DEFAULTS FOR ANT DESIGN
          // Full list of variables can be found here:
          // https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
          // @primary-color: #1890ff; #
          "layout-header-background": `#0e2339`,
          // @layout-body-background: #f0f2f5;
          "layout-body-background": `80a1ea42`,
          // primary color for all components
          "primary-color": `#1890ff`,
          // @link-color: #1890ff;
          "link-color": `#f5222d`,
          // @success-color: #52c41a;
          "success-color": `#52c41a`,
          // @warning-color: #faad14;
          "warning-color": `#faad14`,
          // @error-color: #f5222d;
          "error-color": `#f5222d`,
          // @font-size-base: 14px;
          // major text font size
          "font-size-base": `13px`,
          // @heading-color: rgba(0, 0, 0, .85);
          "heading-color": `rgba(0, 0, 0, .85)`,
          // @text-color: rgba(0, 0, 0, .65);
          "text-color": `#fff`,
          // @text-color-secondary : rgba(0, 0, 0, .45);
          "text-color-secondary": `rgba(0, 0, 0, .45)`,
          // @disabled-color : rgba(0, 0, 0, .25);
          "disabled-color": `rgba(0, 0, 0, .25)`,
          // @border-radius-base: 4px;
          "border-radius-base": `4px`,
          // @border-color-base: #d9d9d9;
          "border-color-base": `#d9d9d9`,
          // @box-shadow-base: 0 2px 8px rgba(0, 0, 0, .15);
          "box-shadow-base": `0 2px 8px rgba(0, 0, 0, .15)`,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/resources/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `cyberworks`,
        short_name: `cyber`,
        start_url: `/`,
        background_color: `#f0f2f5`,
        theme_color: `#001529`,
        display: `minimal-ui`,
        icon: `src/resources/images/cyberworks-logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // `gatsby-plugin-offline`,
  ],
}
