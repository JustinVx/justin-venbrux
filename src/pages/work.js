import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import ProjectCard from "../components/projectCard"
import { rhythm } from "../utils/typography"
import taming from "../images/taming-home.png"
import tamingLogo from "../images/taming-logo.png"
import genzo from "../images/genzo-home.jpg"
import justin from "../images/black-white.jpg"

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

export default function Index() {
  return (
      <>
      <Header />
      <AboutPageContainer>
        <AboutPage>
            Below is a selection of projects I worked on. You can always <a href="mailto:info@justinvenbrux.nl">e-mail me</a> for questions, comments or suggestions. 🥽 
        </AboutPage>
      </AboutPageContainer>
      <WorkContainer>
        <Work>
          <ProjectCard 
            title="Taming Esortra"
            description="Give osteoarthritis patients control over their disease using exercise."
            thumbnail={taming}
            logo={tamingLogo}
            file="taming-esortra"
          />
          <ProjectCard 
            title="Taming Esortra"
            description="Give osteoarthritis patients control over their disease using exercise."
            thumbnail={taming}
            logo={tamingLogo}
            file="taming-esortra"
          />
          <ProjectCard 
            title="Taming Esortra"
            description="Give osteoarthritis patients control over their disease using exercise."
            thumbnail={taming}
            logo={tamingLogo}
            file="taming-esortra"
          />
        </Work>
      </WorkContainer>
      <Footer />
    </>
  )
}