import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Header from "../components/header"

const LayoutContainer = styled.div`
  margin: 0 auto;
  max-width: 900px;
  padding: ${rhythm(2)};
  padding-top: ${rhythm(1.5)};
  
  color: #252733;

  h1, h2, h3, h4 {
    margin-top: ${rhythm(2)};
  }
`

const NavTitle = styled.div`
  margin-bottom: ${rhythm(2)};
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  display: inline-block;
  font-style: normal;
  background-image: linear-gradient(to top, rgb(186, 129, 78), rgb(186, 129, 67) 7px, rgba(0, 0, 0, 0) 7px);
`

const NavLink = styled.div`
  float: right;
  padding-left: 1em;
`


export default function Layout({ children }) {
  return (
    <>
      <Header />
      <LayoutContainer>
        {children}
      </LayoutContainer>
    </>
  )
}