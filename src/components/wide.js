import styled from "@emotion/styled"
import { rhythm } from "../utils/typography"

const Wide = styled.div`
  width: 830px;
  margin-bottom: ${rhythm(1.5)};

  @media(max-width:900px) {
    width: 750px;
  }

  @media(max-width:768px) {
    width: 590px;
  }

  @media(max-width:595px) {
    width: 100%;
    padding-left: 16px;
    padding-right: 16px;
  }
`
export default Wide;