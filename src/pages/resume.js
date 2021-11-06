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
      <Seo title="Résumé" />
      <MainBio />
      <h2>My Résumé</h2>
      <Pdf src={`${rootPath}Guillaume_GERARD_Resume.pdf`} title="my résumé" />
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
