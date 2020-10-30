import React from "react"
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

const PostTitle = styled.h3`
  margin-bottom: ${rhythm(1 / 4)};
`

const PostDate = styled.span`
  color: #bbb;
`

export default function Blog({ data }) {
  console.log(data)
  return (
    <Layout>
      <div>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <PostTitle>
              {node.frontmatter.title}{" "}
              <PostDate>
                — {node.frontmatter.date}
              </PostDate>
            </PostTitle>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`