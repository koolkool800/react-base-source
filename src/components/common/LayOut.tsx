import {
  HomeOutlined,
  LineChartOutlined,
  MoneyCollectOutlined,
  DownOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { Avatar, Layout, Menu, Typography, Dropdown, Space } from "antd";
import type { MenuProps } from "antd";

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { RoutesName } from "../../routes";
import AvatarUser from "./avatar-user";
import ButtonCustom from "../design/button";
import { useAuth } from "../../context/auth-context";

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;
const siderBar = [
  {
    key: "1",
    icon: <HomeOutlined />,
    label: "Event Management",
    route: RoutesName.EVENT,
  },
  {
    key: "2",
    icon: <MoneyCollectOutlined />,
    label: "Prices",
    route: "/crypto",
  },
  {
    key: "3",
    icon: <LineChartOutlined />,
    label: "Chart",
    route: "/chart",
  },
];
export interface LayoutProps {
  children: React.ReactNode;
}
const LayOut = (props: LayoutProps) => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  return (
    <Layout>
      <Sider breakpoint="lg" collapsedWidth="0" width="300">
        <Link to="/" className="logo">
          <Avatar src="https://www.blockchain.com/explorer/_next/static/media/logo.7e5cedb5.svg" />
          <Title level={4}>Blockchain.com</Title>
        </Link>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[
            String(
              siderBar.findIndex(
                (bar) => bar.route === window.location.pathname
              ) + 1
            ),
          ]}
          items={siderBar.map((bar, index) => ({
            key: String(index + 1),
            icon: bar.icon,
            label: bar.label,
            onClick: () => navigate(bar.route),
          }))}
        />

        <ButtonCustom
          content="Logout"
          onClick={() => {
            logout();
            navigate("/authen");
          }}
        />
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 24, display: "flex", justifyContent: "flex-end" }}
        >
          {/* <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <AvatarUser />
                <DownOutlined />
              </Space>
            </a>
          </Dropdown> */}
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: "100vh" }}
          >
            {props.children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
            color: "#fff",
          }}
        >
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Blockchain.com
            <br />
            by 🚀
            <a
              href="https://github.com/votruongsanh"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#A5C9CA" }}
            >
              Võ Trường Sanh
            </a>
          </Typography.Title>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default LayOut;
