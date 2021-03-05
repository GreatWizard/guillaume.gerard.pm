const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

async function createBlogPostPages(graphql, actions) {
  const { createPage } = actions

  const component = path.resolve(`./src/templates/blog-post.js`)
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: {
            frontmatter: { published: { eq: true }, kind: { eq: "post" } }
          }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

async function createTalkPages(graphql, actions) {
  const { createPage } = actions

  const component = path.resolve(`./src/templates/talk.js`)
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: {
            frontmatter: { published: { eq: true }, kind: { eq: "talk" } }
          }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create talk pages.
  const talks = result.data.allMarkdownRemark.edges

  talks.forEach((talk, index) => {
    createPage({
      path: talk.node.fields.slug,
      component,
      context: {
        slug: talk.node.fields.slug,
      },
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  await createBlogPostPages(graphql, actions)
  await createTalkPages(graphql, actions)
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
