import React from "react"
import styled from "@emotion/styled"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

const AboutPage = styled.p`
  font-size: 1.4rem;
  font-weight: normal;
  text-align: center;
  margin-top: ${rhythm(1)};
  margin-bottom: ${rhythm(2)};
`

const PostContainer = styled.div`
  margin-bottom: ${rhythm(1)};
  color: #333;

  &:hover {
    color: black;

    .PostTimeToRead {
      opacity: 1.0;
      transition: transform 100ms ease-in-out;
      transform: translateX(0em) translateY(0.15em);

      span {
        opacity: 1;
      }
    }
  }
`

const PostLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  color: inherit;
  overflow-x: hidden;
`

const PostTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const PostDate = styled.span`
  text-transform: uppercase;
  font-size: 0.7rem;
  color: #888;
  background-image: none;

  line-height: 0px;
`

const PostTimeToRead = styled.div`
  font-size: 0.9rem;
  opacity: 0.3;
  transform: translateX(1.4em) translateY(0.15em);
  transition: transform 100ms ease-in-out;
  white-space: nowrap;

  span {
    margin-left: 0.5em;
    display: inline-block;
    opacity: 1;
  }
`

export default function Blog({ data }) {
  console.log(data)
  return (
    <Layout>
      <AboutPage>
        I write to collect and recollect what I think and read about. <span role="img" aria-label="writing hand">✍️</span>
      </AboutPage>
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <PostContainer key={node.id}>
            <PostDate>
                {node.frontmatter.date}
            </PostDate>
            <PostLink
              to={node.fields.slug}
            >
              <PostTitle>
                {node.frontmatter.title}{" "}              
              </PostTitle>
              <PostTimeToRead className="PostTimeToRead">
                {node.timeToRead}{" min read"}<span>&#8594;</span>
              </PostTimeToRead>
            </PostLink>
          </PostContainer>
        ))}
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
            date(formatString: "DD MMM YYYY")
          }
          fields {
            slug
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`