import React, { Component } from 'react';
import addIcon from './images/add.svg';
import pcIcon from './images/pc.svg';
import targetIcon from './images/target.svg';
//import uploadIcon from './images/uploading.svg';

const mockData = [
  {
    icon: targetIcon,
    title: '已提交维修信息',
    count: 12,
    instrument: '用户已提交维修信息',
  },
  {
    icon: addIcon,
    title: '正在处理中',
    count: 3,
    instrument: '正在进行维修',
  },
  // {
  //   icon: uploadIcon,
  //   title: '已处理待确认',
  //   count: 1,
  //   instrument: '维修完成等待用户确认',
  // },
  {
    icon: pcIcon,
    title: '已确认完成',
    count: 12,
    instrument: '维修已完成',
  },
];

export default class CountBar extends Component {
  render() {
    return (
      <div style={styles.container}>
        {mockData.map((item, index) => {
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
