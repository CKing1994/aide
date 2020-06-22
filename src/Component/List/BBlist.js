import List from './List'
import './CSS/BBlist.css'
import axios from 'axios'

import React from 'react';
import { EnvironmentTwoTone,LikeTwoTone } from '@ant-design/icons';

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
    tags: "span"
}

export default class BBlist extends List {
    tags = tags

    hid = ["id"]

    order = ["portrait", "name", "time", "tags", "title", "content", "zujian", "local", "comment", "reward"]

    splice(arr){
        let dom = arr.splice(1,2)
        arr.splice(1,0,<div className={"df"}>{dom}</div>)
        dom = arr.splice(0,2)
        arr.unshift(<div className={"df"}>{dom}</div>)
        dom = arr.splice(0,2)
        arr.unshift(<div className={"df"}>{dom}</div>)
        return arr
    }

    componentDidMount() {

        // 直接给元素添加样式
        // this.css({
        //     className:""
        // })

        // registry方法是添加数据标签的方法 使用方法如下
        this.registry({
            attr: "name",
            className: "BBlist_span BBlist_name"
        })

        this.registry({
            attr: "time",
            className: "BBlist_time"
        })

        this.registry({
            attr: "portrait",
            className: "BBlist_img hhh"
        })

        this.registry({
            attr: "title",
            className: "BBlist_title"
        })

        this.registry("img", {
            className: "BBlist_img"
        })

        this.registry({
            attr: "content",
            className: "BBlist_content"
        })
        this.registry({
            attr: "zujian",
            className: "BBlist_ass"
        })

        this.registry({
            attr: "tags",
            className: "BBlist_tags"
        })

        this.registry("li", {
            className: "BBlist_li"
        })
        

        this.registry({
            attr: "other",
            className: "BBlist_reward",
            before_icon: <LikeTwoTone />
        })
        

        // 给元素添加标签
        this.registry({
            attr: "local",
            className: "BBlist_local",
            before_icon: <EnvironmentTwoTone/>
        })

        
        axios.get('config.json').then((res) => {


            // 添加容器的方法 如 ul div 等
            this.docker_list = [
                {
                    tag: "ul", attr: {
                        id: "BBlist",
                        className: "xxx"
                    }
                },
            ]

            //  .BBlist_img    #BBlist_img

            this.mapping(res.data.view.BB_list.data)

        }).catch(function (error) {
            console.log(error);

        })
    }
}