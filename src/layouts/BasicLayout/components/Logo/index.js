import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import styleNames from './index.module.scss';

export default class Logo extends PureComponent {
  render() {
    return (
      <Link to="/" className={styleNames.logoStyle} style={this.props.style}>
        智慧物业管理
      </Link>
    );
  }
}
