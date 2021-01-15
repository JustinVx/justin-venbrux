import React from "react"
import styled from "@emotion/styled"
import { css } from '@emotion/react'
import { rhythm } from "../utils/typography"

const ColumnsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;

  margin-top: ${rhythm(1.5)};
  margin-bottom: ${rhythm(2.5)};

  div, figure, span {
    width: 450px;
  }

  @media(max-width:750px) {
    div, figure, span {
      width: 100%;
      padding-left: 16px;
      padding-right: 16px;
    }
  }

  figure {
    margin-bottom: 0px;
  }

  h1, h2, h3, h4 {
    margin-top: 0;
    margin-bottom: ${rhythm(0.4)};
  }

  .gatsby-resp-image-wrapper {
    box-shadow: 0px 0px 2px #f5f5f5;
  }

  .gatsby-resp-image-figcaption {
    font-size: 0.7rem;
    text-align: center;
  }
`

const row = css`
  flex-direction: row;

  @media(max-width:750px) {
    flex-direction: column;
  }
`

const rowReverse = css`
  flex-direction: row-reverse;

  @media(max-width:750px) {
    flex-direction: column;
  }
`

export default function ColumnBlock({title, text, reversed, children }) {
  return (
    <ColumnsContainer
      css={reversed ? rowReverse : row}
    >
      <div>
        <h2>
          {title}
        </h2>
        <p>
          {text}
        </p>
      </div>
      <div>
        {children}
      </div>
    </ColumnsContainer>
  )
}