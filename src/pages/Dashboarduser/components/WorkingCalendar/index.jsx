import React, { Component } from 'react';
import { Calendar } from '@alifd/next';
import styles from './index.module.scss';

export default class WorkingCalendar extends Component {
  static displayName = 'WorkingCalendar';

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <h4 className={styles.title}>工作日历</h4>
          <Calendar shape="card" className={styles.calendar} />
        </div>
      </div>
    );
  }
}
