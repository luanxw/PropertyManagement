/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Paragraph } from '@alifd/next';

import { Input, Button, Select, DatePicker, Radio, Message } from '@alifd/next';


const content = 
'新春快乐：新年即将来临，住各位小主们身体健康，万事如意。';

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
