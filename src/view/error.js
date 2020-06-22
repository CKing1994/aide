import React, { Component } from 'react';
import '../style/404.css';

export default class Error extends Component {
  render() {
    return (
      <div className="error">
        <img src="penxue.png" alt="喷血"/>
        <center>页面找不到了 让你瞎点 喷你一脸</center>
      </div>
    )
  }
}
