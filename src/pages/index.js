import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Pills from "../components/pills"
import { rhythm } from "../utils/typography"
import pluralizeReadingTime from "../utils/pluralize-reading-time"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Writing" />
      <Bio />
      {posts.map(({ node: post }) => {
        const title = post.frontmatter.title || post.fields.slug
        return (
          <article key={post.fields.slug} style={{ marginBottom: rhythm(1) }}>
            <header>
              <h2>
                <Link to={post.fields.slug}>{title}</Link>
              </h2>
              <small>
                {post.frontmatter.date}
                {` `}&middot;{` `}
                {pluralizeReadingTime(post.fields.readingTime.minutes)}
              </small>
              <Pills items={post.frontmatter.categories} />
              <Link to={post.fields.slug}>
                <Image
                  style={{ marginTop: rhythm(0.5), marginBottom: rhythm(0.5) }}
                  fluid={post.frontmatter.cover.childImageSharp.fluid}
                  alt="Cover image"
                />
              </Link>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: post.frontmatter.description || post.excerpt,
                }}
              />
            </section>
            <p>
              <Link to={post.fields.slug}>Read more</Link>
            </p>
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true }, kind: { eq: "post" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
            readingTime {
              minutes
            }
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            categories
            cover {
              childImageSharp {
                fluid(maxHeight: 400, maxWidth: 1440) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
