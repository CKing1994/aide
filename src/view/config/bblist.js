import React from 'react'
import { LikeTwoTone,EnvironmentTwoTone } from '@ant-design/icons';


const bblist = {
    bblist:[{
        attr: "name",
        className: "BBlist_span BBlist_name"
    },{
        attr: "time",
        className: "BBlist_time"
    },{
        attr: "portrait",
        className: "BBlist_img"
    },{
        attr: "title",
        className: "BBlist_title"
    },{
        attr: "content",
        className: "BBlist_content"
    },{
        attr: "zujian",
        className: "BBlist_ass"
    },{
        attr: "tags",
        className: "BBlist_tags"
    },{
        attr: "other",
        className: "BBlist_reward",
        before_icon: <LikeTwoTone />
    },{
        attr: "local",
        className: "BBlist_local",
        before_icon: <EnvironmentTwoTone />
    }]
}

export default bblist;