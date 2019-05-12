/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Input, Button, Grid, Message, Checkbox , Dropdown, Menu, Select, Script  } from '@alifd/next';
import Icon from '@icedesign/foundation-symbol';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';

const { Row, Col } = Grid;
const { Option } = Select;
// const menu = (
//   <Menu>
//       <Menu.Item> 1</Menu.Item>
//       <Menu.Item> 2</Menu.Item>
//       <Menu.Item> 3</Menu.Item>
//       <Menu.Item> 4</Menu.Item>
//       <Menu.Item> 5</Menu.Item>
//       <Menu.Item> 6</Menu.Item>
//       <Menu.Item> 7</Menu.Item>
//       <Menu.Item> 8</Menu.Item>
//   </Menu>
// );
// const menu1 = (
//   <Menu>
//       <Menu.Item> 1</Menu.Item>
//       <Menu.Item> 2</Menu.Item>
//       <Menu.Item> 3</Menu.Item>
//       <Menu.Item> 4</Menu.Item>
//   </Menu>
// );
@withRouter
class UserRegister extends Component {
  static displayName = 'UserRegister';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: {
        name: '',
        email: '',
        passwd: '',
        rePasswd: '',
        sex: '',
        phone: '',
        IDnumber: '',
        build: '',
        top: '',
        room: '',
      },
    };
  }

  checkPasswd = (rule, values, callback) => {
    if (!values) {
      callback('请输入正确的密码');
    } else if (values.length < 8) {
      callback('密码必须大于8位');
    } else if (values.length > 16) {
      callback('密码必须小于16位');
    } else {
      callback();
    }
  };

  checkPasswd2 = (rule, values, callback, stateValues) => {
    if (!values) {
      callback('请输入正确的密码');
    } else if (values && values !== stateValues.passwd) {
      callback('两次输入密码不一致');
    } else {
      callback();
    }
  };

  formChange = (value) => {
    this.setState({
      value,
    });
  };

  handleSubmit = () => {
    this.refs.form.validateAll((errors, values) => {
      if (errors) {
        console.log('errors', errors);
        return;
      }
      console.log(values);
      Message.success('注册成功');
      this.props.history.push('/user/login');
    });
  };

  render() {
    return (
      <div className="user-register">
        <div className="formContainer">
          <h4 className="formTitle">注 册</h4>
          <IceFormBinderWrapper
            value={this.state.value}
            onChange={this.formChange}
            ref="form"
          >
            <div className="formItems">
              <Row className="formItem">
                <Col className="formItemCol">
                  <Icon type="person" size="small" className="inputIcon" />

                  <IceFormBinder
                    name="name"
                    required
                    message="请输入正确的用户名"
                  >
                    <Input className="next-input-single" placeholder="用户名" />
                  </IceFormBinder>
                </Col>
                <Col>
                  <IceFormError name="name" />
                </Col>
              </Row>

              <Row className="formItem">
              <Col>
              <span style={styles.caseNumber}>
              <Select
        placeholder=""
        style={{ ...styles.select, ...styles.input }}
      >
        <Option >男</Option>
        <Option >女</Option>
      </Select>
      性别
        </span>
              </Col>
            </Row>

            <Row className="formItem">
            <Col className="formItemCol">
              <Icon type="" size="small" className="inputIcon" />
              <IceFormBinder
                type="build"
                name="build"
                required
                message="请输入楼号"
              >
              <span style={styles.caseNumber}>
              <Select
        placeholder=""
        style={{ ...styles.select, ...styles.input }}
      >
        <Option >1</Option>
        <Option >2</Option>
        <Option >3</Option>
        <Option >4</Option>
        <Option >5</Option>
        <Option >6</Option>
        <Option >7</Option>
        <Option >8</Option>
      </Select>
      号楼
      <Select
      placeholder=""
      style={{ ...styles.input, ...styles.shortInput }}
    >
      <Option >1</Option>
      <Option >2</Option>
      <Option >3</Option>
    </Select>
    单元
    <Input style={{ ...styles.input, ...styles.shortInput }} />
      房间
    </span>
              </IceFormBinder>
            </Col>
            <Col>
              <IceFormError name="build" />
            </Col>
          </Row>
          
              <Row className="formItem">
                <Col className="formItemCol">
                  <Icon type="mail" size="small" className="inputIcon" />
                  <IceFormBinder
                    type="email"
                    name="email"
                    required
                    message="请输入正确的邮箱"
                  >
                    <Input
                      className="next-input-single"
                      maxLength={20}
                      placeholder="邮箱"
                    />
                  </IceFormBinder>
                </Col>
                <Col>
                  <IceFormError name="email" />
                </Col>
              </Row>

              <Row className="formItem">
                <Col className="formItemCol">
                  <Icon type="lock" size="small" className="inputIcon" />
                  <IceFormBinder
                    name="passwd"
                    required
                    validator={this.checkPasswd}
                  >
                    <Input
                      className="next-input-single"
                      htmlType="password"
                      placeholder="至少8位密码"
                    />
                  </IceFormBinder>
                </Col>
                <Col>
                  <IceFormError name="password" />
                </Col>
              </Row>

              <Row className="formItem">
                <Col className="formItemCol">
                  <Icon type="lock" size="small" className="inputIcon" />
                  <IceFormBinder
                    name="rePasswd"
                    required
                    validator={(rule, values, callback) =>
                      this.checkPasswd2(
                        rule,
                        values,
                        callback,
                        this.state.value
                      )
                    }
                  >
                    <Input
                      className="next-input-single"
                      htmlType="password"
                      placeholder="确认密码"
                    />
                  </IceFormBinder>
                </Col>
                <Col>
                  <IceFormError name="rePassword" />
                </Col>
              </Row>


              <Row className="formItem">
                <Col className="formItemCol">
                  <Icon type="phone" size="small" className="inputIcon" />
                  <IceFormBinder
                    type="phone"
                    name="phone"
                    required
                    message="请输入11位手机号码"
                  >
                    <Input
                      className="next-input-single"
                      maxLength={20}
                      placeholder="电话"
                    />
                  </IceFormBinder>
                </Col>
                <Col>
                  <IceFormError name="phone" />
                </Col>
              </Row>              
              <Row className="formItem">
                <Col className="formItemCol">
                  <Icon type="" size="small" className="inputIcon" />
                  <IceFormBinder
                    type="IDnumber"
                    name="IDnumber"
                    required
                    message="请输入身份证号码"
                  >
                    <Input
                      className="next-input-single"
                      maxLength={20}
                      placeholder="身份证号码"
                    />
                  </IceFormBinder>
                </Col>
                <Col>
                  <IceFormError name="IDnumber" />
                </Col>
              </Row>

             
             
              <Row className="formItem">
                <Button
                  type="primary"
                  onClick={this.handleSubmit}
                  className="submitBtn"
                >
                  注 册
                </Button>
              </Row>

              <Row className="tips">
                <Link to="/user/login" className="tips-text">
                  使用已有账户登录
                </Link>
              </Row>
            </div>
          </IceFormBinderWrapper>
        </div>
      </div>
    );
  }
}

export default UserRegister;
const styles = {
  input: {
    margin: '0 4px',
  },
  select: {
    verticalAlign: 'middle',
    width: '40px',
  },
  shortInput: {
    width: '60px',
  },
}