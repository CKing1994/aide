import React, { Component } from 'react'
import {PointList,rank_data} from '../../view/Person'

export default class Tab extends Component {
    state = {
        tab_bar:null
    }

    mapping(data){
        return data.map(ele=>{
            console.log(ele);
        })
    }

    render() {
        return (
            <div>
                <ul id="control" className="df">
                    {this.state.tab_bar && this.mapping(this.state.tab_bar)}
                    {/* <li onClick={() => this.tab(1)}>总排行</li>
                    <li onClick={() => this.tab(2)}>UI</li>
                    <li onClick={() => this.tab(3)}>后端</li> */}
                </ul>
                {/* {this.state.num === 1 && <PointList data={rank_data.all.data} />}
                {this.state.num === 2 && <PointList data={rank_data.ui.data} />}
                {this.state.num === 3 && <PointList data={rank_data.backend.data} />} */}
            </div>
        )
    }
}
