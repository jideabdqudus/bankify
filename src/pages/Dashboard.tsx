import { useState } from "react";
import { Layout } from "antd";
import { useSelector, useDispatch } from "react-redux";

import Sidebar from "../layouts/Sidebar";
import { Dash } from "../components";
import { IApp, IDepositData, IWithdrawData } from "../type.d";
import { deposit, error, withdraw } from "../actions/appActions.js";

interface Props {}

export const Dashboard: React.FC<Props> = () => {
  const state = useSelector((state: IApp) => state);
  const dispatch = useDispatch();
  const { Content } = Layout;
  const [visibility, setVisibility] = useState<boolean>(false);
  const [visibilityToo, setVisibilityToo] = useState<boolean>(false);
  const [depositData, setDepositData] = useState<IDepositData>({
    depositor: "",
    amount: 0,
    type: "",
    recipient: "jideabdqudus",
    desc: "",
  });
  const [withdrawData, setWithdrawData] = useState<IWithdrawData>({
    owner: "jideabdqudus",
    amount: 0,
    desc: "",
  });
  const showDrawer = () => {
    setVisibility(true);
  };
  const showDrawerToo = () => {
    setVisibilityToo(true);
  };
  const onClose = () => {
    setVisibility(false);
  };
  const onCloseToo = () => {
    setVisibilityToo(false);
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDepositData({ ...depositData, [e.target.name]: e.target.value });
  };
  const onChangeToo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWithdrawData({ ...withdrawData, [e.target.name]: e.target.value });
  };
  const onFinishToo = () => {
    if (
      Math.sign(state.appReducer.balance) === -1 ||
      Math.sign(state.appReducer.balance - withdrawData.amount) === -1
    ) {
      dispatch(error());
    } else {
      dispatch(withdraw(withdrawData));
    }
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
              visibilityToo={visibilityToo}
              withdrawData={withdrawData}
              onChangeToo={onChangeToo}
              showDrawerToo={showDrawerToo}
              onCloseToo={onCloseToo}
              onFinishToo={onFinishToo}
            />
          </div>
          <h5>©2021 Jide Abdul-Qudus || The Qoder</h5>
        </Content>
      </Layout>
    </Layout>
  );
};
