import React from "react"
import styled from "@emotion/styled"
import Header from "../components/header"
import Footer from "../components/footer"
import ProjectCard from "../components/projectCard"
import { rhythm } from "../utils/typography"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import AboutPage from "../components/aboutPage"

const AboutPageContainer = styled.div`
  margin: 0 auto;
  max-width: 730px;
  padding: ${rhythm(2)};
  padding-top: ${rhythm(1.5)};
  padding-bottom: 0;

  @media(max-width:600px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`

const WorkContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: ${rhythm(2)};
  padding-top: ${rhythm(0)};
  color: #252733;

  @media(max-width:600px) {
    padding-left: ${rhythm(1)};
    padding-right: ${rhythm(1)};
  }
`

const Work = styled.div`
  margin-left: 0;
  max-width: 800px;
  justify-content: center;
`

export default function WorkIndex({ data }) {
  return (
    <>
      <SEO title="Work" />
      <Header />
      <AboutPageContainer>
        <AboutPage>
            Below is a selection of projects I worked on. <a href="mailto:temporary.justin1minuut@spamgourmet.com">Email me</a> for questions, comments or suggestions. 🥽 
        </AboutPage>
      </AboutPageContainer>
      <WorkContainer>
        <Work>
          {data.allMdx.edges.map(({ node }) => (
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
    allMdx(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {type: {eq: "work"}}}) {
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