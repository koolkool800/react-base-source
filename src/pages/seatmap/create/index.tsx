import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SeatPickerComponent from "../../../components/seat-picker";
import ButtonCustom from "../../../components/design/button";
import { RoutesName } from "../../../routes";
import { PlusOutlined } from "@ant-design/icons";

import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  Radio,
  Select,
  Space,
  Upload,
} from "antd";
import { eventTypeContants } from "../../../constants/event/enum";

const CreateEventPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <ButtonCustom
        content="Back"
        onClick={() => {
          navigate(RoutesName.EVENT);
        }}
      />
      <App />
    </div>
  );
};

export default CreateEventPage;

interface IEventCreateForm {}
const App: React.FC = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("horizontal");

  const buttonItemLayout =
    formLayout === "horizontal"
      ? { wrapperCol: { span: 14, offset: 4 } }
      : null;

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <Form
      layout={"vertical"}
      form={form}
      initialValues={{ layout: "vertical" }}
      style={{ maxWidth: 800 }}
    >
      <Form.Item label="Form Layout" name="layout">
        <Radio.Group value={formLayout}>
          <Radio.Button value="horizontal">Horizontal</Radio.Button>
          <Radio.Button value="vertical">Vertical</Radio.Button>
          <Radio.Button value="inline">Inline</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Event name">
        <Input placeholder="Enter event name " />
      </Form.Item>

      <Form.Item label="Event Type">
        <Select>
          {Object.keys(eventTypeContants).map((type) => (
            <Select.Option value={type}>{type}</Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item label="Performance Date">
        <DatePicker />
      </Form.Item>

      <Form.Item label="Place">
        <Input placeholder="Enter place " />
      </Form.Item>

      <Space>
        <Form.Item label="Platform fee (Buyer)">
          <Input placeholder="Enter fee (%)" />
        </Form.Item>
        <Form.Item label="Commission fee (Seller)">
          <Input placeholder="Enter fee ($)" />
        </Form.Item>
      </Space>

      <Form.Item
        label="Upload cover image"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        isList={false}
      >
        <Upload action="/upload.do" listType="picture-card">
          <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
          </div>
        </Upload>
      </Form.Item>

      <Form.Item>
        <SeatPickerComponent />
      </Form.Item>

      <Form.Item {...buttonItemLayout}>
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
  );
};
