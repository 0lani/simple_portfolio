// const { createRemoteFileNode } = require(`gatsby-source-filesystem`)
const path = require(`path`)
// const createHomePage = require(`./gatsbyFunctions/createHomePage`)
const createSitePages = require(`./gatsbyFunctions/createSitePages`)

const createHomePage = async (actions, graphql) => {
  // Get path for homepage template
  const pageTemplate = path.resolve(`./src/templates/homePage.jsx`)
  // Use gatsby internal function to dynamically create pages
  createPage({
    path: `/Home`,
    component: pageTemplate,
    context: {    },
  })
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  try {
    await createHomePage(actions, graphql)
  } catch (err) {
    reporter.panicOnBuild(`Error creating Home page: ${err}`)
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  try {
    await createSitePages(actions, graphql)
  } catch (err) {
    reporter.panicOnBuild(`Error creating Site pages: ${err}`)
  }
}

// exports.createResolvers = async ({
//   actions,
//   cache,
//   createNodeId,
//   createResolvers,
//   store,
//   reporter,
// }) => {
//   const { createNode } = actions

//   try {
//     await createResolvers({
//       cyberworks_MediaItem: {
//         imageFile: {
//           type: `File`,
//           async resolve(source) {
//             let sourceUrl = source.sourceUrl
//             let remoteFileNode

//             try {
//               if (source.mediaItemUrl !== undefined) {
//                 sourceUrl = source.mediaItemUrl
//               }

//               remoteFileNode = await createRemoteFileNode({
//                 url: encodeURI(sourceUrl),
//                 store,
//                 cache,
//                 createNode,
//                 createNodeId,
//                 reporter,
//               })
//             } catch (err) {
//               reporter.panicOnBuild(`Error while creating image nodes: ${err}`)
//             }
//             return remoteFileNode
//           },
//         },
//       },
//     })
//   } catch (err) {
//     reporter.panicOnBuild(`Error while running image resolver: ${err}`)
//   }
// }
