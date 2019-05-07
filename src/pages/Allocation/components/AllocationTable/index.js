import React, { Component } from 'react';
import { Button, Table, Pagination, Message } from '@alifd/next';

const mockData = [
  {
    number: '( 2018 ) 浙执1号', 
  },
  {
    number: '( 2018 ) 浙执2号', 
  },
  {
    number: '( 2018 ) 浙执3号', 
  },
  {
    number: '( 2018 ) 浙执4号',   
  },
  {
    number: '( 2018 ) 浙执5号',  
  },
  {
    number: '( 2018 ) 浙执6号',
   
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
    const actionRender = () => {
      return (
        <Button style={styles.button} onClick={this.handleClick}>
         删除
        </Button>        
      );
    };
    const actionRender1 = () => {
      return (
        <Button style={styles.button} onClick={this.handleClick}>
         修改
        </Button>        
      );
    };
    const buttons = [
      '添加',
    ];
    return (
      <div style={styles.container}>
      <div style={styles.buttons}> {buttons.map((text, index) => {
        return (
          <Button
            key={index}
            style={styles.button}
            onClick={() => this.handleClick(text)}
          >
            {text}
          </Button>
        );
      })}
    </div>
        <Table dataSource={mockData} primaryKey="number" style={styles.table}>
          <Table.Column align="center" title="账号" dataIndex="number" />
          <Table.Column align="center" title="姓名" dataIndex="name" />
          <Table.Column align="center" title="房屋地址" dataIndex="address" />
          <Table.Column
            align="center"
            title="使用情况"
            dataIndex="department"
          />
          <Table.Column align="center" title="联系方式" dataIndex="phone" />
          <Table.Column align="center" title="价格" dataIndex="much" />
          <Table.Column align="center" title="房屋格局信息" dataIndex="text" />
          <Table.Column align="center" title="时间" dataIndex="time" />
          <Table.Column align="center" title="结束" cell={actionRender} />
          <Table.Column align="center" title="撤销" cell={actionRender1} />
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
    margin: '0 50px',
    letterSpacing: '1px',
  },
  button: {
    margin: '0 2px',
    letterSpacing: '2px',
  },
  table: {
    margin: '20px 0',
  },
  pagination: {
    textAlign: 'center',
    marginBottom: '10px',
  },
};
