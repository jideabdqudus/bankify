import React from "react";
import { Form, Col, Row, Input, Select, InputNumber } from "antd";

interface Props {}

export const Deposit: React.FC<Props> = () => {
  const { Option } = Select;
  return (
    <Form layout="vertical" hideRequiredMark>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="name"
            label="Depositor's Name"
            rules={[{ required: true, message: "Please enter user name" }]}
          >
            <Input placeholder="Please enter your name" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="type"
            label="Account Type"
            rules={[
              { required: true, message: "Please select the account type" },
            ]}
          >
            <Select placeholder="Please select the account type">
              <Option value="xiao">Savings</Option>
              <Option value="mao">Current</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="number"
            label="Amount"
            rules={[{ required: true, message: "Please input the amount" }]}
          >
            <Input placeholder="Please enter your name" type="number" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="name" label="Recipient">
            <Input value="Qudus" name="name" type="name" disabled />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item
            name="description"
            label="Description"
            rules={[
              {
                required: true,
                message: "Please enter a description",
              },
            ]}
          >
            <Input.TextArea rows={4} placeholder="Please enter a description" />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
