import React from "react"
import { graphql } from "gatsby"

import MainBio from "../components/main-bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Pills from "../components/pills"
import { rhythm } from "../utils/typography"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const talks = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Speaking" />
      <MainBio />
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
              <small title={talk.frontmatter.date}>
                {talk.frontmatter.date}
                {` `}&middot;{` `}
                {talk.frontmatter.conference}
                {` `}&middot;{` `}
                {talk.frontmatter.location}
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
            location
            description
            categories
            slides
          }
        }
      }
    }
  }
`
