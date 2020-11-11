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
      transition: all 150ms ease-in-out;

      .ProjectCardAction {
        color: blue;
        transition: all 150ms ease-in-out;

        span {
          transform: translateX(0px);
          opacity: 1;
          transition: transform 150ms ease-in-out;
        }
      }

      .ProjectCardContent::before {
        opacity: 0.02;
        transition: all 150ms ease-in-out;
      }

      .ProjectCardImageContainer::before {
        box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.1);
        opacity: 0.2;
        transition: all 150ms ease-in-out;
      }
    }
`

const ProjectCardContent = styled("div")`
    background: none;
    padding: 1em 3em 2.25em 0;
    position: relative;

    &:before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: none;
        mix-blend-mode: multiply;
        opacity: 0;
        transition: all 150ms ease-in-out;
    }
`

const ProjectCardCategory = styled("h6")`
    font-weight: 600;
    color: grey;
`

const ProjectCardTitle = styled("h3")`
    margin-bottom: 0.5em;
    margin-top: 0px;
`

const ProjectCardBlurb = styled("div")`
    margin-bottom: 0.5em;
    margin-top: 0.5em;
    margin-bottom: 5em;
`

const ProjectCardAction = styled("div")`
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

const ProjectCardImageContainer = styled("div")`
    background: darkgrey;
    box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.06);
    display: flex;
    justify-content: center;
    align-items: flex-end;
    overflow: hidden;
    position: relative;
    padding-left: 2em;
    padding-right: 2em;

    &:before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: blue;
        mix-blend-mode: multiply;
        opacity: 0;
        transition: all 150ms ease-in-out;
    }

    img {
        max-width: 400px;
        width: 100%;
        box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.04);
    }
`

const ProjectCard = ({ title, description, thumbnail, uid}) => (
    <ProjectCardContainer to={`/work/${uid}`}>
        <ProjectCardContent className="ProjectCardContent">
            <ProjectCardTitle>
                {title}
            </ProjectCardTitle>
            <ProjectCardBlurb>
                {description}
            </ProjectCardBlurb>
            <ProjectCardAction className="ProjectCardAction">
                View case <span>&#8594;</span>
            </ProjectCardAction>
        </ProjectCardContent>
        <ProjectCardImageContainer className="ProjectCardImageContainer">
            Afbeelding
        </ProjectCardImageContainer>
    </ProjectCardContainer>
)

export default ProjectCard;
