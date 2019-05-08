import React, { Component } from 'react';
import Container from '@icedesign/container';
import Form from './components/Form';
import styles from './index.module.scss';

export default class AddDashboard extends Component {
  render() {
    return (
      <div>
        <div className={styles.nav}>
          <h2 className={styles.breadcrumb}>公告录入</h2>
        </div>
        <Container className={styles.container}>
          <Form />
        </Container>
      </div>
    );
  }
}
