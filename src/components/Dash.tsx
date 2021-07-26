import { Fragment } from "react";
import { Card, Row, Col, Button, Badge, Drawer, Alert } from "antd";

import Plan from "../assets/emergency-plan-2.6855725.svg";
import Savings from "../assets/saving-plans.8ae6bb5.svg";
import Chart from "../assets/naira_funds_blue.77b50e2.svg";
import Drop from "../assets/plan.bffb472.svg";
import Box from "../assets/giftbox-white.90fb8b4.svg";
import Fire from "../assets/fire.svg";
import { IApp, IDepositData, IWithdrawData } from "../type.d";
import { Deposit, Withdraw } from "../components";
interface Props {
  state: IApp;
  showDrawer: () => void;
  onClose: () => void;
  onChange: any;
  onFinish: () => void;
  showDrawerToo: () => void;
  onCloseToo: () => void;
  onChangeToo: any;
  onFinishToo: () => void;
  depositData: IDepositData;
  withdrawData: IWithdrawData;
  visibility: boolean;
  visibilityToo: boolean;
  setVisibility?: boolean;
}

export const Dash: React.FC<Props> = ({
  state,
  showDrawer,
  onClose,
  visibility,
  onChange,
  onFinish,
  depositData,
  showDrawerToo,
  onCloseToo,
  onChangeToo,
  onFinishToo,
  visibilityToo,
  withdrawData,
}) => {
  const { balance, monetary, deposits, withdrawals, alert } = state.appReducer;
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
                  <sup>$</sup>
                  {`${balance}`
                    .toString()
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                  <sub>.00</sub>
                </h2>
              </Col>
            </Row>
          </Col>
          <Col
            span={4}
            className="dashBalance"
            style={{ marginBottom: "10px" }}
          >
            <Button className="myBtn" onClick={showDrawer}>
              Deposit
            </Button>
            <br />
            <Button
              className="myBtn"
              style={{ backgroundColor: "#FFDB00" }}
              onClick={showDrawerToo}
            >
              Withdraw
            </Button>

            <Drawer
              title="Make a Deposit"
              width={720}
              onClose={onClose}
              visible={visibility}
              bodyStyle={{ paddingBottom: 80 }}
            >
              <Deposit
                deposits={deposits}
                depositData={depositData}
                onChange={onChange}
                onFinish={onFinish}
              />
            </Drawer>

            <Drawer
              title="Make a Withdrawal"
              width={720}
              onClose={onCloseToo}
              visible={visibilityToo}
              bodyStyle={{ paddingBottom: 80 }}
            >
              {alert && (
                <Alert message={alert} type="error" showIcon closable />
              )}
              <Withdraw
                withdrawals={withdrawals}
                withdrawData={withdrawData}
                onChangeToo={onChangeToo}
                onFinishToo={onFinishToo}
              />
            </Drawer>
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
                  <sup>$</sup>
                  {`${monetary?.maturity}`
                    .toString()
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
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
                  <div className="invest-div">
                    <p>Net worth</p>
                    <h1>
                      ${" "}
                      {`${monetary?.worth}`
                        .toString()
                        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                    </h1>
                    <Badge color="blue" text="Savings" className="badged" />
                    <Badge color="cyan" text="Investments" className="badged" />
                    <Badge color="grey" text="Stash" className="badged" />
                  </div>
                </Col>
                <Col span={12} className="left">
                  <Col span={24}>
                    <h2>
                      Savings
                      <span>
                        <sup>$</sup>
                        {`${monetary?.savings}`
                          .toString()
                          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                        <sub>.40</sub>
                      </span>
                    </h2>
                  </Col>
                  <Col span={24}>
                    <h2>Investments</h2>
                    <span>
                      <sup>$</sup>
                      {`${monetary?.investment}`
                        .toString()
                        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                      <sub>.00</sub>
                    </span>
                  </Col>
                  <Col span={24}>
                    <h2>Stash</h2>
                    <span>
                      <sup>$</sup>{" "}
                      {`${monetary?.stash}`
                        .toString()
                        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                      <sub>.00</sub>
                    </span>
                  </Col>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={6} className="dashAppetiteScore">
            <Row>
              <Col span={24}>
                <Card title="SAVING SCORE" className="card-appetite">
                  <h1>
                    70<span>/100</span>
                  </h1>
                </Card>
              </Col>
              <Col span={24}>
                <Card title="RISK APPETITE" className="risk-appetite">
                  <img src={Fire} alt="Burning Appetite" />
                  <span>You're Balanced</span>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};
