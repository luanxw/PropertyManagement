import React, { Component } from 'react';
import { Input, Select, Button, Message,Table } from '@alifd/next';

const { Option } = Select;



export default class SearchBar extends Component {
 // const { AccountTable } = this.props.bindingData;


  handleClick = () => {
    Message.success('未搜索到符合条件的数据');
  };

  
  render() {
    // const actionRender = () => {
    //   return (
    //     <Button type="primary" onClick={this.handleClick }>
    //     查
    //     </Button>  
    //   );
    //   };

    return (
      <div style={styles.container}>
      
        
        {/* <Table.Column align="" title="姓名" dataIndex="name"  /> */}
         {/* <span style={styles.caseNumber}> 
           <label> */}
            {/* <Table.Column align="center" title="查询"  cell={actionRender} /> */}
            {/* <Input style={{ ...styles.input, ...styles.input }} /> */}
            {/* <Button
            type="primary"
            style={styles.button}
            onClick={this.handleClick}
          >
            查询
          </Button> */}
           {/* </label>  */}
         

          {/* <Select
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
        {/* </span> */}
        {/* <span>
          <Button
            type="primary"
            style={styles.button}
            onClick={this.handleClick}
          >
            查询
          </Button>
        </span>  */}
       
      </div> 
    );
  }
}

const styles = {
  container: {
    margin: '20px',
    letterSpacing: '2px',
  },
  input: {
    margin: '0 4px',
  },
  select: {
    verticalAlign: 'middle',
    width: '40px',
  },
  shortInput: {
    width: '80px',
  },
  caseNumber: {
    marginRight: '16px',
  },
  button: {
    margin: '0 4px',
    letterSpacing: '2px',
  },
};
