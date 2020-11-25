import React from "react"
import styled from "@emotion/styled"
import { rhythm } from "../utils/typography"
import Header from "../components/header"
import Footer from "../components/footer"

const LayoutContainer = styled.div`
  margin: 0 auto;
  max-width: 670px;
  padding: 16px;
  padding-bottom: ${rhythm(2)};
  padding-top: ${rhythm(1.5)};

  h1, h2, h3, h4 {
    margin-top: ${rhythm(2)};
    margin-bottom: ${rhythm(0.6)};
  }
`

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <LayoutContainer>
        {children}
      </LayoutContainer>
      <Footer />
    </>
  )
}