import React from "react";
import { Layout, Menu } from "antd";
import { BookOutlined, BankOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Sider } = Layout;
class Sidebar extends React.Component {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed: boolean) => {
    this.setState({ collapsed });
  };

  render() {
    return (
      <Sider className="sider">
        <div className="logo" style={{ marginTop: "140px" }} />
        <Menu
          defaultSelectedKeys={["1"]}
          mode="inline"
          style={{
            backgroundColor: "#f4f7fa",
            paddingBottom: "100%",
            marginBottom: "100%",
          }}
        >
          <Menu.Item
            // to="/"
            key="1"
            icon={
              <BankOutlined
                style={{
                  fontSize: "20px",
                  color: "#0a2e65",
                  marginRight: "40px",
                }}
              />
            }
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            <Link to="/dashboard">Home</Link>
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={
              <BookOutlined
                style={{
                  fontSize: "20px",
                  color: "#0a2e65",
                  marginRight: "40px",
                }}
              />
            }
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Plans
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default Sidebar;
