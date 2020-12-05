import styled from "@emotion/styled"
import { rhythm } from "../utils/typography"

const IntroTable = styled.div`
  table {
    line-height: 1.4rem;
  }

  th {
    text-transform: uppercase;
    font-size: 0.8rem;
    color: #888;
  }

  td {
    font-size: 0.9rem;
    color: #444;
  }

  td, th {
    border-bottom: 0;
    padding-top: ${rhythm(0.2)};
    padding-bottom: ${rhythm(0.2)};
  }
`

export default IntroTable;