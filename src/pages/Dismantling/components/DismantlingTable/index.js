import React, { Component } from 'react';
import { Button, Table, Pagination, Message } from '@alifd/next';

const mockData = [
  {
    number: '( 2018 ) 浙执77号',
    
  },
  {
    number: '( 2018 ) 浙执78号',
    
  },
  {
    number: '( 2018 ) 浙执79号',
    
  },
  {
    number: '( 2018 ) 浙执80号',
   
  },
  {
    number: '( 2018 ) 浙执81号',
    
  },
  {
    number: '( 2018 ) 浙执82号',
   
  },
];

export default class DismantlingTable extends Component {
  static displayName = 'DismantlingTable';

  constructor(props) {
    super(props);
    this.state = {
      rowSelection: {
        onChange: this.onTableChange.bind(this),
        onSelect(selected, record, records) {
          console.log('onSelect', selected, record, records);
        },
        onSelectAll(selected, records) {
          console.log('onSelectAll', selected, records);
        },
        selectedRowKeys: [],
        mode: 'single',
      },
      current: 2,
    };
  }

  onTableChange = (ids, records) => {
    const { rowSelection } = this.state;
    rowSelection.selectedRowKeys = ids;
    console.log('onChange', ids, records);
    this.setState({ rowSelection });
  };

  onPageChange = (current) => {
    this.setState({
      current,
    });
  };

  handleClick = (text) => {
    Message.success(`暂不支持${text}`);
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
        <div style={styles.buttons}>
          {buttons.map((text, index) => {
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
        <Table
          dataSource={mockData}
          rowSelection={this.state.rowSelection}
          primaryKey="number"
          style={styles.table}
        >
          <Table.Column align="center" title="账号" dataIndex="number" />
          <Table.Column align="center" title="姓名" dataIndex="name" />
          <Table.Column align="center" title="性别" dataIndex="sex" />
          <Table.Column align="center" title="联系方式" dataIndex="phone" />
          <Table.Column align="center" title="房屋信息" dataIndex="address" />
          <Table.Column
            align="center"
            title="身份证号码"
            dataIndex="IDnumber"
          />
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
