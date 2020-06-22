import React, { Component } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import '../style/homestyle.css';
import Search from '../Component/search';
import Setting from '../Component/Setting';
import Rank from './Rank';
import BB from './BB';
import Person from './Person'

// window.onload = function(){
//   console.clear()
// }

export default class Home extends Component {
  render() {
    return (
      <div id="home">
        <div id="imgbox">
           <img src="title-logo.png" alt="logo" id="logo"/>
        </div>
        <div id="searchbox">
          <Search />
          <Setting />
        </div>
        <Rank />
        <Person />
        <PlusOutlined />
        <BB /> 
        <div id="bgcimg"></div>
      </div>
    )
  }
}
