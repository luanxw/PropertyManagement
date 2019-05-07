import React, { Component } from 'react';
import { Input, Select, Button, Message } from '@alifd/next';

const { Option } = Select;

export default class SearchBar extends Component {
  handleClick = () => {
    Message.success('未搜索到符合条件的数据');
  };

  render() {
    return (
      <div style={styles.container}>
        <span style={styles.caseNumber}>
          <label>
            账号:
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
        <span>
          <Button
            type="primary"
            style={styles.button}
            onClick={this.handleClick}
          >
            查询
          </Button>
        </span>
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
    width: '200px',
  },
  shortInput: {
    width: '100px',
  },
  caseNumber: {
    marginRight: '20px',
  },
  button: {
    margin: '0 8px',
    letterSpacing: '2px',
  },
};
