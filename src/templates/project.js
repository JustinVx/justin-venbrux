import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Header from "../components/header"
import Footer from "../components/footer"
import styled from "@emotion/styled"
import { rhythm } from "../utils/typography"
import SEO from "../components/seo"

import HeroImage from "../components/heroImage"
import RegularBlock from "../components/regularBlock"
import Title from "../components/title"
import SubTitle from "../components/subTitle"
import IntroText from "../components/introText"
import Gallery from "../components/gallery"
import Wide from "../components/wide"

const shortcodes = { HeroImage, RegularBlock, Title, SubTitle, IntroText, Gallery, Wide }

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  padding-top: ${rhythm(1.5)};
  padding-bottom: ${rhythm(2)};
`

export default function BlogPost({ data }) {
  const post = data.mdx
  return (
    <>
      <SEO title={post.frontmatter.title} description={post.frontmatter.description} />
      <Header />
      <ProjectContainer>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>
            {post.body}
          </MDXRenderer>
        </MDXProvider>
      </ProjectContainer>
      <Footer />
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
      }
    }
  }
`