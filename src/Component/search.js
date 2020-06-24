import React, { Component } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import '../style/homestyle.css';
import keypress from '../ovoid/event/keypress';

export default class Search extends Component {

  state = {
    open: false
  }

  change = () => {

    let btn = document.querySelector(".anticon.anticon-search svg")
    let ipt = document.querySelector(".search")
    let search = document.querySelector("#search")
    if (this.state.open) {
      this.setState({
        open: false
      })
      ipt.style.animation = "shousuo ease-in 0.5s"
      ipt.style.width = 0
      ipt.style.paddingLeft = 0
      ipt.className = ipt.className.split(" pl")[0]
      search.style.animation = "niyidong ease-in 1s"
      search.className = search.className.split(" aaa")[0]
      btn.style.animation = "ni ease-out 0.25s"
    }
    else {
      this.setState({
        open: true
      })
      ipt.style.animation = "zhankai ease-in 0.5s"
      ipt.style.width = "100%"
      ipt.style.paddingLeft = "20px"
      ipt.className += " pl"
      search.className += " aaa"
      search.style.animation = "yidong ease-in 1s"
      btn.style.animation = "shun ease-out 0.25s"
    }
  }

  componentDidMount() {
    keypress.register(27, () => {
      this.setState({
        open: true
      })
      this.change()
    })

    keypress.register([70, "ctrl"], (e) => {
      e.preventDefault()
      this.setState({
        open: false
      })
      this.change()
    })
  }

  render() {
    return (
      <div id="search">
        <input className="search" placeholder="" />
        <SearchOutlined onClick={() => this.change()} />
      </div>
    )
  }
}
