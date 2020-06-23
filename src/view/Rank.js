import React, { Component } from 'react'
import { LeftCircleOutlined } from '@ant-design/icons';
import Ranklist from '../Component/List/Ranklist';

// document.body.style.position='fixed';

export default class Rank extends Component {

    render() {
        return (
            <div id="rank">
                <div className="rankarrow">
                    <LeftCircleOutlined />    
                </div>
                <Ranklist />
            </div> 
        )
    }
}
