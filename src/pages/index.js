import React from "react"
import styled from "@emotion/styled"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const Hero = styled.h1`
  font-family: "Alegreya Sans", "Open Sans", serif;
  font-size: 2.4em;
  font-weight: 700;
  text-align: center;
`

export default function Index({ data }) {
  return (
    <Layout>
      <Hero>I'm <b>Justin</b> - I like to create cool things that help people. 🚀</Hero>
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