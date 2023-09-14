import { UserOutlined } from "@ant-design/icons";
import React from "react";
import { Avatar, Badge, Space } from "antd";

const AvatarUser: React.FC = () => (
  <Space size={24}>
    <Badge count={1}>
      <Avatar shape="square" icon={<UserOutlined />} />
    </Badge>
  </Space>
);

export default AvatarUser;
