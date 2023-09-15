import {
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
} from "@ant-design/icons";
import React, { useMemo } from "react";
import { Button, Divider, Space, notification } from "antd";
import { NotificationPlacement } from "antd/lib/notification";

const Context = React.createContext({ name: "Default" });

type ToastProps = {
  content: string;
};

const Toast = (props: ToastProps) => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement: NotificationPlacement) => {
    api.info({
      message: `Notification`,
      description: (
        <Context.Consumer>{({ name }) => props.content}</Context.Consumer>
      ),
      placement,
    });
  };

  const contextValue = useMemo(() => ({ name: "Ant Design" }), []);

  return (
    <Context.Provider value={contextValue}>
      {contextHolder}
      <Space>
        <Button
          type="primary"
          onClick={() => openNotification("topRight")}
          icon={<RadiusUprightOutlined />}
        >
          topRight
        </Button>
      </Space>
    </Context.Provider>
  );
};

export default Toast;
