import React, { Component } from 'react';
import { Table, Pagination, Message } from '@alifd/next';

const mockData = [
  {
    number: '( 2018 ) 浙执1号',
    applicant: '淘小宝',
    execution: '某某公司',
    department: '执行局',
    holder: '淘小宝',
    status: '业务庭分案',
  },
  {
    number: '( 2018 ) 浙执2号',
    applicant: '淘小宝',
    execution: '某某公司',
    department: '执行局',
    holder: '淘小宝',
    status: '办理中',
  },
  {
    number: '( 2018 ) 浙执3号',
    applicant: '淘小宝',
    execution: '某某公司',
    department: '执行局',
    holder: '淘小宝',
    status: '申请归档',
  },
  {
    number: '( 2018 ) 浙执4号',
    applicant: '淘小宝',
    execution: '某某公司',
    department: '执行局',
    holder: '淘小宝',
    status: '申请报结',
  },
  {
    number: '( 2018 ) 浙执5号',
    applicant: '淘小宝',
    execution: '某某公司',
    department: '执行局',
    holder: '淘小宝',
    status: '立案',
  },
  {
    number: '( 2018 ) 浙执6号',
    applicant: '淘小宝',
    execution: '某某科技公司',
    department: '执行局',
    holder: '淘小宝',
    status: '办理中',
  },
];

export default class AllocationTable extends Component {
  handleClick = () => {
    Message.success('需要管理员账户才能分配账号');
  };

  constructor(props) {
    super(props);
    this.state = {
      current: 1,
    };
  }

  onPageChange = (current) => {
    this.setState({
      current,
    });
  };

  render() {
    return (
      <div style={styles.container}>
        <Table dataSource={mockData} primaryKey="number" style={styles.table}>
          <Table.Column align="center" title="账号" dataIndex="number" />
          <Table.Column align="center" title="姓名" dataIndex="name" />
          <Table.Column align="center" title="房屋地址" dataIndex="address" />
          <Table.Column
            align="center"
            title="使用情况"
            dataIndex="department"
          />
          <Table.Column align="center" title="联系方式" dataIndex="number" />
          <Table.Column align="center" title="价格" dataIndex="number" />
          <Table.Column align="center" title="房屋格局信息" dataIndex="status" />
          <Table.Column align="center" title="时间" dataIndex="time" />
        </Table>
        <div style={styles.pagination}>
          <Pagination
            current={this.state.current}
            onChange={this.onPageChange}
          />
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    margin: '0 20px',
    letterSpacing: '2px',
  },
  button: {
    margin: '0 8px',
    letterSpacing: '2px',
  },
  table: {
    margin: '15px 0',
  },
  pagination: {
    textAlign: 'center',
    marginBottom: '15px',
  },
};