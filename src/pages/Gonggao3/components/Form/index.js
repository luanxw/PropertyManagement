/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Paragraph } from '@alifd/next';

import { Input, Button, Select, DatePicker, Radio, Message } from '@alifd/next';

const content = 
'宠物大家庭：希望各位家长照看好自己的宠物宝宝，不要产生过大的噪音影响他人，出门记得带好绳索，记得按时打疫苗。如果发现伤人事件，我们会强行带走。望周知！';

export default class DonationForm extends Component {
  static displayName = 'DonationForm';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: {
      },
    };
  }

  render() {
    return (
      <IceContainer style={styles.container}>

<div>
    <Paragraph>{content}</Paragraph>
    
    <br/>
    {/* <Paragraph size="small">{content}</Paragraph> */}
</div>
        
      </IceContainer>
    );
  }
}

const styles = {
  formContent: {
    marginLeft: '30px',
  },
  formItem: {
    marginBottom: '30px',
    display: 'flex',
    alignItems: 'center',
  },
  formLabel: {
    width: '70px',
    marginRight: '15px',
    textAlign: 'right',
  },
  formError: {
    marginLeft: '10px',
  },
  submitButton: {
    marginLeft: '85px',
  },
};
