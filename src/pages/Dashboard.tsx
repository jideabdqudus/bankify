import { useState } from "react";
import { Layout } from "antd";
import { useSelector, useDispatch } from "react-redux";

import Sidebar from "../layouts/Sidebar";
import { Dash } from "../components";
import { IApp } from "../type.d";
import { deposit } from "../actions/appActions.js";

interface Props {}

export const Dashboard: React.FC<Props> = () => {
  const state = useSelector((state: IApp) => state);
  const dispatch = useDispatch()
  const { Content } = Layout;
  const [visibility, setVisibility] = useState<Boolean>(false);
  const [depositData, setDepositData] = useState({
    depositor: "",
    amount: null,
    type: null,
    recipient: "jideabdqudus",
    desc: null,
  });
  const showDrawer = () => {
    setVisibility(true);
  };
  const onClose = () => {
    setVisibility(false);
  };
  const onChange = (e: any) => {
    setDepositData({ ...depositData, [e.target.name]: e.target.value });
  };
  return (
    <Layout className="layout">
      <Sidebar />
      <Layout className="site-layout layout">
        <Content className="content">
          <h1>ACCOUNT OVERVIEW</h1>
          <div className="site-layout-background">
            <Dash
              state={state}
              showDrawer={showDrawer}
              visibility={visibility}
              onClose={onClose}
              depositData={depositData}
              onChange={onChange}
              onFinish={() => dispatch(deposit(depositData))}
            />
          </div>
          <h5>©2021 Jide Abdul-Qudus || The Qoder</h5>
        </Content>
      </Layout>
    </Layout>
  );
};
