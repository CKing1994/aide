import List from '../Component/List/List'

import React from 'react';
import config from './config';
import hjjp from '../ovoid/http/hjjp';

// 数据标签要求
let tags = {
    name: "span",
    time: "span",
    portrait: "img",
    title: "h3",
    local: "h4",
    content: "p",
    tags: "span",
    other: "span",
}

export default class BBlist extends List {
    tags = tags

    hid = ["id"]

    order = ["portrait", "name", "time", "tags", "title", "content", "zujian", "local", "comment", "reward"]

    splice(arr) {
        let dom = arr.splice(1, 2)
        arr.splice(1, 0, <div className={"df"}>{dom}</div>)
        dom = arr.splice(0, 2)
        arr.unshift(<div className={"df"}>{dom}</div>)
        dom = arr.splice(0, 2)
        arr.unshift(<div className={"df"}>{dom}</div>)
        return arr
    }

    componentDidMount() {

        // registry方法是添加数据标签的方法
        this.registry(config.bblist)

        this.registry("img", {
            className: "BBlist_img"
        })
        this.registry("li", {
            className: "BBlist_li"
        })
        

        // 添加容器的方法 如 ul div 等
        this.docker_list = [
            {
                tag: "ul", attr: {
                    id: "BBlist",
                }
            },
        ]

        hjjp('config.json',(res) => {
            this.mapping(res.data.view.BB_list.data)
        })
    }
}