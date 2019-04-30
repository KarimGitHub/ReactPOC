import React, { Component } from 'react'
import LoginBox from './LoginBox';
import RegisterBox from './RegisterBox';

export default class Login extends Component {

  constructor(props)  {
      super(props);
      this.state = { isLoginOpen: true, isRegisterOpen: false};
  }


  showLoginBox(){
    this.setState({isRegisterOpen: false, isLoginOpen: true});
      }


  showRegisterBox(){
    this.setState({isRegisterOpen: true, isLoginOpen: false});
  }
  render() {
    return (
      <div className="root-container">

      <div className="box-container">

      <div className={"controller "+(this.state.isLoginOpen ? "selected-controller": "")} onClick={this.showLoginBox.bind(this)}>
      Login
      </div>
      
      <div className={"controller "+(this.state.isRegisterOpen ? "selected-controller": "") } onClick={this.showRegisterBox.bind(this)}>
      Register
      </div>

      </div>

      <div className="box-container">
      {this.state.isLoginOpen && <LoginBox></LoginBox>}
      {this.state.isRegisterOpen && <RegisterBox></RegisterBox>}
      </div>

       </div>
         
       
    )
  }
}
