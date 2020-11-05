import React from "react"
import styled from "@emotion/styled"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { rhythm } from "../utils/typography"

const Hero = styled.div`
  font-family: "Alegreya Sans", "Open Sans", serif;
  text-align: left;
  max-width: 300px;

  h1 {
    font-size: 2.4em;
    font-weight: 700;
    margin-bottom: ${rhythm(0.5)};
  }

  h3 {
    margin-top: 0px;
    font-weight: normal;
  }
`

export default function Index({ data }) {
  return (
    <Layout>
      <Hero>
        <h1>
          I'm <b>Justin</b>.
        </h1>
        <h3>
          I design cool things that help people. 🚀
        </h3>
      </Hero>
      <br />
      <br />
      <h2>Work</h2>
      <p>
        We're the only site running on your computer dedicated to showing the
        best photos and videos of pandas eating lots of food.
      </p>
      <p>
        Here's <Link to={`/blog/`} >Blog</Link> and a <Link to={`/about/`} >another page</Link>.
      </p>
      
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`