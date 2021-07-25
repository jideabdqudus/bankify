import { Fragment } from "react";
import { Row, Col } from "antd";

import { LoginForm } from "../components/index";

export const Login = () => {
  return (
    <div>
      <Fragment>
        <div>
          <div className="container">
            <Row className="loginRow">
              <Col span={24} className="loginHeading">
                 
                <LoginForm />
              </Col>
            </Row>
          </div>
        </div>
      </Fragment>
    </div>
  );
};
