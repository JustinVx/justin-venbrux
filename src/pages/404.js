import React from "react"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import AboutPage from "../components/aboutPage"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql } from "gatsby"

const Wrapper = styled.div`
  max-width: 200px;
  margin-left: auto;
  margin-right: auto;
`

export default function FourOFour({ data }) {
  return (
    <Layout>
      <SEO title="Page not found" />
      <Wrapper>
        <Img 
          fluid={data.file.childImageSharp.fluid} 
          alt="Lost astronaut"
        /> 
      </Wrapper>
      <AboutPage>
        This page does not exist...
      </AboutPage>
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "images/A404.png" }) {
      childImageSharp {
        fluid(maxWidth: 670) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`