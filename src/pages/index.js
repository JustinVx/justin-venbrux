import React from "react"
import styled from "@emotion/styled"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { rhythm } from "../utils/typography"

const Hero = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 800px;
  margin-bottom: ${rhythm(2)};

  .hero-text {
    font-family: "Alegreya Sans", "Open Sans", serif;
    text-align: right;
    max-width: 300px;
  }

  .hero-image {
    background-color: white;
    width: 250px;
    height: 250px;
    justify-content: right;
    box-shadow: 0px 0px 12px #ddd;
    transform: rotate(2deg);
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

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: ${rhythm(2)};
  padding-top: ${rhythm(1.5)};

  background-color: #f5f5f5;
  color: #252733;

  h1, h2, h3, h4 {
    margin-top: ${rhythm(2)};
  }
`

const Work = styled.div`
  margin-left: 0;
  max-width: 800px;
`



export default function Index({ data }) {
  return (
    <>
      <Layout>
        <Hero>
          <div class="hero-text">
            <h1>
              I'm <b>Justin</b>.
            </h1>
            <h3>
              I design cool things that help people. 🚀
            </h3>
          </div>
          <div class="hero-image">
          </div>
        </Hero>
      </Layout>
      <HomeContainer>
        <Work>
          <h2>Work</h2>
          <p>
            We're the only site running on your computer dedicated to showing the
            best photos and videos of pandas eating lots of food.
          </p>
          <p>
            Here's <Link to={`/blog/`} >Blog</Link> and a <Link to={`/about/`} >another page</Link>.
          </p>
        </Work>
        <br />
        <br />
      </HomeContainer>
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