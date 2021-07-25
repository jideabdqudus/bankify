import { Layout } from "antd";

import Sidebar from "../layouts/Sidebar";
import { Dash } from "../components";

export const Dashboard = () => {
  const { Content } = Layout;
  return (
    <Layout className="layout">
      <Sidebar />
      <Layout className="site-layout layout">
        <Content className="content">
          <h1>ACCOUNT OVERVIEW</h1>
          <div className="site-layout-background">
            <Dash />
          </div>
          <h5>©2021 Jide Abdul-Qudus || The Qoder</h5>
        </Content>
      </Layout>
    </Layout>
  );
};
