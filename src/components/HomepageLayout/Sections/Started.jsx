import React from "react"
// import { graphql, useStaticQuery } from "gatsby"
import VisibilitySensor from "react-visibility-sensor"
import { animated, Spring, Trail } from "react-spring/renderprops"
import { Row, Col, Icon, Button } from "antd"
import "../../../resources/less/started.less"

import presentation from "../../../resources/images/presentation.png"
import action from "../../../resources/images/action_plan.png"
import experience from "../../../resources/images/exp_start.png"

const Started = () => {
  // const data = useStaticQuery(
  //   graphql`
  //     query Home_Started_Query {
  //       home_contents(
  //         filter: { tags: { elemMatch: { name: { eq: "started" } } } }
  //       ) {
  //         edges {
  //           node {
  //             acf {
  //               started_img {
  //                 localFile {
  //                   childImageSharp {
  //                     fluid {
  //                       src
  //                     }
  //                   }
  //                   name
  //                 }
  //               }
  //             }
  //             content
  //             slug
  //             title
  //           }
  //         }
  //       }
  //     }
  //   `
  // )

  const context = [
    {
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat similique officia quis, aut eaque unde autem soluta voluptate recusandae error dolore vel quas excepturi officiis odit, animi suscipit dolor labore.,",
      slug: "blank text",
      title: "blank text",
      acf: {
        service_img: {
          src: `${presentation}`,
        },
      },
    },
    {
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat similique officia quis, aut eaque unde autem soluta voluptate recusandae error dolore vel quas excepturi officiis odit, animi suscipit dolor labore.,",
      slug: "blank text",
      title: "blank text",
      acf: {
        service_img: {
          src: `${action}`,
        },
      },
    },
    {
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat similique officia quis, aut eaque unde autem soluta voluptate recusandae error dolore vel quas excepturi officiis odit, animi suscipit dolor labore.,",
      slug: "blank text",
      title: "blank text",
      acf: {
        started_img: {
          src: `${experience}`,
        },
      },
    },
  ]

  const child = context => {
    //  const filteredArray = []

    // context.forEach(inx => {
    //   const { node } = inx
    //   let index = parseInt(node.slug)
    //   let newNode = Object.assign({ slug: index }, node)
    //   filteredArray[index] = newNode
    // })

    return context.map(node => {
      const { content, slug, title } = node

      const imageStyle = {
        background: `url(${presentation}) no-repeat ${
          // eslint-disable-next-line quotes
          slug % 2 === 1 ? "right" : "left"
        } / 841px`,
        height: `511px`,
      }

      const innerContent = [
        // eslint-disable-next-line react/jsx-key
        <h2>{title}</h2>,
        // leave as is, dom wont paint in time
        // eslint-disable-next-line react/jsx-key
        <div
          style={{ maxWidth: 310, margin: `0 auto` }}
          dangerouslySetInnerHTML={{ __html: content }}
        />,
        // eslint-disable-next-line react/jsx-key
        <a>
          <Button type="primary" size="large">
            {`Step ${slug}`}
            <Icon type="right" />
          </Button>
        </a>,
      ]

      return (
        <React.Fragment key={slug}>
          <VisibilitySensor partialVisibility={true}>
            {({ isVisible }) => (
              <Row className="content-wrapper-started page">
                <Spring
                  delay={200}
                  to={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? `translateX(0)`
                      : `translateX(-200px)`,
                  }}
                >
                  {props => (
                    <Col
                      span={16}
                      style={{ ...props, ...imageStyle }}
                      className="image-wrapper-started"
                    />
                  )}
                </Spring>
                <Spring
                  delay={200}
                  to={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? `translateX(0)`
                      : `translateX(200px)`,
                  }}
                >
                  {props => (
                    <React.Fragment>
                      <Col
                        style={{ ...props }}
                        span={16}
                        className="text-wrapper"
                      >
                        <Trail
                          native
                          items={innerContent}
                          delay={450}
                          initial={null}
                          from={{ opacity: 0, x: -350 }}
                          to={{
                            opacity: isVisible ? 1 : 0.25,
                            x: isVisible ? 0 : 350,
                          }}
                        >
                          {content => ({ x, opacity }) => (
                            <animated.div
                              style={{
                                opacity,
                                transform: x.interpolate(
                                  x => `translate3d(${x}%,0,0)`
                                ),
                              }}
                            >
                              {content}
                            </animated.div>
                          )}
                        </Trail>
                      </Col>
                    </React.Fragment>
                  )}
                </Spring>
              </Row>
            )}
          </VisibilitySensor>
        </React.Fragment>
      )
    })
  }
  return (
    <React.Fragment>
      <article className="home-serve-wrapper">
        <Row type="flex" justify="center" className="home-layout">
          <Col span={24}>
            <VisibilitySensor partialVisibility={true} delayedCall={false}>
              {({ isVisible }) => (
                <Spring
                  delay={100}
                  to={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? `translateY(0)` : `translateY(50px)`,
                  }}
                >
                  {props => (
                    <React.Fragment>
                      <Row
                        type="flex"
                        justify="center"
                        style={{ ...props, marginBottom: `25vh` }}
                        className="home-serve"
                      >
                        <Col span={8}>
                          <h3 className="main-title">Getting Started</h3>
                          <i className="line" />
                        </Col>
                      </Row>
                    </React.Fragment>
                  )}
                </Spring>
              )}
            </VisibilitySensor>
            <Row>
              <Col span={24}>{child(context)}</Col>
            </Row>
          </Col>
        </Row>
      </article>
    </React.Fragment>
  )
}

export default Started
