import React from "react"
import { graphql } from "gatsby"

import MainBio from "../components/main-bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Pdf from "../components/pdf"

const ResumePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const rootPath = `${__PATH_PREFIX__}/`
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Resume" />
      <MainBio />
      <h2>My Resume</h2>
      <Pdf src={`${rootPath}Guillaume_GERARD_Resume.pdf`} title="my resume" />
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
