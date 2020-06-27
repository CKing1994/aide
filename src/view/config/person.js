import React from 'react'
import { LikeTwoTone, EnvironmentTwoTone } from '@ant-design/icons'

const person = {
    person:[{
        attr: "name",
        className: "BBlist_span BBlist_name person_PersonCollection_name"
    },{
        attr: "time",
        className: "BBlist_time person_PersonCollection_time"
    },{
        attr: "portrait",
        className: "person_PersonCollection_portrait"
    },{
        attr: "title",
        className: "BBlist_title person_PersonCollection_title"
    },{
        attr: "content",
        className: "BBlist_content person_PersonCollection_content"
    },{
        attr: "zujian",
        className: "BBlist_ass person_PersonCollection_zujian"
    },{
        attr: "tags",
        className: "BBlist_tags person_PersonCollection_tags"
    },{
        attr: "other",
        className: "BBlist_reward",
        before_icon: <LikeTwoTone />
    },{
        attr: "local",
        className: "person_PersonCollection_local",
        before_icon: <EnvironmentTwoTone />
    }]
}


export default person;