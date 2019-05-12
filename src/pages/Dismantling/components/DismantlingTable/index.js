import React, { Component } from 'react';
import DataBinder from '@icedesign/data-binder';
import { Button, Table, Pagination, Message, Input, Select   } from '@alifd/next';
import { Label } from 'bizcharts';

const { Option } = Select;
@DataBinder({
  AccountTable: {
    url: 'http://localhost:8000/user/pageall',
    type: 'get',
    data: {
      page: 1,
      pagesize: 6,
    },
    defaultBindingData: {
      data: {
        page: 1,
        pageSize: 6,
        total: 8,
        size: 8
      },
      list: []
    },
    // defaultBindingData: {
    //     data: []
    // }
  },
  deleteGateway: {
    url: 'http://127.0.0.1:9000/gateway/delete_by_id',
    method: 'delete',
    
  },
  SaveGateway: {
    url: 'http://127.0.0.1:9000/gateway/save_gateway',
    method: 'post',
    
  },

  searchUser: {
    url: 'http://localhost:8000/user/query',
      type: 'get',
      data: {
      page: 1,
      pagesize: 6,
    },
    defaultBindingData: {
      data: {
        page: 1,
        pageSize: 6,
        total: 8,
        size: 8
      },
      list: []
    },
  },


})

export default class DismantlingTable extends Component {
  static displayName = 'DismantlingTable';

  componentDidMount() {
    // 第一次渲染，初始化第一页的数据
   this.props.updateBindingData('AccountTable');
 }
 refresh = () => {
  // 刷新功能，更新数据
 this.props.updateBindingData('accountTable');
};

 
  changePage = (pageNo) => {
    // 有些参数可能需要从数据中获取
    const {AccountTable} = this.props.bindingData;
    this.props.updateBindingData('AccountTable', {
      params: {
        ...AccountTable.pagination,
        pageNum: pageNo,
        pagesize: 6,
      },
      // 通过设置这个数据，可以快速将页码切换，避免等接口返回才会切换页面
      // 这里的变更是同步生效的
      // 需要注意多层级数据更新的处理，避免丢掉某些数据
      defaultBindingData: {
        ...AccountTable,
        pagination: {
          ...AccountTable,
          pageNum: pageNo,
          pagesize: 6,
        }
      }
    });
  };

  // searchUser = (pageNo) => {
  //   // 有些参数可能需要从数据中获取
  //   const {searchUser} = this.props.bindingData;
  //   this.props.updateBindingData('searchUser', {
  //     params: {
  //       name :this.props.userName.value,  
  //       page: pageNo,
  //       pagesize: 8,
  //     },
  //     // 通过设置这个数据，可以快速将页码切换，避免等接口返回才会切换页面
  //     // 这里的变更是同步生效的
  //     // 需要注意多层级数据更新的处理，避免丢掉某些数据
  //   },

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
      current2,
    });
  };
  
  handleClick = (text) => {
    // Message.success(`暂不支持${text}`);
    Message.success(`非超级管理员不能删除业主数据`);
  };

  render() {

    const { AccountTable } = this.props.bindingData;
    //const { searchUser} = this.props.bindingData;
    const actionRender = () => {
      return (
        <Button type="primary" onClick={this.handleClick }>
         删除
        </Button>  
      );
      };
  
    
    return (
      <div>

      <div>
     {/* < Table
          dataSource={ searchUser.list}
          primaryKey="name"
          style={styles.table}
        > */}
      <span>
        <label>
            姓名:
            <Input style={{ ...styles.input, ...styles.input }} />
          </label>
        <Select
            placeholder=""
            style={{ ...styles.select, ...styles.input }}
          >
            <Option >1</Option>
            <Option >2</Option>
            <Option >3</Option>
            <Option >4</Option>
            <Option >5</Option>
            <Option >6</Option>
            <Option >7</Option>
            <Option >8</Option>
            <Option >9</Option>
          </Select>
          号楼
          <Select
            placeholder=""
            style={{ ...styles.input, ...styles.shortInput }}
          >
            <Option >1</Option>
            <Option >2</Option>
            <Option >3</Option>
          </Select>
          单元
          <Input style={{ ...styles.input, ...styles.shortInput }} />
          房间
       </span>
       &nbsp;  &nbsp;  &nbsp;
        <Button type="primary" name="search">查询</Button>
        <div name="hahha">
          &nbsp;  &nbsp;  &nbsp;
        </div>
        {/* </Table> */}
      </div>

        <Table
          dataSource={AccountTable.list}
          primaryKey="name"
          style={styles.table} >
          <Table.Column align="center" title="姓名" dataIndex="name" />
          <Table.Column align="center" title="邮箱" dataIndex="email" />
          <Table.Column align="center" title="性别" dataIndex="sex" />
          <Table.Column align="center" title="电话" dataIndex="phone" />
          <Table.Column align="center" title="楼号" dataIndex="build" />
          <Table.Column align="center" title="单元" dataIndex="top" />
          <Table.Column align="center" title="房间" dataIndex="room" />
          <Table.Column align="center" title="身份证号码" dataIndex="idnumber" />
          <Table.Column align="center" title="结束"  cell={actionRender} />      
        </Table>
        <div style={styles.pagination}>
        <Pagination 
          current={AccountTable.pageNum}
          pageSize={AccountTable.pageSize}
          total={AccountTable.total}
          onChange={this.changePage}
          style={{marginTop: 20}}
        />
        </div>


        {/* <div style={styles.pagination}>
        <Pagination 
          current={ searchUser.pageNum}
          pageSize={ searchUser.pageSize}
          total={ searchUser.total}
          onChange={this.changePage}
          style={{marginTop: 20}}
        />
        </div> */}

             </div>
    );
  }
  }

const styles = {
  container: {
    margin: '2px 2px 2px 2px',
    letterSpacing: '1px',
  },
  button: {
    margin: '0 8px',
    letterSpacing: '1px',
  },
  table: {
    margin: '2px 2px 2px 2px',
  },
  pagination: {
    textAlign: 'center',
    marginBottom: '5px',
  },
  input: {
    margin: '0 4px',
  },
};
