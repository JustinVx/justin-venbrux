import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "@emotion/styled"
import { rhythm } from "../utils/typography"

const PostContainer = styled.div`
 .gatsby-resp-image-figcaption {
   font-size: 0.6rem;
   text-align: center;
 }
`

const Title = styled.h1`
  margin-bottom: ${rhythm(0.2)} !important;
  font-size: 2.7rem;
`

const Subtitle = styled.div`
  margin-bottom: ${rhythm(1)};
  text-transform: uppercase;
  font-size: 0.7rem;
  color: #888;
`

export default function BlogPost({ data }) {
  const post = data.mdx
  return (
    <Layout>
      <PostContainer>
        <Title>{post.frontmatter.title}</Title>
        <Subtitle>
          {post.frontmatter.date}・{post.timeToRead} min read
        </Subtitle>
        <MDXRenderer>{post.body}</MDXRenderer>
      </PostContainer>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "DD MMM YYYY")
      }
      timeToRead
    }
  }
`