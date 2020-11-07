import React from "react"
import styled from "@emotion/styled"
import { rhythm } from "../utils/typography"

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: ${rhythm(2)};
  padding-bottom: ${rhythm(2)};
`

const FooterContent = styled.div`
  font-size: 0.8rem;
`

export default function Footer() {
 return (
   <FooterContainer>
     <FooterContent>
      © 2020 Justin Venbrux, All Rights Reserved.
     </FooterContent>
   </FooterContainer>
 )
}
