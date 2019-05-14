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
    url: 'http://localhost:8000/work/savejson',
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
        name: '',
        phone: '',
        // date: '',
        worktype: '',
        worktext: '',
        build: '',
        top: '',
        room: '',
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
    console.log(this.state.value)
    // this.refs.form.validateAll((errors, values) => {
    //   if (errors) {
    //     console.log({ errors });
    //     Message.error('提交失败');
    //     return;
    //   }
    //   console.log({ values });
    //   Message.success('提交成功');
    // });
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
          ref="form"
        >
          <div style={styles.formContent}>

            <div style={styles.formItem}>
             <div style={styles.formLabel}>报修地址</div>
             <IceFormBinder
                name="build"
                required
                message="请输入正确的房间号"
              >
              <Select
                placeholder=""
                style={{ ...styles.select, ...styles.input }}
              >
                  <Option  value="1号楼" >1</Option>
                  <Option  value="2号楼">2</Option>
                  <Option  value="3号楼">3</Option>
                  <Option  value="4号楼">4</Option>
                  <Option  value="5号楼">5</Option>
                  <Option  value="6号楼">6</Option>
                  <Option  value="7号楼">7</Option>
                  <Option  value="8号楼">8</Option>
              </Select>
              </IceFormBinder>
              <div style={styles.Label}>号楼</div>


              <IceFormBinder
                name="top"
                required
                message="请输入正确的房间号"
              >
              <Select
                placeholder=""
                style={{ ...styles.input, ...styles.shortInput }}
              >
                <Option value="1单元" >1</Option>
                <Option value="2单元" >2</Option>
                <Option value="3单元">3</Option>
              </Select>
              </IceFormBinder>
              <div style={styles.Label}>单元</div>
              <IceFormBinder
                required
                message="联系方式不能为空"
                name="room"
              >
              <Input style={{ ...styles.shortInput }} />
              </IceFormBinder>
                <div style={styles.Label}>房间</div>
            </div>
            
            <div style={styles.formItem}>
              <div style={styles.formLabel}>联系方式</div>
              <IceFormBinder
                required
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
              <div style={styles.formLabel}>维修类别</div>
              <IceFormBinder
                name="worktype"
                required
              >
                <Select
                  placeholder="请选择"
                  // mode="multiple"
                  style={{ width: '400px' }}
                >
                  <Option value="房屋围墙维修">房屋围墙维修</Option>
                  <Option value="水电器维修">水电器维修</Option>
                  <Option value="门窗维修">门窗维修</Option>
                  <Option value="其他">其他</Option>
                </Select>
              </IceFormBinder>
            </div>

            <div style={styles.formItem}>
              <div style={styles.formLabel}>联系人</div>
              <IceFormBinder
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
              <div style={styles.formLabel}>维修信息</div>
              <IceFormBinder
                required
                message="维修内容不能为空"
                name="worktext"
              >
                <Input.TextArea placeholder="请输入维修内容" style={{ width: '400px' }} />
              </IceFormBinder>
              <div style={styles.formError}>
                <IceFormError name="maintenanc" />
              </div>
            </div>
            {/* <div style={styles.formItem}> */}
              {/* <div style={styles.formLabel}>报修日期</div>
              <IceFormBinder name="time">
                <DatePicker style={{ width: '400px' }} />
              </IceFormBinder>
            </div> */}
            {/* <div style={styles.formItem}>
              <div style={styles.formLabel}>状态</div>
              <IceFormBinder name="status">
                <RadioGroup
                  dataSource={[
                    {
                      value: 'on',
                      label: '立即维修',
                    },
                    {
                      value: 'delay',
                      label: '延迟维修',
                    },
                  ]}
                />
              </IceFormBinder>
            </div> */}
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
  Label: {
    width: '30px',
    marginRight: '15px',
    textAlign: 'right',
  },
  formError: {
    marginLeft: '10px',
  },
  submitButton: {
    marginLeft: '85px',
  },
  caseNumber: {
    marginRight: '20px',
  },
};
