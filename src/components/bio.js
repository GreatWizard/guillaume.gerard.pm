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
          gatsbyImageData(width: 70, height: 70, quality: 90, layout: FIXED)
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
          minWidth: 70,
          minHeight: 70,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <h1
        style={{
          marginTop: 0,
        }}
      >
        Hello! My name is {author}. I'm Lead Software Engineer at
        {` `}
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.people-doc.com"
        >
          PeopleDoc
        </a>
        .{` `}
        <span role="img" aria-label="man technologist">
          👨‍💻
        </span>
      </h1>
    </div>
  )
}

export default Bio
