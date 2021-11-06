import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Pills from "../components/pills"
import { rhythm, scale } from "../utils/typography"

const TalkTemplate = ({ data, pageContext, location }) => {
  const talk = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={talk.frontmatter.title}
        description={talk.frontmatter.description || talk.excerpt}
        keywords={talk.frontmatter.keywords}
      />
      <article>
        <header>
          <h1>
            {talk.frontmatter.published ? "" : "[DRAFT] "}
            {talk.frontmatter.title}
          </h1>
          <small
            style={{
              ...scale(-1 / 5),
              marginBottom: rhythm(1),
            }}
          >
            {talk.frontmatter.date}
            {` `}&middot;{` `}
            {talk.frontmatter.conference}
          </small>
          <Pills items={talk.frontmatter.categories} />
        </header>
        <section
          style={{ marginTop: rhythm(1) }}
          dangerouslySetInnerHTML={{ __html: talk.html }}
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
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <footer>
          <Bio />
        </footer>
      </article>
    </Layout>
  )
}

export default TalkTemplate

export const pageQuery = graphql`
  query TalkBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        conference
        categories
        keywords
        slides
        published
      }
    }
  }
`
