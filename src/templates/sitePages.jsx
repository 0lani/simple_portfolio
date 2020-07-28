import React from "react"

import SitePagesLayout from "../components/SitePagesLayout"
import Seo from "../components/Seo"

const SitePages = ({ location }) => (
  <React.Fragment>
    <Seo title={`Home`} />
    <SitePagesLayout location={location} />
  </React.Fragment>
)

export default SitePages
