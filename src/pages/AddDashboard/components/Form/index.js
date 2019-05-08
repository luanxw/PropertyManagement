/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Input, Button, Select, DatePicker, Radio, Message } from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';

const { Option } = Select;
const { Group: RadioGroup } = Radio;

export default class DonationForm extends Component {
  static displayName = 'DonationForm';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: {
        status: 'pending',
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
    this.refs.form.validateAll((errors, values) => {
      if (errors) {
        console.log({ errors });
        Message.error('提交失败');
        return;
      }
      console.log({ values });
      Message.success('提交成功');
    });
  };

  render() {
    return (
      <IceContainer style={styles.container}>
        <IceFormBinderWrapper
          value={this.state.value}
          onChange={this.formChange}
          ref="form"
        >
          <div style={styles.formContent}>
            <div style={styles.formItem}>
              <div style={styles.formLabel}>主题</div>
              <IceFormBinder
                required
                triggerType="onBlur"
                message="主题信息不能为空"
                name="text"
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
                name="maintenance"
              >
                <Input.TextArea placeholder="请输入公告内容" style={{ width: '400px' }} />
              </IceFormBinder>
              <div style={styles.formError}>
                <IceFormError name="maintenanc" />
              </div>
            </div>
            <div style={styles.formItem}>
              <div style={styles.formLabel}>日期</div>
              <IceFormBinder name="time">
                <DatePicker style={{ width: '400px'}} />
              </IceFormBinder>
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
