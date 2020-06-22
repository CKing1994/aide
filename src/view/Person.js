import React, { Component } from 'react'
import { IdcardTwoTone, AlertTwoTone, UnlockTwoTone, TrophyTwoTone, FileTextTwoTone, FilePdfTwoTone, CheckSquareTwoTone } from '@ant-design/icons'

let obj = {
    twoToneColor: "#460ae2"
}

export default class Person extends Component {
    state = {
        content: null
    }

    componentDidMount(){
        this.setMap()
        this.getContent(1)
    }

    map = new Map()

    setMap(){
        this.map.set(1,<PersonInfo />)
        this.map.set(2,<PersonTips />)
        this.map.set(3,<PersonPrivacy />)
        this.map.set(4,<PersonTrain />)
        this.map.set(5,<PersonWorkOrder />)
        this.map.set(6,<PersonPointList />)
        this.map.set(7,<PersonAbout />)
    }

    getContent(id) {
        let content = this.map.get(id)
        this.setState({
            content: content
        })
        let ele = document.getElementById("person_model").getElementsByTagName("li")[id-1]
        let bro = ele.parentNode.children
        for(let i = 0;i<bro.length;i++){
            bro[i].style.backgroundColor = "#fff"
            
            bro[i].getElementsByTagName("span")[0].style.color = "#7f54eb"
            bro[i].getElementsByTagName("span")[1].style.color = "#7f54eb"
        }
        
        ele.style.backgroundColor = "#7f54eb"
        ele.getElementsByTagName("span")[0].style.color = "#fff"
        ele.getElementsByTagName("span")[1].style.color = "#fff"
    }

    render() {
        return (
            <div id="shadow">
                <div id="person_model">
                    <span id="person_exit">×</span>
                    <div id="ul">
                        <ul>
                            <li onClick={() => this.getContent(1)}>
                                <IdcardTwoTone {...obj} />
                                <span>个人信息</span>
                            </li>
                            <li onClick={() => { this.getContent(2) }}>
                                <AlertTwoTone {...obj} />
                                <span>提示</span>
                            </li>
                            <li onClick={() => { this.getContent(3) }}>
                                <UnlockTwoTone {...obj} />
                                <span>隐私</span>
                            </li>
                            <li onClick={() => { this.getContent(4) }}>
                                <FilePdfTwoTone {...obj} />
                                <span>培训列表</span>
                            </li>
                            <li onClick={() => { this.getContent(5) }}>
                                <FileTextTwoTone {...obj} />
                                <span>工单列表</span>
                            </li>
                            <li onClick={() => { this.getContent(6) }}>
                                <TrophyTwoTone {...obj} />
                                <span>积分榜</span>
                            </li>
                            <li onClick={() => { this.getContent(7) }}>
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

class PersonInfo extends Component {
    render() {
        return (
            <div>
                <img className="BBlist_img" src={"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592388420290&di=e390d76564166376c9d6c8a293609395&imgtype=0&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D1417334716%2C1817608421%26fm%3D214%26gp%3D0.jpg"}/>
                <span>吴昊</span>
            </div>
        )
    }
}

class PersonTips extends Component {
    render() {
        return (
            <div>123</div>
        )
    }
}

class PersonPrivacy extends Component {
    render() {
        return (
            <div>123</div>
        )
    }
}

class PersonTrain extends Component {
    render() {
        return (
            <div>123</div>
        )
    }
}

class PersonWorkOrder extends Component {
    render() {
        return (
            <div>123</div>
        )
    }
}

class PersonPointList extends Component {
    render() {
        return (
            <div>123</div>
        )
    }
}

class PersonAbout extends Component {
    render() {
        return (
            <div>123</div>
        )
    }
}

