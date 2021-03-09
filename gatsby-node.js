const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
        allWpPost(sort: { fields: [date] }) {
            edges {
                node {
                    title
                    excerpt
                    content
                    slug
                }
            }
        }

        allWpPage(sort: { fields: [date] }) {
          edges {
            node {
              slug
              title
              content
            }
          }
      }

    }
  `).then(result => {

    result.data.allWpPost.edges.forEach(({ node }) => {
        createPage({
          path: `/post/${node.slug}/`,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            // This is the $slug variable
            // passed to blog-poszt.js
            slug: node.slug,
          },
        })
      })

    result.data.allWpPage.edges.forEach(({node}) => {
      createPage({
          path: `/${node.slug}/`,
          component: path.resolve(`./src/templates/page.js`),
          context: {
            // This is the $slug variable
            // passed to blog-poszt.js
            slug: node.slug,
          },
        })
    })

  })
}