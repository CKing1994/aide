import React, { Component } from 'react'

export default class ChoiceQuestion extends Component {
    render() {
        return (
            <select className={this.props.cn+" selection"}>
                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
            </select>
        )
    }
}
