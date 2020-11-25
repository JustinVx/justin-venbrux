import React from "react"
import styled from "@emotion/styled"
import { rhythm } from "../utils/typography"

const ColumnsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;

  margin-top: ${rhythm(1)};
  margin-bottom: ${rhythm(1)};

  div, p, figure {
    width: 420px;
  }

  figure {
    margin-bottom: 0px;
  }

  h1, h2, h3, h4 {
    margin-top: 0;
    margin-bottom: ${rhythm(0.3)};
  }

  .gatsby-resp-image-wrapper {
    box-shadow: 0px 0px 2px #f5f5f5;
  }

  .gatsby-resp-image-figcaption {
    font-size: 0.7rem;
    text-align: center;
  }
`

export default function TwoColumnBlock({ children }) {
  return (
    <ColumnsContainer>
      {children}
    </ColumnsContainer>
  )
}