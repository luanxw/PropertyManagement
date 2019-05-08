import React, { Component } from 'react';
import { Button, Table, Pagination, Message } from '@alifd/next';

const mockData = [
  {
    number: '浙执77号',
  },
  {
    number: '浙执78号',
  },
  {
    number: '浙执79号',
  },
  {
    number: '浙执80号',
  },
  {
    number: '浙执81号',
  },
  {
    number: '浙执82号',
  },
];

export default class ListTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1,
    };
  }

  handleClick = () => {
    Message.success('暂不支持办理');
  };

  onPageChange = (current) => {
    this.setState({
      current,
    });
  };

  render() {
    const actionRender = () => {
      return (
        <Button style={styles.button} onClick={this.handleClick}>
          充值
        </Button>
      );
    };

    return (
      <div style={styles.container}>
        <Table dataSource={mockData} primaryKey="number" style={styles.table}>
          <Table.Column align="center" title="姓名" dataIndex="number" />
          <Table.Column align="center" title="房屋信息" dataIndex="address" />
          <Table.Column align="center" title="邮箱" dataIndex="email" />
          <Table.Column align="center" title="联系方式" dataIndex="call" />
          <Table.Column align="center" title="身份证号" dataIndex="idcard" />
          <Table.Column align="center" title="费用" dataIndex="money" />
          <Table.Column
            align="center"
            title="线上/线下"
            dataIndex="difficulty"
          />
          <Table.Column align="center" title="物业费" dataIndex="property" />
          <Table.Column align="center" title="水费" dataIndex="water" />
          <Table.Column align="center" title="电费" dataIndex="electricity" />
          <Table.Column align="center" title="操作" cell={actionRender} />
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
    margin: '20px 0',
  },
  pagination: {
    textAlign: 'center',
    marginBottom: '20px',
  },
};
