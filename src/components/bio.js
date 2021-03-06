/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile.jpg/" }) {
        childImageSharp {
          gatsbyImageData(width: 56, height: 56, quality: 90, layout: FIXED)
        }
      }
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  const avatar = getImage(data.avatar)
  return (
    <div
      className="bio"
      style={{
        marginBottom: rhythm(2.5),
      }}
    >
      <GatsbyImage
        image={avatar}
        alt={author}
        style={{
          marginRight: rhythm(1),
          minWidth: 56,
          minHeight: 56,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        Written by <strong>{author}</strong> who lives and works in France
        building useful things.
      </p>
    </div>
  )
}

export default Bio
