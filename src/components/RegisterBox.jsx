import React, { Component } from 'react';

class RegisterBox extends Component {

    constructor(props){
        super(props);
        this.state={};
    }

    submitLogin(e){

    }
    
    render() { 
        return(

        <div className="inner-container">

        <div className="header">
        Register
        </div>
         <div className="box">
         <div className="input-group">
         <label htmlFor="username">Username</label>
         <label type="text" name="username" className="login-input" placeholder="Username"></label>
         </div>


          <div className="input-group">
         <label htmlFor="password">Password</label>
         <label type="password" name="username" className="login-input" placeholder="Password"></label>
         </div>

         <button type="button" className="login-btn" onClick={this.submitLogin.bind(this)}>Register</button>
         </div>
         </div>
)
    }
}
 
export default RegisterBox;