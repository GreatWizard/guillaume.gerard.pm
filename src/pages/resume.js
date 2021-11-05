import React from "react"
import { graphql } from "gatsby"

import MainBio from "../components/main-bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PDF from "../components/pdf"

const ResumePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const rootPath = `${__PATH_PREFIX__}/`
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Résumé" />
      <MainBio />
      <h2>My Résumé</h2>
      <PDF src={`${rootPath}Guillaume_GERARD_Resume.pdf`} title="my résumé" />
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
