import React, { Component } from 'react';
import { Button } from 'antd';

export default class Login extends Component {
  render() {
    return (
        <div id="login_box">
            <div id="shadow">
                <div id="left">
                    
                </div>
                <div id="right">
                    
                    <div id="srk">
                        <input className="pk_input" placeholder="用户名"/>
                        <input className="pk_input" placeholder="密码" type="password"/>
                    </div>
                    <div id="anniu">
                        <Button type="primary" shape="circle" id="loginbut">→</Button>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
