import React, { Component } from 'react';
import { Button, Table, Pagination, Message } from '@alifd/next';
import SearchBar from './SearchBar';

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
];

export default class SelfhelpTable extends Component {
  static displayName = 'SelfhelpTable';

  constructor(props) {
    super(props);
    this.state = {
      current: 2,
    };
  }

  onPageChange = (current) => {
    this.setState({
      current,
    });
  };

  handleClick = () => {
    Message.success('暂不支持办理');
  };

  render() {
    const actionRender = () => {
      return (
        <Button style={styles.button} onClick={this.handleClick}>
         结束
        </Button>
      );
    };

    return (
      <div style={styles.container}>
        <SearchBar />
        <Table dataSource={mockData} primaryKey="number" style={styles.table}>
          <Table.Column align="center" title="账号" dataIndex="number" />
          <Table.Column align="center" title="房屋信息" dataIndex="address" />
          <Table.Column align="center" title="联系人" dataIndex="name" />
          <Table.Column align="center" title="联系方式" dataIndex="phone" />
          <Table.Column align="center" title="报修信息" dataIndex="text" />
          <Table.Column align="center" title="日期" dataIndex="data" />
          <Table.Column align="center" title="完成" cell={actionRender} />
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
