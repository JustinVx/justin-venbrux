import React from "react"
import styled from "@emotion/styled"
import { rhythm } from "../utils/typography"
import sticker from "../images/sticker.png"

const FooterContainer = styled.div`
  display: grid;
  justify-content: center;
  padding-top: ${rhythm(2)};
  padding-bottom: ${rhythm(2)};
`
const FooterSticker = styled.img`
  margin: 0 auto ${rhythm(0.5)} auto;
  width: 50px;
  heigth: 100%;

  &:hover {
    transform: rotate(180deg);
  }
`

const FooterContent = styled.div`
  font-size: 0.8rem;
`

export default function Footer() {
 return (
   <FooterContainer>
    <FooterSticker src={sticker} />
    <FooterContent>
    © 2020 Justin Venbrux, All Rights Reserved.
    </FooterContent>
   </FooterContainer>
 )
}
