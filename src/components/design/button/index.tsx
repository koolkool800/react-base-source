import React, { useState } from "react";
import { PoweroffOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";

type ButtonProps = {
  content: string;
  isLoading?: boolean;
  onClick?: () => void;
};

const ButtonCustom: React.FC<ButtonProps> = (props) => {
  return (
    <Space direction="vertical">
      <Space wrap>
        <Button
          type="primary"
          loading={props.isLoading}
          onClick={props.onClick}
        >
          {props.content}
        </Button>
      </Space>
    </Space>
  );
};

export default ButtonCustom;
