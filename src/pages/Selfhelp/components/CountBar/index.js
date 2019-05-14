import React, { Component } from 'react';
import addIcon from './images/add.svg';
import pcIcon from './images/pc.svg';
import targetIcon from './images/target.svg';
//import uploadIcon from './images/uploading.svg';
import DataBinder from '@icedesign/data-binder';


@DataBinder({
  AccountTable: {
    url: 'http://localhost:8000/work/allworkcount',
    method: 'get',
    data: {
      
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
export default class CountBar extends Component {

    componentDidMount() {
      // 第一次渲染，初始化第一页的数据
      const {AccountTable} = this.props.bindingData;
    this.props.updateBindingData('AccountTable');
  }
  constructor(props) {
    super(props);
    this.state = {
      dataluan:  []
    };
    // this.changePage = this.changePage.bind(this)
  }
  render() {

    const { AccountTable } = this.props.bindingData;
    
    return (
      <div style={styles.container}>
        {AccountTable.list.map((item, index) => {
          return (
            <div style={styles.counter} key={index}>
              <div style={styles.card}>
                <div style={styles.cardLeft}>
                  <img src={item.icon} style={styles.icon} alt="" />
                </div>
                <div style={styles.cardRight}>
                  <h3 style={styles.countTitle}>{item.title}</h3>
                  <span>{item.count}</span>
                </div>
              </div>
              <p style={styles.instrument}>说明: {item.instrument}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

const styles = {
  container: {
    margin: '20px',
    letterSpacing: '1px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  counter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '240px',
    height: '80px',
    borderRadius: '10px',
    display: 'flex',
    overflow: 'hidden',
    boxShadow: '0 1px 2px rgba(0,0,0,.05), 0 0 0 1px rgba(63,63,68,.1)',
    color: '#333',
  },
  cardLeft: {
    lineHeight: '80px',
    height: '80px',
    flex: '3',
    textAlign: 'center',
  },
  icon: {
    width: '30px',
    height: '30px',
    verticalAlign: 'middle',
  },
  cardRight: {
    textAlign: 'right',
    fontSize: '28px',
    padding: '10px',
    paddingLeft: '0',
    height: '80px',
    flex: '7',
  },
  countTitle: {
    fontSize: '12px',
    textAlign: 'right',
    margin: '0',
  },
  instrument: {
    textAlign: 'center',
    fontSize: '12px',
    width: '240px',
  },
};
