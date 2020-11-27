import React from "react"
import styled from "@emotion/styled"

const Image = styled.div`
  width: 830px;
  box-shadow: 0 30px 60px -10px rgba(0,0,0,0.2),0 18px 36px -18px rgba(0,0,0,0.22);

  figcaption {
    transform: scale(0);
  }
`

export default function HeroImage({ children }) {
  return (
    <Image>
      {children}
    </Image>
  )
}