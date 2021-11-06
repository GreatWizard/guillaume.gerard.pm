import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Pills from "../components/pills"
import { rhythm, scale } from "../utils/typography"
import pluralizeReadingTime from "../utils/pluralize-reading-time"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const cover = getImage(post.frontmatter.cover)
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        keywords={post.frontmatter.keywords}
      />
      <article>
        <header>
          <h1>
            {post.frontmatter.published ? "" : "[DRAFT] "}
            {post.frontmatter.title}
          </h1>
          <small
            style={{
              ...scale(-1 / 5),
              marginBottom: rhythm(1),
            }}
          >
            {post.frontmatter.date}
            {` `}&middot;{` `}
            {pluralizeReadingTime(post.fields.readingTime.minutes)}
          </small>
          <Pills items={post.frontmatter.categories} />
          <GatsbyImage
            image={cover}
            alt="Cover image"
            className="full-width"
            style={{
              marginTop: rhythm(1),
              maxHeight: 350,
            }}
          />
          <small>
            Photo by{` `}
            <a
              target="_blank"
              rel="noreferrer noopener"
              href={post.frontmatter.coverOriginalUrl}
            >
              {post.frontmatter.coverAuthor}
            </a>
            {` `}on{` `}
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            >
              Unsplash
            </a>
          </small>
        </header>
        <section
          style={{ marginTop: rhythm(1) }}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <footer>
          <Bio />
        </footer>
      </article>

      <nav className="article-nav">
        <ul>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        readingTime {
          minutes
        }
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        categories
        keywords
        cover {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        coverAuthor
        coverOriginalUrl
        published
      }
    }
  }
`
