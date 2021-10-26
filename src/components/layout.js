import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Logo from "../../content/assets/hamburger.svg"
import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          social {
            github
            twitter
            linkedin
          }
        }
      }
    }
  `)

  const { social } = data.site.siteMetadata
  return (
    <>
      <header
        className="header"
        style={{
          padding: rhythm(2),
        }}
      >
        <Link className="header__link" to={`/`}>
          <div className="logo">
            <Logo
              style={{
                marginRight: rhythm(1 / 4),
              }}
            />
            <span
              style={{
                ...scale(0.3),
              }}
            >
              {title}
            </span>
          </div>
        </Link>
        <ul className="header__horizontal-links horizontal-links">
          <li>
            <Link to={"/"}>Writing</Link>
          </li>
          <li>
            <Link to={"/talks"}>Speaking</Link>
          </li>
          <li>
            <Link to={"/resume"}>Résumé</Link>
          </li>
        </ul>
      </header>
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer className="footer">
          © {new Date().getFullYear()} Guillaume Gérard
          {` `}
          <div>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href={`https://github.com/${social.github}`}
            >
              GitHub
            </a>
            <span> / </span>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href={`https://twitter.com/${social.twitter}`}
            >
              Twitter
            </a>
            <span> / </span>
            <a
              rel="me"
              target="_blank"
              rel="noreferrer noopener"
              href="https://mamot.fr/@greatwizard"
            >
              Mastodon
            </a>
            <span> / </span>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href={`https://www.linkedin.com/in/${social.linkedin}/`}
            >
              LinkedIn
            </a>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Layout
