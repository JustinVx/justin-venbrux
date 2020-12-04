import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"

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
  }

  a:hover {
    transform: scale(1.1);
    color: black;
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
          <Link to={`/`}>
            <span role="img" aria-label="light bulb">💡</span> Justin Venbrux
          </Link>
        </NavTitle>
        <NavMenu>
          <Link to={`/`} activeClassName="active">
            Home
          </Link>
          <Link to={`/work/`} activeClassName="active">
            Work
          </Link>
          <Link to={`/writing/`} activeClassName="active">
            Writing
          </Link>
        </NavMenu>
      </NavContainer>
    </HeaderContainer>
  )
}