import React from "react"
import styled from "@emotion/styled"
import { Link, graphql } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import ProjectCard from "../components/projectCard"
import { rhythm } from "../utils/typography"
import Img from "gatsby-image"
import SEO from "../components/seo"

const HeroContainer = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding-top: ${rhythm(2)};
  padding-bottom: ${rhythm(1.5)};
  
  color: #252733;
`

const Hero = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  max-width: 800px;
  margin-bottom: ${rhythm(2)};

  .hero-text {
    font-family: "Open Sans", serif;
    text-align: center;
    padding-left: 16px;
    padding-right: 16px;

    h1 {
      margin-top: ${rhythm(1)};
    }
  }

  .hero-image {
    display: float;
    justify-content: center;
    
    .image {
      background-color: #fff276;
      border: solid 10px white;
      border-bottom: solid 20px white;
      border-radius: 2px;
      box-shadow: 0px 3px 12px #ddd;
      transform: rotate(2deg);
      margin-bottom: 0px;
    }
  }

  h1 {
    font-size: 2.6rem;
    font-weight: 700;
    margin-bottom: ${rhythm(0.5)};
  }

  h3 {
    font-size: 1.4rem;
    margin-top: 0px;
    font-weight: normal;
  }
`

const WorkContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: ${rhythm(2)};
  padding-top: ${rhythm(1.5)};

  background-color: #f7f7f7;
  color: black;

  @media(max-width:600px) {
    padding-left: ${rhythm(1)};
    padding-right: ${rhythm(1)};
  }
`

const Work = styled.div`
  margin-left: 0;
  max-width: 800px;
  justify-content: center;

  h1, h2, h3, h4 {
    margin-top: 0;
  }
`

const WorkButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

const WorkButton = styled(Link)`
  display: block;
  font-weight: 500;
  font-size: 0.9rem;
  text-decoration: none;
  color: #343a40;
  transition: all 150ms ease-in-out;
  background: white;
  display: inline-block;
  padding: 0.2em 0.5em 0.3em 1.5em;
  padding-right: 0.5em;
  border-radius: 100px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.20);

  span {
    margin-left: 1em;
    transform: translateX(-8px);
    display: inline-block;
    transition: transform 100ms ease-in-out;
    opacity: 0.5;
  }

  &:hover {
    transform: translateX(-8px);
    color: #f5f5f5;
    background: #343a40;
    transition: all 150ms ease-in-out;
    padding-right: 1em;

    span {
      transform: translateX(0px);
      opacity: 1;
      transition: transform 100ms ease-in-out;
    }
  }
`

export default function Index({ data }) {
  return (
    <>
      <SEO title="Home" />
      <Header />
      <HeroContainer>
      
        <Hero>
          <div className="hero-image">
            <Img
              className="image"
              fixed={data.file.childImageSharp.fixed}
              alt="Justin"
            />
          </div>
          <div className="hero-text">
            <h1>
              I'm Justin.
            </h1>
            <h3>
              I design cool things that help people. <span role="img" aria-label="rocket">🚀</span>
            </h3>
          </div>
        </Hero>
      </HeroContainer>
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
          <WorkButtonContainer>
            <WorkButton to={'/work/'}>
              See more work <span>&#8594;</span>
            </WorkButton>
          </WorkButtonContainer>
        </Work>
        <br />
        <br />
      </WorkContainer>
      <Footer />
    </>

  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {type: {eq: "work"}, featured: {eq: true}}}) {
      edges {
        node {
          id
          frontmatter {
            date
            title
            type
            description
            featured
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
    file(relativePath: { eq: "images/justin.jpg" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`