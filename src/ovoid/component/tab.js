import React, { Component } from 'react'
import obj from '../util/obj'
import map from '../util/map'

export default class Tab extends Component {
    state = {
        tab_bar: null,
        num: 1,
        tab_content_list: null
    }

    bgc_color = ""
    toggle = (num) => {
        this.setState({
            num: num - 1
        }, () => {
            // 样式高亮
            map.exclusive(this.refs.control, num - 1,"person_tab", "person_tab_active")
        })
    }

    tab_bar(data) {
        return data.map(ele => {
            return <li onClick={() => {
                ele.event(ele.id)

            }}>{ele.name}</li>
        })
    }

    // 传入的必须是对象
    mapping(data) {
        this.setState({
            change: true,
            content_list: obj.getObjectValues(data)
        })
    }

    render() {
        let Ass = this.Ass
        return (
            <div>
                <ul id="control" className="df" ref="control">
                    {this.state.tab_bar && this.tab_bar(this.state.tab_bar)}
                </ul>
                {
                    this.state.content_list && this.state.content_list.map((ele, i) => {
                        if (this.state.num === i) {
                            return <Ass data={ele.data} />
                        }
                    })
                }
            </div>
        )
    }
}
