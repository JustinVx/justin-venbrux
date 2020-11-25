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
  width: 100%;

  padding-top: ${rhythm(1.5)};
  padding-bottom: ${rhythm(2)};
`


export default function BlogPost({ data }) {
  const post = data.mdx
  return (
    <>
      <Header />
      <ProjectContainer>
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