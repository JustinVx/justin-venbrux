import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Index({ data }) {
  return (
    <Layout>
      <h1>I'm Justin - I like to create cool things that help people. 🚀</h1>
      <button>
        Learn more
      </button>
      <h2>Work</h2>
      <p>
        We're the only site running on your computer dedicated to showing the
        best photos and videos of pandas eating lots of food.
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