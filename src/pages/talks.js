import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Pills from "../components/pills"
import { rhythm } from "../utils/typography"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const talks = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Speaking" />
      <Bio />
      {talks.map(({ node: talk }) => {
        const title = talk.frontmatter.title || talk.fields.slug
        return (
          <article key={talk.fields.slug} style={{ marginBottom: rhythm(1) }}>
            <header>
              <h2>
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href={talk.frontmatter.slides}
                >
                  {title}
                </a>
              </h2>
              <small>
                {talk.frontmatter.date}
                {` `}&middot;{` `}
                {talk.frontmatter.conference}
              </small>
              <Pills items={talk.frontmatter.categories} />
            </header>
            <section style={{ marginTop: rhythm(1) }}>
              <p
                dangerouslySetInnerHTML={{
                  __html: talk.frontmatter.description || talk.excerpt,
                }}
              />
              {talk.frontmatter.slides ? (
                <p>
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    href={talk.frontmatter.slides}
                  >
                    View slides
                  </a>
                </p>
              ) : (
                ""
              )}
            </section>
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
      filter: { frontmatter: { published: { eq: true }, kind: { eq: "talk" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            conference
            description
            categories
            slides
          }
        }
      }
    }
  }
`
