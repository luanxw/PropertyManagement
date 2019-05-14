/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Input, Button, Select, DatePicker, Radio, Message } from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import DataBinder from '@icedesign/data-binder';

const { Option } = Select;
const { Group: RadioGroup } = Radio;
@DataBinder({
  SaveUser: {
    url: 'http://localhost:8000/message/savejson',
    method: 'post',
    data: {  
    },
  },

})
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

  formChange = (value) => {
    console.log('value', value);
    this.setState({
      value,
    });
  };

  validateAllFormField = () => {
    // console.log(this.state.value)
    this.props.updateBindingData('SaveUser', {
      params: {
        value: this.state.value,  
      },
    })

  };

  render() {
    return (
      <IceContainer style={styles.container}>
        <IceFormBinderWrapper
          value={this.state.value}
          // onChange={this.formChange}
          // ref="form"
        >
          <div style={styles.formContent}>
            <div style={styles.formItem}>
              <div style={styles.formLabel}>主题</div>
              <IceFormBinder
                required
                triggerType="onBlur"
                message="主题信息不能为空"
                name="top"
              >
                <Input
                  placeholder="请输入主题信息"
                  style={{ width: '400px' }}
                />
              </IceFormBinder>
              <div style={styles.formError}>
                <IceFormError name="text" />
              </div>
            </div>
            
            <div style={styles.formItem}>
              <div style={styles.formLabel}>公告内容</div>
              <IceFormBinder
                required
                triggerType="onBlur"
                message="公告内容不能为空"
                name="text"
              >
                <Input.TextArea placeholder="请输入公告内容" style={{ width: '400px' }} />
              </IceFormBinder>
              <div style={styles.formError}>
                <IceFormError name="maintenanc" />
              </div>
            </div>
            <div style={styles.formItem}>
              <div style={styles.formLabel}>日期</div>
                <DatePicker style={{ width: '400px'}} />
            </div>
           
            <Button
              type="primary"
              style={styles.submitButton}
              onClick={this.validateAllFormField}
            >
              提 交
            </Button>
          </div>
        </IceFormBinderWrapper>
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
