import React, { Component } from 'react';
import Container from '@icedesign/container';
import Form from './components/Form';
import styles from './index.module.scss';

export default class Gonggao5 extends Component {
  render() {
    return (
      <div>
        <div className={styles.nav}>
          <h2 className={styles.breadcrumb}>公告</h2>
        </div>
        <Container className={styles.container}>
          <Form />
        </Container>
      </div>
    );
  }
}
