/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

import { rhythm } from "../utils/typography"

const MainBio = () => {
  const data = useStaticQuery(graphql`
    query MainBioQuery {
      avatar: file(absolutePath: { regex: "/profile.jpg/" }) {
        childImageSharp {
          gatsbyImageData(width: 70, height: 70, quality: 90, layout: FIXED)
        }
      }
      site {
        siteMetadata {
          author
          social {
            github
            twitter
            linkedin
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  const avatar = getImage(data.avatar)
  return (
    <div
      className="main-bio"
      style={{
        marginBottom: rhythm(2.5),
      }}
    >
      <GatsbyImage
        image={avatar}
        alt={author}
        style={{
          marginRight: rhythm(1),
          minWidth: 120,
          minHeight: 120,
          borderRadius: `100%`,
          margin: `auto`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <h1
        style={{
          marginTop: `0.5rem`,
          fontSize: `2rem`,
        }}
      >
        Hello! My name is {author}. I'm Principal Software Engineer at
        {` `}
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.ukg.com"
        >
          UKG
        </a>
        .{` `}
        <span role="img" aria-label="man technologist">
          👨‍💻
        </span>
      </h1>
      <ul className="horizontal-links" style={{ marginBottom: rhythm(1) }}>
        <li>
          <a
            class="box-shadow-none"
            target="_blank"
            rel="noreferrer noopener"
            href={`https://github.com/${social.github}`}
          >
            <FontAwesomeIcon icon={faGithub} title="GitHub" />
          </a>
        </li>
        <li>
          <a
            class="box-shadow-none"
            target="_blank"
            rel="noreferrer noopener"
            href={`https://twitter.com/${social.twitter}`}
          >
            <FontAwesomeIcon icon={faTwitter} title="Twitter" />
          </a>
        </li>
        <li>
          <a
            class="box-shadow-none"
            target="_blank"
            rel="noreferrer noopener"
            href={`https://www.linkedin.com/in/${social.linkedin}/`}
          >
            <FontAwesomeIcon icon={faLinkedin} title="LinkedIn" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default MainBio
