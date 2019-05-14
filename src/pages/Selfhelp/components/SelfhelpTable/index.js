import React, { Component } from 'react';
import { Button,  Table, Pagination, Message, Input, Select} from '@alifd/next';
import SearchBar from './SearchBar';
import DataBinder from '@icedesign/data-binder';
const { Option } = Select;
@DataBinder({
  AccountTable: {
    url: 'http://localhost:8000/work/pageall',
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
  SearchWork: {
    url: 'http://localhost:8000/work/query',
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
export default class SelfhelpTable extends Component {
  static displayName = 'SelfhelpTable';
  componentDidMount() {
    // 第一次渲染，初始化第一页的数据
   //this.props.updateBindingData('AccountTable');
   this.changePage(1)
 }
 refresh = () => {
  // 刷新功能，更新数据
 this.props.updateBindingData('accountTable');
};
  //static displayName = 'DismantlingTable';
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

  searchWork = (pageNo) => {
    // 有些参数可能需要从数据中获取
    this.props.updateBindingData('SearchWork', {
      params: {
        name :this.state.name,
        build :this.state.build,  
        top :this.state.top,  
        room :this.state.room,  
      },
      // 通过设置这个数据，可以快速将页码切换，避免等接口返回才会切换页面
      // 这里的变更是同步生效的
      // 需要注意多层级数据更新的处理，避免丢掉某些数据
     }, ({data}) => {
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
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     current: 2,
  //   };
  // }
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

  handleClick = () => {
    Message.success('暂不支持办理');
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
      const actionRender1 = () => {
        return (
          <Button  type="primary"
          style={styles.button} onClick={this.actionRender1}>
           完成
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
          onChange={this.nameInput.bind(this)} name="username" />
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
        name="room"/>
        房间
     </span>
     &nbsp;  &nbsp;  &nbsp;
      <Button type="primary" name="search" onClick={this.searchWork}>查询</Button>
      <div name="hahha">
        &nbsp;  &nbsp;  &nbsp;
      </div>
      {/* </Table> */}
    </div>

        
        <Table dataSource={this.state.randerData} 
          loading={this.state.randerData.__loading}
          primaryKey="name"
          style={styles.table} >
          <Table.Column align="center" title="姓名" dataIndex="name" />
          <Table.Column align="center" title="楼号" dataIndex="build" />
          <Table.Column align="center" title="单元" dataIndex="top" />
          <Table.Column align="center" title="房间" dataIndex="room" />

          <Table.Column align="center" title="电话" dataIndex="phone" />
          <Table.Column align="center" title="维修类型" dataIndex="worktype" />
          <Table.Column align="center" title="维修信息" dataIndex="worktext" />
          <Table.Column align="center" title="报修日期" dataIndex="date" />
          <Table.Column align="center" title="维修" cell={actionRender} />
          <Table.Column align="center" title="完成" cell={actionRender1} />
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
  input: {
    margin: '0 4px',
  },
};
