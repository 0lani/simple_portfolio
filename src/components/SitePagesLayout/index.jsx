import React from "react"
import Header from "../HomepageLayout/Sections/Header"
import Banner from "./Sections/Banner"
import Footer from "../HomepageLayout/Sections/Footer"

const SitePagesLayout = ({ location }) => (
  <React.Fragment>
    <header>
      <Header location={location} />
    </header>
    <main>
      <section>
        <Banner />
      </section>
    </main>
    <footer>
      <Footer />
    </footer>
  </React.Fragment>
)

export default SitePagesLayout
