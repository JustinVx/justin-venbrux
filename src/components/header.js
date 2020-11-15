import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"

const NavContainer = styled.div`
  margin-top: ${rhythm(2)};
  margin-bottom: ${rhythm(1.5)};
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;

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
    <NavContainer>
      <NavTitle>
        <Link to={`/`}>
          💡 Justin Venbrux
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
        <Link to={`/about/`} activeClassName="active">
          About
        </Link>
        <Link to={`/blog/`} activeClassName="active">
          Blog
        </Link>
      </NavMenu>
    </NavContainer>
  )
}