import React, { Component } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import '../style/homestyle.css';
import Search from '../Component/search';
import Setting from '../Component/Setting';
import Rank from './Rank';
import BB from './BB';
import Person from './Person'
import event from '../ovoid/event';
import { _ } from '../ovoid/util/obj';
import local from '../ovoid/http/local';
import keypress from '../ovoid/event/keypress';

event.text(_("span"))
keypress.init()

// window.onload = function(){
//   console.clear()
// }


export default class Home extends Component {
    state = {
        person: false
    }

    componentDidMount() {
        if (local.get("person")) {
        }
    }

    close_Person = () => {
        this.setState({
            person: false
        })
    }
    open_Person = () => {
        this.setState({
            person: true
        })
    }

    render() {
        return (
            <div id="home">
                <div id="home_top">
                    <div id="imgbox">
                        <img src="title-logo.png" alt="logo" id="logo" />
                    </div>
                    <div id="searchbox">
                        <Search />
                        <Setting open={this.open_Person} />
                    </div>
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
