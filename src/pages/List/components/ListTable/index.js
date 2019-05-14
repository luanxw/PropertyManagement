import React, { Component } from 'react';
import DataBinder from '@icedesign/data-binder';
import { Button, Table, Pagination, Message,Input, Field, Select } from '@alifd/next';
const { Option } = Select;
const mockData = [
  {
    name: '李欢欢',
    phone:'15637652086',
    build:'1号楼',
    top:'1单元',
    room:'104',
    IDnumber:'410426199503220836',
    difficulty:'线上',
    property:'20',
    water:'10',
    electricity:'30',

  },
  {
    name: '赵天',
    phone:'18827362765',
    build:'1号楼',
    top:'1单元',
    room:'106',
    IDnumber:'4202241980110862221',
    difficulty:'线上',
    property:'20',
    water:'10',
    electricity:'30',
  },
  {
    name: '李欢欢',
    phone:'15637652086',
    build:'1号楼',
    top:'1单元',
    room:'104',
    IDnumber:'410426199503220836',
    difficulty:'线上',
    property:'20',
    water:'10',
    electricity:'30',
  },
  {
    name: '钱杰',
    phone:'13787282738',
    build:'1号楼',
    top:'1单元',
    room:'105',
    IDnumber:'420224199706246234',
    difficulty:'线上',
    property:'20',
    water:'10',
    electricity:'30',
  },
  {
    name: '李欢欢',
    phone:'15637652086',
    build:'1号楼',
    top:'1单元',
    room:'104',
    IDnumber:'410426199503220836',
    difficulty:'线上',
    property:'20',
    water:'10',
    electricity:'30',
  },
  {
    name: '李欢欢',
    phone:'15637652086',
    build:'1号楼',
    top:'1单元',
    room:'104',
    IDnumber:'410426199503220836',
    difficulty:'线上',
    property:'20',
    water:'10',
    electricity:'30',
  },
];
@DataBinder({
  MoneyTable: {
    url: 'http://localhost:8000/money/pageall',
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

  SearchUser: {
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
export default class ListTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1,
    };
  }

  componentDidMount() {
    // 第一次渲染，初始化第一页的数据
   this.props.updateBindingData('MoneyTable');
  // this.changePage(1)
 }

  handleClick = () => {
    Message.success('暂不支持办理');
  };

  onPageChange = (current) => {
    this.setState({
      current,
    });
  };

  changePage = (pageNo) => {
    // 有些参数可能需要从数据中获取
    const {MoneyTable} = this.props.bindingData;
    this.props.updateBindingData('MoneyTable', {
      params: {
        ...MoneyTable.pagination,
        pageNum: pageNo,
        pagesize: 6,
      },
      // 通过设置这个数据，可以快速将页码切换，避免等接口返回才会切换页面
      // 这里的变更是同步生效的
      // 需要注意多层级数据更新的处理，避免丢掉某些数据
      defaultBindingData: {
        ...MoneyTable,
        pagination: {
          ...MoneyTable,
          pageNum: pageNo,
          pagesize: 6,
        }
      }
    }
      
    );
  };

  render() {

    const { MoneyTable } = this.props.bindingData;

    const actionRender = () => {
      return (
        <Button style={styles.button} onClick={this.handleClick}>
          已缴费
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
     

        <Table dataSource={MoneyTable.list} primaryKey="name" style={styles.table}>
          <Table.Column align="center" title="姓名" dataIndex="name" />
          <Table.Column align="center" title="楼号" dataIndex="build" />
          <Table.Column align="center" title="单元" dataIndex="top" />
          <Table.Column align="center" title="房间" dataIndex="room" />
          <Table.Column align="center" title="物业费用状态"dataIndex="type" />
       
          <Table.Column align="center" title="操作" cell={actionRender} />
        </Table>
        <div style={styles.pagination}>
        <Pagination 
          current={MoneyTable.pageNum}
          pageSize={MoneyTable.pageSize}
          total={MoneyTable.total}
          onChange={this.changePage}
          style={{marginTop: 20}}
        />
        </div>
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
    marginBottom: '20px',
  },
  input: {
    margin: '0 4px',
  },
};
