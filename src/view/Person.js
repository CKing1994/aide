import React, { Component } from 'react'
import { IdcardTwoTone, AlertTwoTone, UnlockTwoTone, TrophyTwoTone, FileTextTwoTone, FilePdfTwoTone, CheckSquareTwoTone, StarTwoTone } from '@ant-design/icons'
import { $, _ } from '../ovoid/util/obj'
import List from '../Component/List/List'
import ref from '../ovoid/util/ref'
import { O } from '../ovoid'
import local from '../ovoid/http/local'
import keypress from '../ovoid/event/keypress'
import Tab from '../ovoid/component/tab'
import hjjp from '../ovoid/http/hjjp'
import config from './config'
import Silder from '../Component/Slider'

let obj = {
    twoToneColor: "#460ae2"
}

export default class Person extends Component {
    state = {
        content: null
    }

    componentDidMount() {
        ref.register(this)

        this.setMap()

        if (local.get("person")) {
            this.getContent(local.get("person")["person_panel"])
        } else {
            this.getContent(1)
        }

        keypress.register(27, this.props.close)
    }

    map = new Map()

    setMap() {
        let arr = [<PersonInfo />, <PersonCollection />, <PersonTips />, <PersonPrivacy />, <PersonTrain />, <PersonBB />, <PersonPointList />, <PersonAbout />]
        for (let i = 1; i <= arr.length; i++) {
            this.map.set(i, arr[i - 1])
        }
    }

    getContent(id) {
        let content = this.map.get(id)

        local.set("person", "person_panel", id)


        let purple = "#7f54eb"
        let white = "#fff"

        this.setState({
            content: content
        })
        let ele = _("li", $("#person_model"))[id - 1]

        let bro = ele.parentNode.children
        for (let i = 0; i < bro.length; i++) {
            bro[i].style.backgroundColor = white

            _("span", bro[i])[0].style.color = purple
            _("span", bro[i])[1].style.color = purple
        }

        ele.style.backgroundColor = purple
        _("span", ele)[0].style.color = white
        _("span", ele)[1].style.color = white
    }

    render() {
        return (
            <div id="shadow">
                <div id="person_model">
                    <span id="person_exit" onClick={this.props.close}>×</span>
                    <div id="ul" ref="person_tab">
                        <ul>
                            <li onClick={() => { this.getContent(1) }}>
                                <IdcardTwoTone {...obj} />
                                <span>个人信息</span>
                            </li>
                            <li onClick={() => { this.getContent(2) }}>
                                <StarTwoTone {...obj} />
                                <span>我的收藏</span>
                            </li>
                            <li onClick={() => { this.getContent(3) }}>
                                <AlertTwoTone {...obj} />
                                <span>提醒功能</span>
                            </li>
                            <li onClick={() => { this.getContent(4) }}>
                                <UnlockTwoTone {...obj} />
                                <span>隐私保护</span>
                            </li>
                            <li onClick={() => { this.getContent(5) }}>
                                <FilePdfTwoTone {...obj} />
                                <span>破客学院</span>
                            </li>
                            <li onClick={() => { this.getContent(6) }}>
                                <FileTextTwoTone {...obj} />
                                <span>哔哔空间</span>
                            </li>
                            <li onClick={() => { this.getContent(7) }}>
                                <TrophyTwoTone {...obj} />
                                <span>积分榜</span>
                            </li>
                            <li onClick={() => { this.getContent(8) }}>
                                <CheckSquareTwoTone {...obj} />
                                <span>关于破客</span>
                            </li>
                        </ul>
                    </div>
                    <div id="person_detail" ref="person_detail">
                        {this.state.content}
                    </div>
                </div>
            </div>
        )
    }
}


let my_data = {
    手机: "18888888888",
    部门: "研发部",
    工号: "002",
    当前积分: "16000",
}


const SaiDong = {
    clear(num) {
        let ele = O.util.get("Person person_tab ul .anticon")[num]
        this.ele = ele
        ele.style.animation = "doudong .5s ease-in"
    },
    start() {
        if (this.ele) {
            let ele = this.ele
            ele.style.animation = null
        }
    }
}

class PersonInfo extends Component {
    componentDidMount() {
        SaiDong.clear(0)
    }
    componentWillUnmount() {
        SaiDong.start()
    }

    show_info(obj) {
        let arr = []
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                arr.push(<p className="person_PersonInfo_info"><span>{key}</span>{obj[key]}</p>)
            }
        }
        return arr
    }

    render() {
        return (
            <div id="person_info" ref="info">
                <div className="df start">
                    <div id="person_info_headimg">
                        <img className="BBlist_img" src={"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592933670614&di=2fc051246fe0f7ad59351678737b6807&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fedfd1c456c91b3b3bbd09eec8abc5b66a0d19c7839011-2nCpl7_fw658"} />
                    </div>
                    <div className="vertical">
                        <span id="person_id">吴昊</span>
                        <div id="person_glory">
                            <span className="person_glory">♔</span>
                            <span className="person_glory">♚</span>
                            <span className="person_glory">♕</span>
                            <span className="person_glory">♛</span>
                        </div>
                    </div>
                </div>
                {
                    this.show_info(my_data)
                }
            </div>
        )
    }
}


class PersonCollection extends Tab {
    componentDidMount() {
        SaiDong.clear(1)
        ref.register(this)

        this.Ass = PersonCollectionList
        this.bgc_color = "#7f54eb"

        this.setState({
            tab_bar: [
                { id: 1, event: this.toggle, name: "所有" },
                { id: 2, event: this.toggle, name: "工单" },
                { id: 3, event: this.toggle, name: "杂谈" },
            ]
        })
        this.toggle(1)

        hjjp('config.json', (res) => {
            this.mapping(res.data.view.collection_data)
        })
    }

    componentWillUnmount() {
        SaiDong.start()
    }
}

class PersonCollectionList extends List {

    tags = {
        name: "span",
        time: "span",
        portrait: "img",
        title: "h3",
        local: "h4",
        content: "p",
        tags: "span",
        other: "span"
    }

    hid = ["id"]

    order = ["portrait", "name", "time", "tags", "title", "content", "zujian", "local", "comment", "reward"]

    splice(arr) {
        let dom = arr.splice(1, 2)
        arr[0] = <div className="person_tx">{arr[0]}</div>
        arr.splice(1, 0, <div className={"df"}>{dom}</div>)
        dom = arr.splice(0, 2)
        arr.unshift(<div className={"df"}>{dom}</div>)
        dom = arr.splice(0, 2)
        arr.unshift(<div className={"df"}>{dom}</div>)
        return arr
    }

    componentDidMount() {
        this.registry(config.person)


        this.registry("img", {
            className: "BBlist_img person_PersonCollection_img"
        })

        this.registry("li", {
            className: "BBlist_li person_PersonCollection_li"
        })

        // 元素外包裹盒子需要如何处理
        this.docker_list = [
            {
                tag: "ul", attr: {
                    id: "person_PersonCollection_ul",
                }
            },
        ]

        hjjp('config.json', res => {
            this.mapping(this.props.data)
        })
    }
}

class PersonTips extends Component {
    componentDidMount() {
        SaiDong.clear(2)
    }
    componentWillUnmount() {
        SaiDong.start(2)
    }
    render() {
        return (
            <div>暂无收藏</div>
        )
    }
}

class PersonPrivacy extends Component {
    componentDidMount() {
        SaiDong.clear(3)
    }
    componentWillUnmount() {
        SaiDong.start(3)
    }
    render() {
        return (
            <div>123</div>
        )
    }
}

class PersonTrain extends Component {
    componentDidMount() {
        SaiDong.clear(4)
    }
    componentWillUnmount() {
        SaiDong.start(4)
    }
    render() {
        return (
            <PersonSilder />
        )
    }
}

let data = {
    data:[
        {
            id:1,
            src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593257595274&di=1968d8fb4bf9174e81ad750c5e348e43&imgtype=0&src=http%3A%2F%2Fupload.hf365.com%2F2018%2F1116%2F1542336776958.jpg"
        },
        {
            id:2,
            src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593257595274&di=1968d8fb4bf9174e81ad750c5e348e43&imgtype=0&src=http%3A%2F%2Fupload.hf365.com%2F2018%2F1116%2F1542336776958.jpg"
        },
        {
            id:3,
            src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593257595274&di=1968d8fb4bf9174e81ad750c5e348e43&imgtype=0&src=http%3A%2F%2Fupload.hf365.com%2F2018%2F1116%2F1542336776958.jpg"
        }
    ],
}

class PersonSilder extends Silder {
    componentDidMount() {
        this.mapping(data.data)
    }
}

class PersonBB extends Component {
    componentDidMount() {
        SaiDong.clear(5)
    }
    componentWillUnmount() {
        SaiDong.start(5)
    }
    render() {
        return (
            <div>123</div>
        )
    }
}


class PersonPointList extends Tab {
    componentDidMount() {
        SaiDong.clear(6)
        ref.register(this)

        this.Ass = PointList
        this.bgc_color = "#7f54eb"

        this.setState({
            tab_bar: [
                { id: 1, event: this.toggle, name: "总排行" },
                { id: 2, event: this.toggle, name: "UI" },
                { id: 3, event: this.toggle, name: "后端" },
            ]
        })
        this.toggle(1)

        hjjp('config.json', (res) => {
            this.mapping(res.data.view.rank_data)
        })
    }

    componentWillUnmount() {
        SaiDong.start(6)
    }
}


export class PointList extends List {
    tags = {
        rank: "span",
        name: "span",
        point: "span"
    }

    order = ["rank", "name", "point"]

    componentDidMount() {

        this.registry("rank", {
            className: "person_PersonPointList_rank"
        })

        this.registry({
            attr: "name",
            className: "person_PersonPointList_name"
        })

        this.registry("point", {
            className: "person_PersonPointList_point "
        })

        this.registry("li", {
            className: "person_PersonPointList_li df"
        })

        this.docker_list = [
            {
                tag: "ul", attr: {
                    id: "PersonPointList_ul",
                    className: "person_PersonPointList_ul df vertical"
                }
            },
        ]

        this.mapping(this.props.data)
    }
}

class PersonAbout extends List {
    tags = {
        name: "span",
    }

    order = ["name"]
    componentDidMount() {
        SaiDong.clear(7)


        this.registry("li", {
            className: "person_PersonPointList_li df"
        })

        hjjp("config.json", res => {
            this.mapping(res.data.view.BB_list.data)
        })
    }


    componentWillUnmount() {
        SaiDong.start(7)
    }
}

