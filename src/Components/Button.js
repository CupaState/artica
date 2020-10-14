import React, { Component } from 'react'

export default class Button extends Component {
    // constructor(props)
    // {
    //     super(props);
    // }

    render() {
        return (
            <button
                className={this.props.classNameButton}
                onClick = {this.props.onClick}
                disabled={this.props.disabled}
            >
                <span className={this.props.classNameText}>{this.props.text}</span>
            </button>
        )
    }
}
