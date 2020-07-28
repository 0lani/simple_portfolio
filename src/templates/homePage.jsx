import React from "react"

import HomepageLayout from "../components/HomepageLayout"
import Seo from "../components/Seo"

const IndexPage = ({ location }) => (
  <React.Fragment>
    <Seo title={`Home`} />
    <HomepageLayout location={location} />
  </React.Fragment>
)

export default IndexPage
