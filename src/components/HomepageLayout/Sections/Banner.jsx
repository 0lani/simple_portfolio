import React from "react"
// import PropTypes from "prop-types"
import { Icon, Row, Col } from "antd"
import landingImg from "../../../resources/images/cyberworks-landing-image.png"
import VisibilitySensor from "react-visibility-sensor"
import { Spring } from "react-spring/renderprops"
import "../../../resources/less/banner.less"

const Banner = props => {
  const styles = {
    articleStyles: {
      backgroundImage: `url(${landingImg})`,
      backgroundPosition: `center`,
      backgroundSize: `cover`,
      backgroundRepeat: `no-repeat`,
    },
    rowStyles: { marginRight: `40vw` },
    colStyles: { marginTop: `17vh`, fontSize: `1.1rem` },
    toProps: isVisible => {
      return {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? `translateX(0)` : `translateX(100px)`,
      }
    },
  }
  return (
    <React.Fragment>
      <VisibilitySensor partialVisibility={true} delayedCall={true}>
        {({ isVisible }) => (
          <article style={styles.articleStyles} className="page banner-wrapper">
            <Spring delay={300} to={styles.toProps(isVisible)}>
              {props => (
                <React.Fragment>
                  <Row
                    className="page"
                    id="banner"
                    type="flex"
                    justify="center"
                    align="top"
                    style={styles.rowStyles}
                  >
                    <Col
                      style={styles.colStyles}
                      className="banner-text-wrapper"
                    >
                      <h2 style={{ ...props, marginBottom: 0 }}>
                        CYBER <p style={{ marginTop: 0 }}>SOLUTIONS</p>
                      </h2>
                      <p style={{ fontSize: `1.1rem` }}>
                        Harness the power of Modern IT
                      </p>
                      <span className="line" key="line" />
                      <div key="button1" className="start-button clearfix">
                        <a>Get Started</a>
                      </div>
                      <Icon type="down" className="down" />
                    </Col>
                  </Row>
                </React.Fragment>
              )}
            </Spring>
          </article>
        )}
      </VisibilitySensor>
    </React.Fragment>
  )
}

export default Banner
