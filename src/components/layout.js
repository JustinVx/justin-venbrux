import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

const LayoutContainer = styled.div`
  margin: 0 auto;
  max-width: 700px;
  padding: ${rhythm(2)};
  padding-top: ${rhythm(1.5)};

  h3 {
    margin-bottom: ${rhythm(2)};
    margin-top: 0;
    display: inline-block;
    font-style: normal;
  }
`

export default function Layout({ children }) {
  return (
    <LayoutContainer>
      <Link to={`/`}>
        <h3>
          Pandas Eating Lots
        </h3>
      </Link>
      <Link
        to={`/about/`}
        css={css`
          float: right;
        `}
      >
        About
      </Link>
      {children}
    </LayoutContainer>
  )
}