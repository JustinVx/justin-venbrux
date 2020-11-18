import React from "react"
import styled from "@emotion/styled"
import Header from "../components/header"
import Footer from "../components/footer"
import ProjectCard from "../components/projectCard"
import { rhythm } from "../utils/typography"
import taming from "../images/taming-home.png"
import tamingLogo from "../images/taming-logo.png"
import { Link, graphql } from "gatsby"

const AboutPageContainer = styled.div`
  margin: 0 auto;
  max-width: 730px;
  padding: ${rhythm(2)};
  padding-top: ${rhythm(1.5)};
  padding-bottom: 0;
`

const AboutPage = styled.p`
  font-size: 1.4rem;
  font-weight: normal;
  text-align: center;
  margin-top: ${rhythm(1)};
  margin-bottom: ${rhythm(2)};
`

const WorkContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: ${rhythm(2)};
  padding-top: ${rhythm(0)};
  color: #252733;
`

const Work = styled.div`
  margin-left: 0;
  max-width: 800px;
  justify-content: center;
`

export default function WorkIndex({ data }) {
  return (
      <>
      <Header />
      <AboutPageContainer>
        <AboutPage>
            Below is a selection of projects I worked on. <a href="mailto:info@justinvenbrux.nl">Email me</a> for questions, comments or suggestions. 🥽 
        </AboutPage>
      </AboutPageContainer>
      <WorkContainer>
        <Work>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <ProjectCard 
              key={node.id}
              title={node.frontmatter.title}
              description={node.frontmatter.description}
              thumbnail={node.frontmatter.thumbnail.publicURL}
              logo={node.frontmatter.logo.publicURL}
              file={node.fields.slug}
            />
          ))}
        </Work>
      </WorkContainer>
      <Footer />
    </>
  )
}


export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            date
            title
            type
            description
            thumbnail {
              publicURL
            }
            logo {
              publicURL
            }
          }
          fields {
            slug
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`