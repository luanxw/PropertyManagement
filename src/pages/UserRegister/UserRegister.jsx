/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Input, Button, Grid, Message, Select, Script,Tag  } from '@alifd/next';
import Icon  from '@icedesign/foundation-symbol';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import DataBinder from '@icedesign/data-binder';
 
const { Row, Col } = Grid;
const { Option } = Select;
//const {Group: TagGroup} = Tag;

@DataBinder({
  SaveUser: {
    url: 'http://localhost:8000/user/savejson',
    method: 'post',
    data: {  
    },
  },

})
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
        password: '',
        repassword: '',
        sex: '',
        phone: '',
        idnumber: '',
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
    } else if (values && values !== stateValues.password) {
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
    // console.log(this.state.value)
    this.props.updateBindingData('SaveUser', {
      params: {
        // name: this.state.value.name,
        // build: this.state.value.build,  
        // top: this.state.value.top,  
        // room: this.state.value.room,  
        // email: this.state.value.email,  
        // password: this.state.value.password,  
        // repassword: this.state.value.repassword,  
        // sex: this.state.value.sex,  
        // phone: this.state.value.phone,  
        // idnumber: this.state.value.idnumber, 
        value: this.state.value,  
      },
     // 通过设置这个数据，可以快速将页码切换，避免等接口返回才会切换页面
      // 这里的变更是同步生效的
      // 需要注意多层级数据更新的处理，避免丢掉某些数据
      defaultBindingData: {
        
      }
    },({success}) => {
      if(success == null){
        Message.error("服务器异常,请再试一次")
      }else if(success == false){
            //  Message.error(message)  
      }else if(success == true){
        Message.success('注册成功，请愉快的登录吧');
        this.props.history.push('/user/login');
    }
      else{
        Message.error("网络错误,请再试一次")
      }
    }
    
    );
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
                  <IceFormError  />
                </Col>
              </Row>

              
              <Row className="formItem">
              <Col className="formItemCol">

              <IceFormBinder
                    name="sex"
                    required
                    message="请选择性别"
                  >
                  <Select
                    placeholder=""
                    className="next-input-single"
                    style={{ width: '62px' }}
                    addonTextAfter="性别" 
                    className="next-input-single"
                  >
                    <Option  value="男"  >男</Option>
                    <Option  value="女"  >女</Option>
                  </Select>         
                     
                </IceFormBinder>

                
              </Col>
             
            </Row>

            <Row className="formItem">
            <Col className="formItemCol">
              <Icon type="" size="small" className="inputIcon" />

              <IceFormBinder
                name="build"
                required
                message="请输入楼号"
              >
              <Select
                  placeholder=""
                  style={{ ...styles.select, ...styles.input }}
                  className="next-input-single"
                  addonTextAfter="楼号" 
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
             
              &nbsp; &nbsp; &nbsp;
              <IceFormBinder
                name="top"
                required
                message="请输入正确的单元号"
              >
                <Select
                placeholder=""
                style={{ ...styles.input, ...styles.shortInput }}
                addonTextAfter="单元"
              >
                <Option value="1单元" >1</Option>
                <Option value="2单元" >2</Option>
                <Option value="3单元">3</Option>
              </Select>
              </IceFormBinder>
            
              &nbsp; &nbsp; &nbsp;
              <IceFormBinder
                name="room"
                required
                message="请输入正确的房间号"
              >
                <Input
                style={{ ...styles.input, ...styles.shortInput}}
                  className="next-input-single"
                 addonTextAfter="房间" 
                />
              </IceFormBinder>
           

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
                    name="password"
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
                    name="repassword"
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
                  <IceFormError  />
                </Col>
              </Row>


              <Row className="formItem">
                <Col className="formItemCol">
                  <Icon type="phone" size="small" className="inputIcon" />
                  <IceFormBinder
                    type="phone"
                    name="phone"
                    message="请输入11位手机号码"
                  >
                   <Input
                      className="next-input-single"
                      minLength={11}
                      maxLength={11}
                      placeholder="电话号码"
                    />
                    {/* <Input
                     minLength={11}
                     maxLength={11}
                    //  required
                      className="next-input-single"
                      // maxLength={20}
                      placeholder="电话"
                    /> */}
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
                    type="idnumber"
                    name="idnumber"
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
                  <IceFormError name="idnumber" />
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
    // verticalAlign: 'middle',
    width: '100px',
  },
  shortInput: {
    width: '100px',
  },
  sex: {
    width: '100px',
  },
}