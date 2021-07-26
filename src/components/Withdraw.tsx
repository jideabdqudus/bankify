import React from "react";
import { Form, Col, Row, Input, Table, Button } from "antd";
import { IWithdrawData } from "../type.d";

interface Props {
  withdrawals?: [];
  onChangeToo: () => void;
  onFinishToo: () => void;
  withdrawData: IWithdrawData;
}

export const Withdraw: React.FC<Props> = ({
  withdrawals,
  withdrawData,
  onChangeToo,
  onFinishToo,
}) => {
  const columns = [
    {
      title: "Owner",
      dataIndex: "owner",
      key: "owner",
    },
    {
      title: "Amount ($)",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Description",
      dataIndex: "desc",
      key: "desc",
    },
  ];

  const { desc, amount, owner } = withdrawData;

  return (
    <div>
      <Form layout="vertical" hideRequiredMark onFinish={onFinishToo}>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="name" label="Account Owner">
              {console.log(owner)}
              <Input type="name" name="depositor" value={owner} disabled />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="number"
              label="Amount"
              rules={[{ required: true, message: "Please input the amount" }]}
            >
              <Input
                placeholder="Please input the amount"
                type="number"
                onChange={onChangeToo}
                name="amount"
                value={amount}
              />
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
                onChange={onChangeToo}
                placeholder="Please enter a description"
              />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Withdraw
          </Button>
        </Form.Item>
      </Form>
      <h1>Withdrawals</h1>
      <Table columns={columns} dataSource={withdrawals} />
    </div>
  );
};
