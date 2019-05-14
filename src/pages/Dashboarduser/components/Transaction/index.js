import React, { Component } from 'react';
import { Message } from '@alifd/next';
//import goalIcon from './images/goal.svg';
import linkIcon from './images/link.svg';
import recoveryIcon from './images/recovery.svg';
import refuseIcon from './images/refuse.svg';
import checkIcon from './images/check.svg';
//import sendIcon from './images/send.svg';
//import checkinIcon from './images/checkin.svg';
//import sendMailIcon from './images/send-mail.svg';
import styles from './index.module.scss';
import { withRouter, Link } from 'react-router-dom';


// const mockData = [

//   {
//     img: linkIcon,
//     title: '账号信息',
//     count: 1,
//     backgroundColor: '#5e83fb',
//   },
//   {
//     img: recoveryIcon,
//     title: '费用信息',
//     count: 3,
//     backgroundColor: '#f7da47',
//   },
//   {
//     img: refuseIcon,
//     title: '房屋信息',
//     count: 0,
//     backgroundColor: '#58ca9a',
//   },
//   {
//     img: checkIcon,
//     title: '维修信息',
//     count: 2,
//     backgroundColor: '#5e83fb',
//   },

// ];

const user ={
  img: linkIcon,
  title: '账号信息',
  count: 1,
  backgroundColor: '#5e83fb',
} ;
const feiyong ={
  img: recoveryIcon,
    title: '费用信息',
    count: 3,
    backgroundColor: '#f7da47',
} ;
const fangwu ={
  img: refuseIcon,
  title: '房屋信息',
  count: 0,
  backgroundColor: '#58ca9a',
} ;
const weixiu ={
  img: checkIcon,
    title: '维修信息',
    count: 2,
    backgroundColor: '#5e83fb',
} ;


@withRouter
class Transaction extends Component {


  handleClicktest= (e) =>{
    this.props.history.push('/dismantling');
  };

  handleClicktest1= (e) =>{
    this.props.history.push('/list');
  };
  handleClicktest2= (e) =>{
    this.props.history.push('/allocation');
  };
  handleClicktest3= (e) =>{
    this.props.history.push('/selfHelp');
  };

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <h4 className={styles.title}>任务区</h4>
          <div className={styles.content}>

            {/* {mockData.map((item, index) => {
              return (
                <div
                  className={styles.item}
                  // onClick ={this.handleClicktest}   
                >
                 <div
                    className={styles.image}
                    style={{
                      background: `${item.backgroundColor}`,
                    }}
                  >
                    <img src={item.img} className={styles.iconImage} alt="" />
                  </div>
                  <p className={styles.itemTitle}>
                    {item.title}{' '}
                    <span className={styles.count}>{item.count}</span>
                  </p>
                </div>
          
              );
            })} */}
         

              <div>
                <div
                  className={styles.item}
                  onClick ={this.handleClicktest}   
                >
                  <div
                    className={styles.image}
                    style={{
                      background: `${user.backgroundColor}`,
                    }}
                  >
                    <img src={user.img} className={styles.iconImage} alt="" />
                  </div>
                <p className={styles.itemTitle}>
                  {user.title}{' '}
                  <span className={styles.count}>{user.count}</span>
                </p>
              </div>
              </div>

              <div>
                <div
                  className={styles.item}
                  onClick ={this.handleClicktest1}   
                >
                  <div
                    className={styles.image}
                    style={{
                      background: `${feiyong.backgroundColor}`,
                    }}
                  >
                    <img src={feiyong.img} className={styles.iconImage} alt="" />
                  </div>
                <p className={styles.itemTitle}>
                  {feiyong.title}{' '}
                  <span className={styles.count}>{feiyong.count}</span>
                </p>
              </div>
              </div>

              <div>
                <div
                  className={styles.item}
                  onClick ={this.handleClicktest2}   
                >
                  <div
                    className={styles.image}
                    style={{
                      background: `${fangwu.backgroundColor}`,
                    }}
                  >
                    <img src={fangwu.img} className={styles.iconImage} alt="" />
                  </div>
                <p className={styles.itemTitle}>
                  {fangwu.title}{' '}
                  <span className={styles.count}>{fangwu.count}</span>
                </p>
              </div>
              </div>

              <div>
                <div
                  className={styles.item}
                  onClick ={this.handleClicktest3}   
                >
                  <div
                    className={styles.image}
                    style={{
                      background: `${weixiu.backgroundColor}`,
                    }}
                  >
                    <img src={weixiu.img} className={styles.iconImage} alt="" />
                  </div>
                <p className={styles.itemTitle}>
                  {weixiu.title}{' '}
                  <span className={styles.count}>{weixiu.count}</span>
                </p>
              </div>
              </div>


          </div>
        </div>
      </div>
    );
  }
}


export default  Transaction ;