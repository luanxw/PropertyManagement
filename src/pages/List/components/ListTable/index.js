import React, { Component } from 'react';
import DataBinder from '@icedesign/data-binder';
import { Button, Table, Pagination, Message,Input, Field, Select } from '@alifd/next';
import { Label } from 'bizcharts';
const { Option } = Select;
  
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

  SearchMoney: {
    url: 'http://localhost:8000/money/query',
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
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     current: 1,
  //   };
  // }
  static displayName = 'ListTable ';
  componentDidMount() {
    // 第一次渲染，初始化第一页的数据
   //this.props.updateBindingData('MoneyTable');
  this.changePage(1)
 }
 refresh = () => {
  // 刷新功能，更新数据
 this.props.updateBindingData('MoneyTable');
};
  handleClick = () => {
    Message.success('暂不支持办理');
  };

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      build: '',
      top: '',
      room: '',
      randerData: []
    };
    this.changePage = this.changePage.bind(this)
  }
  
  nameInput = (e) =>{
     console.log(e)
    this.setState({
      name: e,
    })
  }
  buildInput = (e) =>{
    //  console.log(e)
    this.setState({
      build: e,
    })
  }
  topInput = (e) =>{
    //  console.log(e)
    this.setState({
      top: e,
    })
  }
  roomInput = (e) =>{
    //  console.log(e)
    this.setState({
      room: e,
    })
  }

  onPageChange = (current) => {
    this.setState({
      current2,
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
    },
    ({data}) => {
      if(data == null){
        Message.error("网络错误")
      }else{
        this.setState({
          randerData: [...data.list]
        })
      }
    }
    
      
    );
  };
  searchMoney = (pageNo) => {
    // 有些参数可能需要从数据中获取
    this.props.updateBindingData('SearchMoney', {
      params: {
        name :this.state.name,
        build :this.state.build,  
        top :this.state.top,  
        room :this.state.room,  
      },
      // 通过设置这个数据，可以快速将页码切换，避免等接口返回才会切换页面
      // 这里的变更是同步生效的
      // 需要注意多层级数据更新的处理，避免丢掉某些数据
      },
       ({data}) => {
      console.log(data)
      if(typeof JSON.stringify(data) == '{}'){
        this.forceUpdate();
        Message.error("网络错误！")
        return
      }
      this.setState({
        randerData: data
      })
    }

    );
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

  render() {

    const {MoneyTable, searchMoney} = this.props.bindingData;

   console.log(this.state.randerData)
    const actionRender = () => {

      return (
        <Button style={styles.button} onClick={this.handleClick}>
          已缴费
        </Button>
      );
    };

    return (
      <div>
      <div>
        <span>
        <label>
              姓名:
              <Input style={{ ...styles.input, ...styles.input }}  placeholder="业主名称关键字" 
              onChange={this.nameInput.bind(this)} name="username"
              />
            </label>
       
          <Select
              placeholder=""
              style={{ ...styles.select, ...styles.input }}
              name="build"
              onChange={this.buildInput.bind(this)}
            >
              <Option  value="1号楼">1</Option>
              <Option  value="2号楼" >2</Option>
              <Option  value="3号楼">3</Option>
              <Option  value="4号楼">4</Option>
              <Option  value="5号楼">5</Option>
              <Option  value="6号楼">6</Option>
              <Option  value="7号楼">7</Option>
              <Option  value="8号楼">8</Option>
              <Option  value="9号楼">9</Option>
            </Select>
            号楼
            <Select
              placeholder=""
              style={{ ...styles.input, ...styles.shortInput }}
              name="top"
              onChange={this.topInput.bind(this)}
            >
              <Option  value="1单元">1</Option>
              <Option  value="2单元">2</Option>
              <Option  value="3单元">3</Option>
            </Select>
            单元
            <Input style={{ ...styles.input, ...styles.shortInput }}
            onChange={this.roomInput.bind(this)}
            name="room" />
            房间
         </span>
         &nbsp;  &nbsp;  &nbsp;
          <Button type="primary" name="search" onClick={this.searchMoney}>查询</Button>
          <div name="hahha">
            &nbsp;  &nbsp;  &nbsp;
          </div>
          </div>
     

          <Table   
          dataSource={this.state.randerData} 
          loading={this.state.randerData.__loading}
          primaryKey="name" 
          style={styles.table}>
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
