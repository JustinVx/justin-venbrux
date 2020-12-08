import styled from "@emotion/styled"

const Gallery = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));

  .gatsby-resp-image-wrapper {
    width: 100%;
    margin-bottom: 0;
  }
`
export default Gallery;