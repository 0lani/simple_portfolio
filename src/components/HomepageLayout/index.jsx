import React, { useRef } from "react"
import { Parallax } from "react-spring/renderprops-addons"
import BannerWrapper from "../ParallaxWrapper/BannerWrapper"
import ServicesWrapper from "../ParallaxWrapper/ServicesWrapper"
import StartedWrapper from "../ParallaxWrapper/StartedWrapper"
import FooterWrapper from "../ParallaxWrapper/FooterWrapper"
import Header from "./Sections/Header"
import Banner from "./Sections/Banner"
import Services from "./Sections/Services"
import Started from "./Sections/Started"
import Footer from "./Sections/Footer"

const HomepageLayout = ({ location }) => {
  const parallax = useRef(null)
  return (
    <React.Fragment>
      <header>
        <Header location={location} />
      </header>
      <Parallax pages={9.8} ref={parallax}>
        <main>
          <section id="home">
            <BannerWrapper offset={0} factor={1}>
              <Banner />
            </BannerWrapper>
          </section>
          <section id="services">
            <ServicesWrapper offset={1} factor={2}>
              <Services />
            </ServicesWrapper>
          </section>
          <section id="started">
            <StartedWrapper offset={3.2} factor={3}>
              <Started />
            </StartedWrapper>
          </section>
        </main>

        <FooterWrapper offset={0} factor={9.95}>
          <footer id="footer">
            <Footer />
          </footer>
        </FooterWrapper>
      </Parallax>
    </React.Fragment>
  )
}

export default HomepageLayout
