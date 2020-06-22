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
  state = {
    person:false
  }

  close_Person = ()=> {
    this.setState({
      person:false
    })
  }
  open_Person = () =>{
    this.setState({
      person:true
    })
  }

  render() {
    return (
      <div id="home">
        <div id="imgbox">
           <img src="title-logo.png" alt="logo" id="logo"/>
        </div>
        <div id="searchbox">
          <Search />
          <Setting open={this.open_Person} />
        </div>
        <Rank />
        {this.state.person && <Person close={this.close_Person} />}
        <PlusOutlined />
        <BB /> 
        <div id="bgcimg"></div>
      </div>
    )
  }
}
