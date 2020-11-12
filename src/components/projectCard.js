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
      color: darkred;
      transition: all 150ms ease-in-out;

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
        border-radius: 32px;
        transition: all 800ms ease;
      }
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

const ProjectCardTitle = styled.h3`
  margin-bottom: 0.5em;
  margin-top: 0px;
`

const ProjectCardBlurb = styled.div`
  margin-bottom: 0.5em;
  margin-top: 0.5em;
  margin-bottom: 5em;
`

const ProjectCardAction = styled.div`
  font-weight: 600;
  text-decoration: none;
  color: currentColor;
  transition: all 150ms ease-in-out;

  span {
    margin-left: 1em;
    transform: translateX(-8px);
    display: inline-block;
    transition: transform 400ms ease-in-out;
  }
`

const ProjectCardImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  padding-left: 1em;
  padding-right: 1em;

  .thumbnail {
    max-width: 500px;
    width: 100%;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
    border-radius: 24px;
    transform: scale(0.97);
    transition: all 800ms ease;
  }
`

const ProjectCardImageLogo = styled.div`
  position: absolute;
  color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 40%;
  opacity: 0;
  transition: all 400ms ease-in-out;

  img {
    border-radius: 20px;
    transition: all 400ms ease-in-out;
  }
`

const ProjectCard = ({ title, description, thumbnail, logo, uid}) => (
  <ProjectCardContainer to={`/work/${uid}`}>
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
      <img class="thumbnail" src={thumbnail} alt={"An image of "+title} />
      <ProjectCardImageLogo className="ProjectCardImageLogo" >
        <img src={logo} alt={logo+" logo"} />
      </ProjectCardImageLogo>
    </ProjectCardImageContainer>
  </ProjectCardContainer>
)

export default ProjectCard;
