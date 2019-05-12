import React, { Component } from 'react';
import { Button, Table, Pagination, Message } from '@alifd/next';
import SearchBar from './SearchBar';
import DataBinder from '@icedesign/data-binder';

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
    
  }
})
export default class SelfhelpTable extends Component {
  static displayName = 'SelfhelpTable';
  componentDidMount() {
    // 第一次渲染，初始化第一页的数据
   this.props.updateBindingData('AccountTable');
 }

  //static displayName = 'DismantlingTable';

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
      
      <div style={styles.container}>
      
        <SearchBar />
        <Table dataSource={AccountTable.list} primaryKey="name" style={styles.table}>
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
};
