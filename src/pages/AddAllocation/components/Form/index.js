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
              <div style={styles.formLabel}>房屋信息</div>
              <IceFormBinder
                required
                triggerType="onBlur"
                message="房屋信息不能为空"
                name="address"
              >
                <Input
                  placeholder="请输入房屋信息"
                  style={{ width: '400px' }}
                />
              </IceFormBinder>
              <div style={styles.formError}>
                <IceFormError name="address" />
              </div>
            </div>
            <div style={styles.formItem}>
              <div style={styles.formLabel}>联系方式</div>
              <IceFormBinder
                required
                triggerType="onBlur"
                message="联系方式不能为空"
                name="phone"
              >
                <Input
                  placeholder="请输入联系方式"
                  style={{ width: '400px' }}
                />
              </IceFormBinder>
              <div style={styles.formError}>
                <IceFormError name="phone" />
              </div>
            </div>
            <div style={styles.formItem}>
              <div style={styles.formLabel}>房屋状态</div>
              <IceFormBinder name="cate">
                <Select
                  placeholder="请选择"
                  mode="multiple"
                  style={{ width: '400px' }}
                >
                  <Option value="1">使用</Option>
                  <Option value="2">空置</Option>
                  <Option value="3">出租</Option>
                  <Option value="other">售卖</Option>
                </Select>
              </IceFormBinder>
            </div>
            <div style={styles.formItem}>
              <div style={styles.formLabel}>联系人</div>
              <IceFormBinder
                required
                triggerType="onBlur"
                message="联系人不能为空"
                name="name"
              >
                <Input placeholder="请输入联系人姓名" style={{ width: '400px' }} />
              </IceFormBinder>
              <div style={styles.formError}>
                <IceFormError name="namer" />
              </div>
            </div>
            <div style={styles.formItem}>
              <div style={styles.formLabel}>房屋格局</div>
              <IceFormBinder
                required
                triggerType="onBlur"
                message="格局内容不能为空"
                name="maintenance"
              >
                <Input placeholder="请输入格局内容" style={{ width: '400px' }} />
              </IceFormBinder>
              <div style={styles.formError}>
                <IceFormError name="maintenanc" />
              </div>
            </div>
            <div style={styles.formItem}>
              <div style={styles.formLabel}>日期</div>
              <IceFormBinder name="time">
                <DatePicker style={{ width: '400px' }} />
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
    marginBottom: '25px',
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
