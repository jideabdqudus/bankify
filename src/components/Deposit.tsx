import React from "react";
import { Form, Col, Row, Input, Table, Tag, Button } from "antd";
import { IDepositData } from "../type.d";

interface Props {
  deposits?: [];
  onChange: () => void;
  onFinish: () => void;
  depositData: IDepositData;
}

export const Deposit: React.FC<Props> = ({
  deposits,
  depositData,
  onChange,
  onFinish,
}) => {
  const columns = [
    {
      title: "Depositor",
      dataIndex: "depositor",
      key: "depositor",
    },
    {
      title: "Amount ($)",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Acct Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Recipient",
      dataIndex: "recipient",
      key: "recipient",
      render: () => (
        <>
          <Tag color={"green"} key="recipient">
            {"jideabdqudus"}
          </Tag>
        </>
      ),
    },
    {
      title: "Description",
      dataIndex: "desc",
      key: "desc",
    },
  ];

  const { depositor, desc, amount, type, recipient } = depositData;

  return (
    <div>
      <Form layout="vertical" hideRequiredMark onFinish={onFinish}>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="name"
              label="Depositor's Name"
              rules={[{ required: true, message: "Please enter user name" }]}
            >
              <Input
                placeholder="Please enter your name"
                type="name"
                name="depositor"
                value={depositor}
                onChange={onChange}
              />
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
              <Input
                placeholder="Please enter type of account"
                type="account"
                name="type"
                value={type}
                onChange={onChange}
              />
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
              <Input
                placeholder="Please input the amount"
                type="number"
                onChange={onChange}
                name="amount"
                value={amount}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="recipient" label="Recipient">
              {console.log(recipient)}
              <Input value={recipient} name="recipient" type="name" disabled />
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
              <Input.TextArea
                rows={4}
                value={desc}
                name="desc"
                onChange={onChange}
                placeholder="Please enter a description"
              />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Deposit
          </Button>
        </Form.Item>
      </Form>
      <h1>Deposits</h1>
      <Table columns={columns} dataSource={deposits} />
    </div>
  );
};
