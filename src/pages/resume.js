import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PDF from "../components/pdf"

const ResumePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const rootPath = `${__PATH_PREFIX__}/`
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Resume" />
      <Bio />
      <h2>My Resume</h2>
      <PDF src={`${rootPath}Guillaume_GERARD_Resume.pdf`} title="my resume" />
    </Layout>
  )
}

export default ResumePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
