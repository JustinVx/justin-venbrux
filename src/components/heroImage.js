import React from "react"
import styled from "@emotion/styled"
import { rhythm } from "../utils/typography"

const Image = styled.div`
  width: 830px;
  box-shadow: 0 30px 60px -10px rgba(0,0,0,0.2),0 18px 36px -18px rgba(0,0,0,0.22);
  margin-top: ${rhythm(2)};
  margin-bottom: ${rhythm(2)};
`

export default function HeroImage({ children }) {
  return (
    <Image>
      {children}
    </Image>
  )
}