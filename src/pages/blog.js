import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

const PostTitle = styled.h3`
  margin-bottom: ${rhythm(1 / 4)};
`

const PostDate = styled.span`
  color: #bbb;
  background-image: none;
`

export default function Blog({ data }) {
  console.log(data)
  return (
    <Layout>
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <PostTitle>
                {node.frontmatter.title}{" "}              
              </PostTitle>
              <PostDate>
                  {node.frontmatter.date}
              </PostDate>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`