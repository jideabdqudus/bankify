import { useState } from "react";

import { Layout } from "antd";
import { useSelector } from "react-redux";

import Sidebar from "../layouts/Sidebar";
import { Dash } from "../components";
import { IApp } from "../type.d";

interface Props {}

export const Dashboard: React.FC<Props> = () => {
  const state = useSelector((state: IApp) => state);
  const { Content } = Layout;
  const [visibility, setVisibility] = useState<Boolean>(false);
  const showDrawer = () => {
    setVisibility(true);
  };
  const onClose = () => {
    setVisibility(false);
  };
  return (
    <Layout className="layout">
      <Sidebar />
      <Layout className="site-layout layout">
        <Content className="content">
          <h1>ACCOUNT OVERVIEW</h1>
          <div className="site-layout-background">
            <Dash state={state} showDrawer={showDrawer} visibility={visibility} onClose={onClose} />
          </div>
          <h5>©2021 Jide Abdul-Qudus || The Qoder</h5>
        </Content>
      </Layout>
    </Layout>
  );
};
