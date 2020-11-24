import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Header from "../components/header"
import Footer from "../components/footer"
import styled from "@emotion/styled"
import { rhythm } from "../utils/typography"

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p, ul, ol, h2, h3, h4 {
    width: 600px;
  }

  h1, h2, h3, h4 {
    margin-top: ${rhythm(1.5)};
    margin-bottom: ${rhythm(0.6)};
  }

  .gatsby-resp-image-figure {
    width: 650px;
    margin-bottom: ${rhythm(1)};
  }

  .gatsby-resp-image-wrapper {
    box-shadow: 0px 0px 2px #f5f5f5;
  }

  .gatsby-resp-image-figcaption {
    font-size: 0.7rem;
    text-align: center;
  }
`


export default function BlogPost({ data }) {
  const post = data.mdx
  return (
    <>
      <Header />
      <ProjectContainer>
          <h1>{post.frontmatter.title}</h1>
          <MDXRenderer>{post.body}</MDXRenderer>
      </ProjectContainer>
      <Footer />
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
      }
    }
  }
`