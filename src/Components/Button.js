import React, { Component } from 'react'

export default class Button extends Component {
    constructor(props)
    {
        super(props);
        const classNameButton = props.className;
        const text = props.text;
        const onClick = props.onClick;
    }

    render() {
        return (
            <button className={this.props.classNameButton} onClick = {this.props.onClick}>
                <text className="textButtonUI">{this.props.text}</text>
            </button>
        )
    }
}
