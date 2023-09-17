import React from "react";
import { Form, Input, Button, Layout, notification } from "antd";
import "./index.css";
import { useAuth } from "../../context/auth-context";
import axios from "axios";
import { ApiResponse } from "../../types/response-axios";
import { User } from "../../types/user";
import { NotificationPlacement } from "antd/lib/notification";
import Toast from "../../components/design/toast";
import { unstable_HistoryRouter, useNavigate } from "react-router-dom";

const { Content } = Layout;

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate(); // Get the history object

  const onFinish = async (values: any) => {
    try {
      const response = await axios.post<
        ApiResponse<{ accessToken: string; user: User }>
      >(`${process.env.REACT_APP_BASE_URL}/api/v1/auth/sign-in`, {
        email: values.email,
        password: values.password,
      });

      if (response.data) {
        const userData = response.data.data;
        login(userData);
        navigate("/");
        notification.success({
          message: "Login Successful",
          description: "You are now logged in.",
        });
      } else {
        notification.error({
          message: "Login Failed",
          description: "Please check your credentials and try again.",
        });
      }
    } catch (error) {
      console.log("Error", error);
      notification.error({
        message: "Login Failed",
        description:
          "An error occurred while logging in. Please try again later.",
      });
    }
  };

  return (
    <Layout className="layout">
      <Content className="content">
        <div className="login-form">
          <h1>Login</h1>
          <Form name="basic" onFinish={onFinish}>
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input placeholder="Username" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Log In
              </Button>
            </Form.Item>
            <Toast content="hihi" />
          </Form>
        </div>
      </Content>
    </Layout>
  );
};

export default LoginPage;
