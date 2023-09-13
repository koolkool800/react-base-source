import {
  HomeOutlined,
  LineChartOutlined,
  MoneyCollectOutlined,
} from "@ant-design/icons";
import { Avatar, Layout, Menu, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;
const siderBar = [
  {
    key: "1",
    icon: <HomeOutlined />,
    label: "Home",
  },
  {
    key: "2",
    icon: <MoneyCollectOutlined />,
    label: "Prices",
  },
  {
    key: "3",
    icon: <LineChartOutlined />,
    label: "Chart",
  },
];
export interface LayoutProps {
  children: React.ReactNode;
}
const LayOut = (props: LayoutProps) => {
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
          defaultSelectedKeys={["0"]}
          items={siderBar.map((bar, index) => ({
            key: String(index + 1),
            icon: bar.icon,
            label: bar.label,
          }))}
        />
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0 }}
        />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: "100%" }}
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
