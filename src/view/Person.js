import React, { Component } from 'react'
import { IdcardTwoTone, AlertTwoTone, UnlockTwoTone, TrophyTwoTone, FileTextTwoTone, FilePdfTwoTone, CheckSquareTwoTone, StarTwoTone ,LikeTwoTone,EnvironmentTwoTone} from '@ant-design/icons'
import { $, _ } from '../ovoid/util/obj'
import List from '../Component/List/List'
import ref from '../ovoid/util/ref'
import { O, OvOid } from '../ovoid'
import axios from 'axios'

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
        this.getContent(1)
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
                    <div id="person_detail">
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

let rank_data = {
    all: {
        data: [
            {
                rank: 1,
                name: "黄俊",
                point: 15000
            },
            {
                rank: 2,
                name: "江骏平",
                point: 12000
            },
            {
                rank: 3,
                name: "范海文",
                point: 10000
            }
        ],
    },
    ui: {
        data: [
            {
                rank: 1,
                name: "范海文",
                point: 1500
            },
            {
                rank: 2,
                name: "黄俊",
                point: 1000
            },
            {
                rank: 3,
                name: "江骏平",
                point: 0
            }
        ],

    },
    backend: {
        data: [
            {
                rank: 1,
                name: "黄俊",
                point: 7000
            },
            {
                rank: 2,
                name: "江骏平",
                point: 5000
            },
            {
                rank: 3,
                name: "范海文",
                point: 0
            }
        ],
    }
}

const SaiDong = {
    clear(num) {
        let ele = O.util.get("Person person_tab ul .anticon")[num]
        this.ele = ele
        ele.style.animation = "doudong .5s ease-in"
    },
    start(num) {
        if(this.ele){
            let ele = this.ele
            ele.style.animation = null
        }
    }
}

class PersonInfo extends Component {
    componentDidMount(){
        SaiDong.clear(0)
    }
    componentWillUnmount(){
        SaiDong.start(0)
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
                    <img className="BBlist_img" src={"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592388420290&di=e390d76564166376c9d6c8a293609395&imgtype=0&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D1417334716%2C1817608421%26fm%3D214%26gp%3D0.jpg"} />
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

class PersonCollection extends List {

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
        SaiDong.clear(1)

        this.registry({
            attr: "name",
            className: "BBlist_span BBlist_name person_PersonCollection_name"
        })

        this.registry({
            attr: "time",
            className: "BBlist_time person_PersonCollection_time"
        })

        this.registry({
            attr: "portrait",
            className: "BBlist_img person_PersonCollection_portrait"
        })

        this.registry({
            attr: "title",
            className: "BBlist_title person_PersonCollection_title"
        })

        this.registry("img", {
            className: "BBlist_img person_PersonCollection_img"
        })

        this.registry({
            attr: "content",
            className: "BBlist_content person_PersonCollection_content"
        })
        this.registry({
            attr: "zujian",
            className: "BBlist_ass person_PersonCollection_zujian"
        })

        this.registry({
            attr: "tags",
            className: "BBlist_tags person_PersonCollection_tags"
        })

        this.registry("li", {
            className: "BBlist_li person_PersonCollection_li"
        })
        
        this.registry({
            attr: "other",
            className: "BBlist_reward",
            before_icon: <LikeTwoTone />
        })
        
        this.registry({
            attr: "local",
            className: "person_PersonCollection_local",
            before_icon: <EnvironmentTwoTone/>
        })

        
        axios.get('config.json').then((res) => {

            // 元素外包裹盒子需要如何处理
            this.docker_list = [
                {
                    tag: "ul", attr: {
                        id: "person_PersonCollection",
                    }
                },
            ]

            this.mapping(res.data.view.BB_list.data)

        }).catch(function (error) {
            console.log(error);

        })
    }
    componentWillUnmount(){
        SaiDong.start(1)
    }
}

class PersonTips extends Component {
    componentDidMount(){
        SaiDong.clear(2)
    }
    componentWillUnmount(){
        SaiDong.start(2)
    }
    render() {
        return (
            <div>暂无收藏</div>
        )
    }
}

class PersonPrivacy extends Component {
    componentDidMount(){
        SaiDong.clear(3)
    }
    componentWillUnmount(){
        SaiDong.start(3)
    }
    render() {
        return (
            <div>123</div>
        )
    }
}

class PersonTrain extends Component {
    componentDidMount(){
        SaiDong.clear(4)
    }
    componentWillUnmount(){
        SaiDong.start(4)
    }
    render() {
        return (
            <div>123</div>
        )
    }
}

class PersonBB extends Component {
    componentDidMount(){
        SaiDong.clear(5)
    }
    componentWillUnmount(){
        SaiDong.start(5)
    }
    render() {
        return (
            <div>123</div>
        )
    }
}


class PersonPointList extends Component {
    componentDidMount(){
        SaiDong.clear(6)
    }
    componentWillUnmount(){
        SaiDong.start(6)
    }
    state = {
        num: 1
    }

    tab = (num) => {
        this.setState({
            num: num
        })
        // $("#control")
    }

    render() {
        return (
            <div>
                <ul id="control" className="df">
                    <li onClick={() => this.tab(1)}>总排行</li>
                    <li onClick={() => this.tab(2)}>UI</li>
                    <li onClick={() => this.tab(3)}>后端</li>
                </ul>
                {this.state.num === 1 && <PointList data={rank_data.all.data} />}
                {this.state.num === 2 && <PointList data={rank_data.ui.data} />}
                {this.state.num === 3 && <PointList data={rank_data.backend.data} />}
            </div>
        )
    }
}


class PointList extends List {
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

class PersonAbout extends Component {
    componentDidMount(){
        SaiDong.clear(7)
    }
    componentWillUnmount(){
        SaiDong.start(7)
    }
    
    render() {
        return (
            <div>傻逼兔兔</div>
        )
    }
}

