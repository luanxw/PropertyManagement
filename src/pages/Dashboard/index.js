import React, { Component } from 'react';
import InfoWindow from './components/InfoWindow';
import WorkingIndex from './components/WorkingIndex';
import Transaction from './components/Transaction';
import WorkingCalendar from './components/WorkingCalendar';

export default class Dashboard extends Component {
  static displayName = 'Dashboard';
  render() {
    return (
      <div style={styles.container}>
        <InfoWindow />
        <WorkingIndex />
        <Transaction />
        <WorkingCalendar />
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    letterSpacing: '1px',
    padding: '10px',
  },
};
