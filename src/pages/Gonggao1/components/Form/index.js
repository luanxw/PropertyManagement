/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Paragraph } from '@alifd/next';

import { Input, Button, Select, DatePicker, Radio, Message } from '@alifd/next';
// import {
//   FormBinderWrapper as IceFormBinderWrapper,
//   FormBinder as IceFormBinder,
//   FormError as IceFormError,
// } from '@icedesign/form-binder';
// import DataBinder from '@icedesign/data-binder';

// const { Option } = Select;
// const { Group: RadioGroup } = Radio;
// @DataBinder({
//   SaveUser: {
//     url: 'http://localhost:8000/message/savejson',
//     method: 'post',
//     data: {  
//     },
//   },

// })

const content = 
'春季停车收费说明：白天时间6:00-22:00 每小时/2元 ，夜晚时间22:00-6:00 每小时/2.5元。临时停车不超过30分钟不收费用。';

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
