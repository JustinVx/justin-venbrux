import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";

const ProjectCardContainer = styled(Link)`
  display: grid;
  grid-template-columns: 5fr 7fr;
  margin-top: 3em;
  margin-bottom: 4em;
  transition: all 150ms ease-in-out;
  text-decoration: none;
  color: currentColor;

  &:hover {

    .ProjectCardAction {
      color: #f5f5f5;
      background: #343a40;
      transition: all 150ms ease-in-out;
      padding-right: 1em;

      span {
        transform: translateX(0px);
        opacity: 1;
        transition: transform 150ms ease-in-out;
      }
    }

    .ProjectCardImageContainer {
      .thumbnail {
        opacity: 0.5;
        transform: scale(1);
        transition: all 800ms ease;
      }
      img {
        border-radius: 48px;
        transition: all 800ms ease;
      }
    }

    .ProjectCardImageOverlay {
      border-radius: 48px;
      transform: scale(1);
      opacity: 1;
      transition: all 800ms ease;
    }

    .ProjectCardImageLogo {
      opacity: 1;
      transition: all 600ms ease;

      img {
        border-radius: 5px;
        transition: all 800ms ease;
      }
    } 
  }
`

const ProjectCardContent = styled.div`
  background: none;
  padding: 1em 3em 2.25em 0;
  position: relative;
`

const ProjectCardTitle = styled.h2`
  margin-bottom: 0.5em;
  margin-top: 0px;
`

const ProjectCardBlurb = styled.div`
  margin-bottom: 0.5em;
  margin-top: 0.5em;
  margin-bottom: 2em;
`

const ProjectCardAction = styled.div`
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
    transition: transform 150ms ease-in-out;
    opacity: 0.5;
  }
`

const ProjectCardImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-left: 0;
  padding-right: 0;

  .thumbnail {
    max-width: 700px;
    width: 100%;
    box-shadow: 0px 0px 48px rgba(0, 0, 0, 0.25);
    border-radius: 24px;
    transform: scale(0.98);
    transition: all 800ms ease;
    margin-bottom: 0;
  }
`

const ProjectCardImageOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: rgba(26,26,26,0.4);
  border-radius: 24px;
  transform: scale(0.98);
`

const ProjectCardImageLogo = styled.div`
  position: absolute;
  color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -42%);
  max-width: 40%;
  opacity: 0;
  transition: all 400ms ease-in-out;

  img {
    border-radius: 20px;
    transition: all 400ms ease-in-out;
  }
`


const ProjectCard = ({ title, description, thumbnail, logo, file}) => (
  <ProjectCardContainer to={`${file}`}>
    <ProjectCardContent className="ProjectCardContent">
      <ProjectCardTitle>
        {title}
      </ProjectCardTitle>
      <ProjectCardBlurb>
        {description}
      </ProjectCardBlurb>
      <ProjectCardAction className="ProjectCardAction">
        Learn more <span>&#8594;</span>
      </ProjectCardAction>
    </ProjectCardContent>
    <ProjectCardImageContainer className="ProjectCardImageContainer">
      <img className="thumbnail" src={thumbnail} alt={"An image of "+title} />
      <ProjectCardImageOverlay className="ProjectCardImageOverlay">
        <ProjectCardImageLogo className="ProjectCardImageLogo" >
          <img src={logo} alt={logo+" logo"} />
        </ProjectCardImageLogo>
      </ProjectCardImageOverlay>
    </ProjectCardImageContainer>
  </ProjectCardContainer>
)

export default ProjectCard;
