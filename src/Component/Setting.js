import React, { Component } from 'react'
import { UserOutlined } from '@ant-design/icons';

export default class Setting extends Component {
    render() {
        return (
            <div className="setting" onClick={this.props.open}>
                <UserOutlined />
            </div>
        )
    }
}
