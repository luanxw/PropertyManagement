import React, { Component } from 'react';
import InfoWindow from './components/InfoWindow';
import WorkingIndex from './components/WorkingIndex';
import Transaction from './components/Transaction';
import WorkingCalendar from './components/WorkingCalendar';

export default class Dashboarduser extends Component {
  static displayName = 'Dashboarduser';
  render() {
    return (
      <div style={styles.container}>
        <InfoWindow />          
        <WorkingCalendar />
        <Transaction />
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    letterSpacing: '1px',
    padding: '1px',
  },
};
