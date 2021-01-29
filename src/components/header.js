import React from "react"
import styled from "@emotion/styled"
import { rhythm } from "../utils/typography"
import AniLink from "gatsby-plugin-transition-link/AniLink"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const HeaderContainer = styled.div`
  background-image: linear-gradient(#f5f5f5 0%, #fff 100%);
`

const NavContainer = styled.div`
  padding: ${rhythm(2)} 16px ${rhythm(1.5)} 16px};
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;

  @media(max-width:768px) {
    padding-top: ${rhythm(0.6)};
    padding-bottom: ${rhythm(0.6)};
  }

  font-weight: bold;
  font-size: 0.7rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
  }

  a:active {
    background-image: linear-gradient(to top, rgb(186, 129, 78), rgb(186, 129, 67) 2px, rgba(0, 0, 0, 0) 2px);
  }
`

const NavTitle = styled.div`
  font-family: "Vera Mono";
`

const NavMenu = styled.div`
  display: flex;
  justify-content: flex-end;

  a {
    margin-left: 1rem;
    color: #444;
    border-bottom: 3px solid transparent;
  }

  a:hover {
    color: black;
  }

  @media(pointer:fine) {
    a:hover {
      transform: scale(1.1);
    }
  }

  .active {
    color: black;
    border-bottom: 3px solid currentColor;
  }
`

export default function Header() {
  return (
    <HeaderContainer>
      <NavContainer>
        <NavTitle>
          <AniLink cover to={`/`} direction="down" bg="#343a40">
            <span role="img" aria-label="light bulb">💡</span> Justin Venbrux
          </AniLink>
        </NavTitle>
        <NavMenu>
          <AniLink cover to={`/`} direction="down" activeClassName="active" bg="#343a40">
            Home
          </AniLink>
          <AniLink cover to={`/work/`} direction="down" activeClassName="active" bg="#343a40">
            Work
          </AniLink>
          <AniLink cover to={`/writing/`} direction="down" activeClassName="active" bg="#343a40">
            Writing
          </AniLink>
        </NavMenu>
      </NavContainer>
    </HeaderContainer>
  )
}