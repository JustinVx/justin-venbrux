import React from "react"
import styled from "@emotion/styled"
import { Link, graphql } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import ProjectCard from "../components/projectCard"
import { rhythm } from "../utils/typography"
import sticker from "../images/sticker.png"
import justin from "../images/black-white.jpg"

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
    font-family: "Alegreya Sans", "Open Sans", serif;
    text-align: center;

    h1 {
      margin-top: ${rhythm(1)};
    }
  }

  .hero-image {
    display: float;
    justify-content: center;
    
    img {
      background-color: #fff276;
      border-radius: 12px;
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
  color: #252733;

  h1, h2, h3, h4 {
    margin-top: 0;
  }
`

const Work = styled.div`
  margin-left: 0;
  max-width: 800px;
`



export default function Index({ data }) {
  return (
    <>
      <Header />
      <HeroContainer>
        <Hero>
          <div class="hero-image">
            <img src={justin} width="90px"/>
          </div>
          <div class="hero-text">
            <h1>
              I'm <b>Justin</b>.
            </h1>
            <h3>
              I design cool things that help people. 🚀
            </h3>
          </div>
        </Hero>
      </HeroContainer>
      <WorkContainer>
        <Work>
          <ProjectCard 
            title="Genzō"
            description="Remote expertise using smartglasses."
          />
          <ProjectCard 
            title="Taming Esortra"
            description="A persuasive game that uses narrative and data to motivate osteoarthritis patients to exercise."
          />
          <p>
            Here's <Link to={`/blog/`} >Blog</Link> and a <Link to={`/about/`} >another page</Link>.
          </p>
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
    site {
      siteMetadata {
        title
      }
    }
  }
`