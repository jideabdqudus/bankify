import React, { Fragment } from "react";
import { Card, Row, Col, Button, Badge } from "antd";

import Plan from "../assets/emergency-plan-2.6855725.svg";
import Savings from "../assets/saving-plans.8ae6bb5.svg";
import Chart from "../assets/naira_funds_blue.77b50e2.svg";
import Drop from "../assets/plan.bffb472.svg";
import Box from "../assets/giftbox-white.90fb8b4.svg";
import Fire from "../assets/fire.svg";

export const Dash = () => {
  return (
    <div>
      <Fragment>
        <Row>
          <Col span={4} className="dashBalance">
            <Row>
              <Col span={24} className="balance">
                Total Balance
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <h2>
                  <sup>₦</sup>
                  320,000
                  <sub>.40</sub>
                </h2>
              </Col>
            </Row>
          </Col>
          <Col
            span={4}
            className="dashBalance"
            style={{ marginBottom: "10px" }}
          >
            <Button className="myBtn">ADD MONEY</Button>
          </Col>
          <Col span={16} className="dashGrowth">
            <Row>
              <Col span={24} className="balance">
                Portfolio Growth
              </Col>
              <Col span={24}>
                <hr />
              </Col>
              <Col span={24}>
                <h3>Keep going you've started making money moves</h3>
              </Col>
            </Row>
          </Col>
        </Row>

        <div className="saveInvest">
          <h3 className="subhead">Save & Invest</h3>
          <Row gutter={[24, 24]}>
            <Col span={6} className="dashSavingsCard">
              <Card className="card-cta">
                <img src={Plan} alt="Emergency Plan" />
                <p>
                  <a href="#!">Build Emergency Funds</a>
                </p>
              </Card>
            </Col>
            <Col span={6} className="dashSavingsCard">
              <Card className="card-cta">
                <img src={Savings} alt="Savings Plan" />
                <p>
                  <a href="#!">My Savings Plan</a>
                </p>
              </Card>
            </Col>
            <Col span={6} className="dashSavingsCard">
              <Card className="card-cta">
                <img src={Chart} alt="Savings Plan" />
                <p>
                  <a href="#!">Invest in mutual funds</a>
                </p>
              </Card>
            </Col>
            <Col span={6} className="dashSavingsCard">
              <Card
                className="card-cta"
                style={{
                  backgroundImage: `url(${Drop})`,
                  boxShadow: "0 10px 14px 0 rgba(0,102,245,.37)",
                  paddingLeft: "30px",
                }}
              >
                <img src={Box} alt="Savings Plan" height="56px" width="56px" />
                <p>
                  <a style={{ color: "#fff" }} href="#!">
                    REFERRAL GIFTS
                  </a>
                </p>
              </Card>
            </Col>
          </Row>
        </div>
      </Fragment>

      <div className="myplans">
        <h3 className="subhead">My Plans</h3>
        <Row>
          <Col span={9} className="dashMaturityCard">
            <Badge.Ribbon text="REGULAR PLAN MATURITY">
              <Card className="card-plan">
                <p style={{ fontSize: "15px", fontWeight: 500 }}>
                  New House Purchase
                </p>
                <h2>
                  <sup>₦</sup>
                  247,900
                  <sub>.00</sub>
                </h2>
                <hr />
              </Card>
            </Badge.Ribbon>
          </Col>
        </Row>
        <Row gutter={[24, 24]} style={{ marginTop: "100px" }}>
          <Col span={18} className="dashInvestCard">
            <Card
              title="PORTFOLIO"
              style={{ borderRadius: "7px" }}
              extra={<a href="#!">GET INVESTMENT</a>}
            >
              <Row>
                <Col span={12} className="dashInvestItem">
                  <div style={{ textAlign: "center", marginBottom: "20px" }}>
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: 600,
                        marginTop: "60px",
                        marginBottom: "0px",
                        color: "rgb(10, 46, 101)",
                      }}
                    >
                      Net worth
                    </p>
                    <h1
                      style={{
                        fontSize: "30px",
                        fontWeight: 600,
                        paddingTop: "0px",
                        color: "rgb(10, 46, 101)",
                      }}
                    >
                      ₦646,000.00
                    </h1>

                    <Badge
                      color="blue"
                      text="Savings"
                      style={{ margin: "10px" }}
                    />
                    <Badge
                      color="cyan"
                      text="Investments"
                      style={{ margin: "10px" }}
                    />
                    <Badge
                      color="grey"
                      text="Stash"
                      style={{ margin: "10px" }}
                    />
                  </div>
                </Col>
                <Col span={12}>
                  <Col span={24}>
                    <h2
                      style={{
                        fontSize: "22px",
                        fontWeight: 600,
                        color: "rgb(10, 46, 101)",
                      }}
                    >
                      Savings
                      <p
                        style={{
                          fontSize: "1.5rem",
                          fontWeight: 600,
                          color: "#0a2e65",
                          opacity: ".5",
                        }}
                      >
                        <sup
                          style={{
                            fontSize: ".6rem",
                            fontWeight: 500,
                            top: "-1em",
                            marginRight: "4px",
                          }}
                        >
                          ₦
                        </sup>
                        549,000
                        <sub
                          style={{
                            bottom: ".02em",
                            marginLeft: "4px",
                            fontWeight: 700,
                            opacity: ".6",
                            fontSize: ".5em",
                          }}
                        >
                          .40
                        </sub>
                      </p>
                    </h2>
                  </Col>
                  <Col
                    span={24}
                    style={{
                      fontSize: "22px",
                      fontWeight: 600,
                      color: "rgb(10, 46, 101)",
                    }}
                  >
                    Investments
                    <p
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: 600,
                        color: "#0a2e65",
                        opacity: ".5",
                      }}
                    >
                      <sup
                        style={{
                          fontSize: ".6rem",
                          fontWeight: 500,
                          top: "-1em",
                          marginRight: "4px",
                        }}
                      >
                        ₦
                      </sup>
                      120,000
                      <sub
                        style={{
                          bottom: ".02em",
                          marginLeft: "4px",
                          fontWeight: 700,
                          opacity: ".6",
                          fontSize: ".5em",
                        }}
                      >
                        .00
                      </sub>
                    </p>
                  </Col>
                  <Col
                    span={24}
                    style={{
                      fontSize: "22px",
                      fontWeight: 600,
                      color: "rgb(10, 46, 101)",
                    }}
                  >
                    Stash
                    <p
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: 600,
                        color: "#0a2e65",
                        opacity: ".5",
                      }}
                    >
                      <sup
                        style={{
                          fontSize: ".6rem",
                          fontWeight: 500,
                          top: "-1em",
                          marginRight: "4px",
                        }}
                      >
                        ₦
                      </sup>
                      0
                      <sub
                        style={{
                          bottom: ".02em",
                          marginLeft: "4px",
                          fontWeight: 700,
                          opacity: ".6",
                          fontSize: ".5em",
                        }}
                      >
                        .00
                      </sub>
                    </p>
                  </Col>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={6} className="dashAppetiteScore">
            <Row>
              <Col span={24}>
                <Card
                  title="SAVING SCORE"
                  style={{ marginBottom: "20px", borderRadius: "7px" }}
                >
                  <h1 style={{ color: "rgb(10, 46,101)", fontSize: "50px" }}>
                    70<span style={{ fontSize: "20px" }}>/100</span>
                  </h1>
                </Card>
              </Col>
              <Col span={24}>
                <Card title="RISK APPETITE" style={{ borderRadius: "7px" }}>
                  <img
                    src={Fire}
                    alt="Burning Appetite"
                    height="56px"
                    width="56px"
                  />
                  <span
                    style={{
                      margin: "10px",
                      fontSize: "20px",
                      color: "gray",
                      fontWeight: 600,
                    }}
                  >
                    You're Balanced
                  </span>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};
