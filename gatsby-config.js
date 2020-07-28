module.exports = {
  siteMetadata: {
    title: `cyberworks`,
    siteUrl: `https://jam.cyberworks.tech`,
    wordPressUrl: `https://jam.cyberworks.tech`,
    description: `business webiste`,
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
    // connection to wordpress data
    // {
    //   resolve: `gatsby-source-graphql`,
    //   options: {
    //     // Arbitrary name for the remote schema Query type
    //     typeName: `WPGRAPHQL`,
    //     // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
    //     fieldName: `wpgraphql`,
    //     // Url to query from
    //     url: `https://jam.cyberworks.tech/graphql`,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-wordpress`,
    //   options: {
    //     baseUrl: `jam.cyberworks.tech`,
    //     // The rest api route prefix that your WordPress site is using.
    //     // Sometimes this is modified by WordPress plugins.
    //     // If not set, it uses the default of "wp-json"
    //     restApiRoutePrefix: `index.php?rest_route=`,
    //     // The protocol. This can be http or https.
    //     protocol: `http`,
    //     auth: {
    //       // If auth.user and auth.pass are filled, then the source plugin will be allowed
    //       // to access endpoints that are protected with .htaccess.
    //       htaccess_user: `cyberworks`,
    //       htaccess_pass: `d0ntt0uchm3!`,
    //       htaccess_sendImmediately: false,
    //     },
    //     // Indicates whether the site is hosted on wordpress.com.
    //     // If false, then the assumption is made that the site is self hosted.
    //     // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
    //     // If your site is hosted on wordpress.org, then set this to false.
    //     hostingWPCOM: false,
    //     // If useACF is true, then the source plugin will try to import the WordPress ACF Plugin contents.
    //     // This feature is untested for sites hosted on WordPress.com
    //     useACF: true,
    //     // It can help you debug specific API Endpoints problems.
    //     verboseOutput: true,
    //     // Set WP REST API routes whitelists
    //     // and blacklists using glob patterns .
    //     // Defaults to whitelist the routes shown
    //     // in the example below.
    //     // See: https://github.com/isaacs/minimatch
    //     // Example:  `["/*/*/comments", "/yoast"]`
    //     // ` will either include or exclude routes ending in `comments` and
    //     // all routes that begin with `yoast` from fetch.
    //     // Whitelisted routes using glob patterns
    //     includedRoutes: [
    //       `/acf/v3`,
    //       `/*/*/acf-field`,
    //       `/*/*/acf-field-group`,
    //       `/*/*/header_content`,
    //       `/*/*/home_content`,
    //       `/*/*/services_content`,
    //       `/*/*/promotions_content`,
    //       `/*/*/about_content`,
    //       `/*/*/contact_content`,
    //       `/*/*/footer_content`,
    //     ],
    //     // Blacklisted routes using glob patterns
    //     excludedRoutes: [
    //       `/yoast`,
    //       `/*/*/posts`,
    //       `/*/*/page`,
    //       `/*/*/media`,
    //       `/wp-rest-api-log`,
    //       `/wp-rest-yoast-meta`,
    //       `/*/*/oembed_cache`,
    //       `/*/*/user_request`,
    //       `/*/*/wp_block`,
    //       `/*/*/wp-rest-api-log`,
    //       `/*/*/types`,
    //       `/*/*/statuses`,
    //       `/*/*/taxonomies`,
    //       `/*/*/categories`,
    //       `/*/*/tags`,
    //       `/*/*/users/me`,
    //       `/*/*/users`,
    //       `/*/*/comments`,
    //       `/*/*/themes`,
    //       `/*/*/settings`,
    //       `/*/*/search`,
    //     ],
    //   },
    // },
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url: `https://jam.cyberworks.tech/graphql`,
        verbose: true,
        // includedRoutes: [
        //   `/*/*/acf-field`,
        //   `/*/*/acf-field-group`,
        //   `/*/*/header_content`,
        //   `/*/*/home_content`,
        //   `/*/*/services_content`,
        //   `/*/*/promotions_content`,
        //   `/*/*/about_content`,
        //   `/*/*/contact_content`,
        //   `/*/*/footer_content`,
        // ],
        // // Blacklisted routes using glob patterns
        // excludedRoutes: [
        //   `/yoast`,
        //   `/*/*/posts`,
        //   `/*/*/Page`,
        //   `/*/*/media`,
        //   `/wp-rest-api-log`,
        //   `/wp-rest-yoast-meta`,
        //   `/*/*/oembed_cache`,
        //   `/*/*/user_request`,
        //   `/*/*/wp_block`,
        //   `/*/*/wp-rest-api-log`,
        //   `/*/*/types`,
        //   `/*/*/statuses`,
        //   `/*/*/taxonomies`,
        //   `/*/*/Taxonomy`,
        //   `/*/*/categories`,
        //   `/*/*/Category`,
        //   `/*/*/contentType`,
        //   `/*/*/tags`,
        //   `/*/*/Tag`,
        //   `/*/*/users/me`,
        //   `/*/*/users`,
        //   `/*/*/User`,
        //   `/*/*/comments`,
        //   `/*/*/Comment`,
        //   `/*/*/themes`,
        //   `/*/*/Theme`,
        //   `/*/*/settings`,
        //   `/*/*/search`,
        // ],
        excludeFieldNames: [
          `ContentType`,
          `Page`,
          `Taxonomy`,
          `Tag`,
          `MenuItem`,
        ],
        schema: {
          queryDepth: 5,
          typePrefix: `wp`,
          timeout: 30000,
        },
        develop: {
          nodeUpdateInterval: 3000,
          hardCacheMediaFiles: false,
        },
        production: {
          hardCacheMediaFiles: false,
        },
        debug: {
          graphql: {
            showQueryOnError: true,
            showQueryVarsOnError: true,
            copyQueryOnError: true,
            panicOnError: true,
            // a critical error is a WPGraphQL query that returns an error and no response data. Currently WPGQL will error if we try to access private posts so if this is false it returns a lot of irrelevant errors.
            onlyReportCriticalErrors: true,
          },
        },
      },
    },
    // Include Ant Design component library.
    {
      resolve: `gatsby-plugin-antd`,
      options: {
        style: true,
      },
    },
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
