import React, { Component } from 'react';
import styles from './index.module.scss';
import { withRouter, Link } from 'react-router-dom';
// const mock = [
//   {
//     title: '关于停车收费的公告',
//     date: '03-13',
//   },
//   {
//     title: '关于居民小区环境公告',
//     date: '03-13',
//   },
//   {
//     title: '关于小区文明养宠物的管理办法',
//     date: '03-13',
//   },
//   {
//     title:
//       '春季防火预警通知',
//     date: '03-02',
//   },
//   {
//     title: '物业费用最新调整情况说明',
//     date: '03-02',
//   },
//   {
//     title: '祝大家新春快乐！',
//     date: '02-23',
//   },
// ];
@withRouter
export default class InfoWindow extends Component {
  static displayName = 'InfoWindow';

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <h4 className={styles.title}>公告栏</h4>
          <ul>
            {/* {mock.map((item, index) => {
              return (
                <li className={styles.list} key={index}>
                  <span className={styles.listLeft}>
                    <span className={styles.circle} />
                    {item.title}
                  </span>
                  <span className={styles.date}>[{item.date}]</span>
                </li>
              );
            })} */}
            <Link to="/Gonggao1" className="tips-text">
            关于停车收费的公告
              </Link> 
              </ul>
              <br/>
              
              <ul>
              <Link to="/Gonggao2" className="tips-text">
              关于居民小区环境公告
              </Link> 
              </ul>
              <br/>

              <ul>
              <Link to="/Gonggao3" className="tips-text">
              关于小区文明养宠物的管理办法
              </Link> 
              </ul>
              <br/>

              <ul>
              <Link to="/Gonggao4" className="tips-text">
              春季防火预警通知
              </Link> 
              </ul>
              <br/>

              <ul>              
              <Link to="/Gonggao5" className="tips-text">
              物业费用最新调整情况说明
              </Link> 
              </ul>
              <br/>

              <ul>               
              <Link to="/Gonggao6" className="tips-text">
              祝大家新春快乐！
              </Link> 
          </ul>
          {/* <Link to="/user/register" className="tips-text">
                立即注册
              </Link> */}
        </div>
      </div>
    );
  }
}
