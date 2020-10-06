import React, { Component, ReactDOM } from 'react';
import "../css/Tooltip.css";

import questionIcon from "../assets/icons/question.ico";


export default class Tooltip extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            showQuestion: false,
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle()
    {
        this.setState({
            showQuestion: !this.state.showQuestion,
        });
    }

    render() {

        return (
            <div className="tooltip-div">
                <img
                    className="tooltip-question"
                    src={questionIcon}
                    onClick={() => {this.setState({showQuestion: !this.state.showQuestion});}}
                />
                { this.state.showQuestion && 
                <span 
                    className = "tooltip-text"
                    onMouseOut = {() => {this.toggle()}}
                > {this.props.text} </span>
                }
            </div>
        )
    }
}
