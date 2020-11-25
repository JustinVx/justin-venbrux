import React from "react"
import styled from "@emotion/styled"
import { rhythm } from "../utils/typography"
import logo from "../images/taming-logo.png"

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${rhythm(2)};
`

const IntroImage = styled.img`
  box-shadow: rgba(100, 100, 100, 0.2) 0px -30px 60px -10px, rgba(200, 200, 200, 0.23) 0px 18px 36px -18px, #f2ebd4 12px 12px, #f2ebd4 -12px -12px;
  width: 150px;
`

const IntroText = styled.p`
  font-weight: 400;
  font-size: 1.1rem;
  max-width: 670px;
  padding: 0px 16px;
  margin-top: ${rhythm(1)};
`

export default function IntroBlock({ children }) {
  return (
    <IntroContainer>
      <IntroImage src={logo} />
      <IntroText>
        {children}
      </IntroText>
    </IntroContainer>
  )
}