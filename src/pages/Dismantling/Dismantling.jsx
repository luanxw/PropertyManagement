import React, { Component } from 'react';
import Container from '@icedesign/container';
import SearchBar from './components/SearchBar';
import DismantlingTable from './components/DismantlingTable';
import styles from './index.module.scss';

export default class Dismantling extends Component {
  static displayName = 'Dismantling';

  render() {
    return (
      <div>
        <div className={styles.nav}>
          <h2 className={styles.breadcrumb}>账号信息</h2>
        </div>
        <SearchBar />
        <Container className={styles.container}>
          <DismantlingTable />
        </Container>
      </div>
    );
  }
}
