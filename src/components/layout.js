import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

const LayoutContainer = styled.div`
  margin: 0 auto;
  max-width: 700px;
  padding: ${rhythm(2)};
  padding-top: ${rhythm(1.5)};
`

const NavTitle = styled.h3`
  margin-bottom: ${rhythm(2)};
  margin-top: 0;
  display: inline-block;
  font-style: normal;
`

const NavLink = styled.div`
  float: right;
  padding-left: 1em;
`


export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <LayoutContainer>
      <Link to={`/`}>
        <NavTitle>
          {data.site.siteMetadata.title}
        </NavTitle>
      </Link>
      <NavLink>
        <Link to={`/about/`} >
          About
        </Link>
      </NavLink>
      <NavLink>
        <Link to={`/blog/`} >
          Blog
        </Link>
      </NavLink>
      {children}
    </LayoutContainer>
  )
}