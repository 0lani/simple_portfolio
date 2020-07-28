import React from "react"
import { Row, Col } from "antd"
import "../../../resources/less/footer.less"

const Footer = () => (
  <React.Fragment>
    <div className="dark">
      <Row className="footer-wrap">
        <Col lg={6} sm={24} xs={24}>
          <div className="footer-center">
            <h2>Partners</h2>
            <div>
              <a target="_blank ">content here</a>
            </div>
            <div>
              <a>content here</a>
            </div>
            <div>
              <a>content here</a>
            </div>
            <div>
              <a>content</a>
              <span> - </span>
              here
            </div>
            <div>
              <a target="_blank ">content here</a>
            </div>
            <div>
              <a target="_blank ">content here</a>
            </div>
          </div>
        </Col>
        <Col lg={6} sm={24} xs={24}>
          <div className="footer-center">
            <h2>Services</h2>
            <div>
              <a>content</a>
              <span> - </span>
              here
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer">
                content
              </a>
              {` `}- here
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer">
                content
              </a>
              {` `}- here
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer">
                content
              </a>
              <span> - </span>
              here
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer">
                content
              </a>
              <span> - </span>
              here
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer">
                content
              </a>
              <span> - </span>
              here
            </div>
          </div>
        </Col>
        <Col lg={6} sm={24} xs={24}>
          <div className="footer-center">
            <h2>Promotions</h2>
            <div>
              <a>content here</a>
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer">
                content here
              </a>
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer">
                content here
              </a>
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer">
                content here
              </a>
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer">
                content here
              </a>
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer">
                content here
              </a>
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer">
                content here
              </a>
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer">
                Content here
              </a>
            </div>
          </div>
        </Col>
        <Col lg={6} sm={24} xs={24}>
          <div className="footer-center">
            <h2>Contact</h2>
            <div>
              <a target="_blank" rel="noopener noreferrer">
                content
              </a>
              <span> - </span>
              here
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer">
                content
              </a>
              <span> - </span>
              here
            </div>
          </div>
        </Col>
      </Row>
    </div>
    <Row className="bottom-bar">
      <Col lg={4} sm={24} />
      <Col lg={20} sm={24}>
        <span
          style={{
            lineHeight: `16px`,
            paddingRight: 12,
            marginRight: 11,
          }}
        ></span>
        <span style={{ marginRight: 24 }}></span>
        <span
          style={{
            marginRight: 12,
            lineHeight: `16px`,
            paddingRight: 12,
            borderRight: `1px solid rgba(255, 255, 255, 0.55)`,
          }}
        >
          Copyright ©{new Date().getFullYear()}
        </span>
        <span style={{ marginRight: 12 }}>
          <a href="https://cyberworks.tech"> {`  `}Powered by CyberWorks</a>
        </span>
      </Col>
    </Row>
  </React.Fragment>
)

export default Footer
