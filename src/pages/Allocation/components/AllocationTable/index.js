import React, { Component } from 'react';
import { Button, Table, Pagination, Message, Dialog, 
  Loading, Form, Input, Field, Select } from '@alifd/next';
import DataBinder from '@icedesign/data-binder';

const { Option } = Select;
@DataBinder({
  AccountTable: {
    url: 'http://localhost:8000/room/pageall',
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
     defaultBindingData: {
         data: []
     }
  },
  deleteGateway: {
    url: 'http://127.0.0.1:9000/gateway/delete_by_id',
    method: 'delete',
    
  },
  SaveGateway: {
    url: 'http://127.0.0.1:9000/gateway/save_gateway',
    method: 'post',
    
  }
})



export default class AllocationTable extends Component {
  static displayName = 'AllocationTable ';
  handleClick = () => {
    Message.success('需要管理员账户才能分配账号');
  };

  componentDidMount() {
    // 第一次渲染，初始化第一页的数据
   this.props.updateBindingData('AccountTable');
 }

  // static displayName = 'DismantlingTable';

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
        const { AccountTable } = this.props.bindingData;
        const actionRender = () => {
          return (
            <Button  type="primary"
            style={styles.button} onClick={this.actionRender}>
             处理
            </Button>        
          );
        };
     

    return (
<div>
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
     


    
        <Table dataSource={AccountTable.list} primaryKey="name" style={styles.table}>
          <Table.Column align="center" title="姓名" dataIndex="name" />
          <Table.Column align="center" title="楼号" dataIndex="build" />
          <Table.Column align="center" title="单元" dataIndex="top" />
          <Table.Column align="center" title="房间" dataIndex="room" />
          <Table.Column
            align="center"
            title="使用情况"
            dataIndex="take"
          />
          <Table.Column align="center" title="电话" dataIndex="phone" />
          <Table.Column align="center" title="房屋格局" dataIndex="type" />
          <Table.Column align="center" title="时间" dataIndex="date" />
          <Table.Column align="center" title="结束" cell={actionRender} />
          
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
        {/* /* <Dialog visible={deleteComfirmDialogVisable}
        onOk={this.onDeleteOk}
        onCancel={this.onClose}
        onClose={this.onClose}
        title="确认身删除">
        您确认要删除吗？
        </Dialog> */}

        </div>   
    );
  }
}

const styles = {
  container: {
    margin: '0px 0px 0px 0px',
    letterSpacing: '1px',
  },
  button: {
    margin: '0px 0px 0px 0px',
    letterSpacing: '1px',
  },
  table: {
    margin: '0px 0px 0px 0px',
  },
  pagination: {
    textAlign: 'center',
    marginBottom: '0px',
  },
  input: {
    margin: '0 4px',
  },
};
