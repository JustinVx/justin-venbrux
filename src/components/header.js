import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"

const NavContainer = styled.div`
  margin-top: ${rhythm(1)};
  margin-bottom: ${rhythm(1.5)};
  margin-left: 2rem;
  margin-right: 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    color: grey;
  }
`

const NavTitle = styled.div`
  font-style: normal;
  background-image: linear-gradient(to top, rgb(186, 129, 78), rgb(186, 129, 67) 7px, rgba(0, 0, 0, 0) 7px);
`

const NavMenu = styled.div`
  display: flex;
  justify-content: flex-end;

  a {
    margin-left: 1rem;
  }
`

export default function Header() {
  return (
    <NavContainer>
      <Link to={`/`}>
        Justin Venbrux
      </Link>
      <NavMenu>
        <Link to={`/about/`}>
          About
        </Link>
        <Link to={`/blog/`}>
          Blog
        </Link>
      </NavMenu>
    </NavContainer>
  )
}