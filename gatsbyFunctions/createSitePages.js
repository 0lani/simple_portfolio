const path = require(`path`)
// Will create pages for WordPress pages (route : /Home)
module.exports = async (actions, graphql) => {
  // //  creates 'database' from the fetched WP data to run graphql queries
  // const GET_PAGE_CONTENT = `
  //   {
  //     home_contents {
  //       edges {
  //         node {
  //           id
  //           slug
  //         }
  //       }
  //     }
  //   }
  // `

  const { createPage } = actions
  // let nodeCount = 0
  // let graphqlErrors = null

  // const fetchHomePageContent = async () => {
  //   // Fetch wordpress data
  //   const WP_DATA = await graphql(GET_PAGE_CONTENT)
  //   // Access query results via object destructuring
  //   const { allWordpressWpHomeContent } = WP_DATA.data
  //   // check for errors and bubble up
  //   if (WP_DATA.errors) {
  //     graphqlErrors = true
  //     throw new Error(`${WP_DATA.errors}`)
  //   }
  //   // check if error has been thrown before running
  //   if (graphqlErrors === null) {
  //     nodeCount = allWordpressWpHomeContent.edges.map(node => node).length
  //   }
  //   return nodeCount
  // }

  // await fetchHomePageContent()
  //   .then(nodeCount => {
  const pageTemplate = path.resolve(`./src/templates/sitePages.jsx`)
  // console.log(`create site pages: ${nodeCount}`)
  createPage({
    path: `/idea`,
    component: pageTemplate,
    // context: { first: nodeCount },
  })
  // })
  // .catch(err => {
  //   throw new Error(err)
  // })
}
