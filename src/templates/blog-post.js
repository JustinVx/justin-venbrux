import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "@emotion/styled"
import { rhythm } from "../utils/typography"
import SEO from "../components/seo"

const PostContainer = styled.div`
  figure {
    margin-top: ${rhythm(2)};

    .gatsby-resp-image-wrapper {
      margin-bottom: 0;
    }
  }

  .gatsby-resp-image-figcaption {
    font-size: 0.7rem;
    text-align: center;
    color: #888;
  }

  .gatsby-resp-image-wrapper {
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 60px;
    margin-bottom: ${rhythm(1)};
  }
`

const PostTitle = styled.h1`
  margin-bottom: ${rhythm(0.2)} !important;
  font-size: 2.7rem;
`

const PostSubtitle = styled.div`
  margin-bottom: ${rhythm(2)};
  text-transform: uppercase;
  font-size: 0.7rem;
  color: #888;
`

export default function BlogPost({ data }) {
  const post = data.mdx
  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt}/>
      <PostContainer>
        <PostTitle>{post.frontmatter.title}</PostTitle>
        <PostSubtitle>
          {post.frontmatter.date}・{post.timeToRead} min read
        </PostSubtitle>
        <MDXRenderer>
          {post.body}
        </MDXRenderer>
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
      excerpt
    }
  }
`