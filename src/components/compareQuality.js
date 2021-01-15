import React from "react"
import ReactCompareImage from 'react-compare-image'
import before from "../work/img/call-quality-before.jpg"
import after from "../work/img/call-quality-after.jpg"

export default function CompareQuality() {
  return (
    <ReactCompareImage leftImage={before} rightImage={after} />
  )
}