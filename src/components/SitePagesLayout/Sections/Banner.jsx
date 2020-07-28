import React from "react"

import { Button } from "antd"
import QueueAnim from "rc-queue-anim"
import BannerImage from "./Content/BannerImage"
import "./Content/Banner.less"

class Banner extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <div className="home-page">
          <article className={`home-layout-wrapper home-banner`}>
            <div className="home-layout">
              <QueueAnim
                className={`home-banner-content-wrapper`}
                delay={300}
                ease="easeOutQuart"
              >
                <h1 key="h2">Services</h1>
                <p key="p">One service to fit all your needs</p>
                <span key="button">
                  <Button type="primary">Need Help?</Button>
                </span>
              </QueueAnim>
              <div className={`home-banner-image-wrapper`}>
                <BannerImage />
              </div>
            </div>
          </article>
          <div style={{ background: `#564078`, height: `100vh` }}></div>
        </div>
      </React.Fragment>
    )
  }
}

export default Banner
