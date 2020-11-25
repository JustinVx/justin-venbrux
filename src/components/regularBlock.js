import React from "react"
import styled from "@emotion/styled"
import { rhythm } from "../utils/typography"

const Center = styled.div`
  max-width: 670px;
  padding: 0px 16px;

  h1, h2, h3, h4 {
    margin-top: ${rhythm(1.5)};
    margin-bottom: ${rhythm(0.6)};
  }

  .gatsby-resp-image-figure {
    margin-bottom: ${rhythm(1)};
  }

  .gatsby-resp-image-wrapper {
    box-shadow: 0px 0px 2px #f5f5f5;
  }

  .gatsby-resp-image-figcaption {
    font-size: 0.7rem;
    text-align: center;
  }
`

export default function RegularBlock({ children }) {
  return (
    <Center>
      {children}
    </Center>
  )
}