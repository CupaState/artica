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

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);

        this.toggle = this.toggle.bind(this);
    }

    toggle()
    {
        this.setState({
            showQuestion: !this.state.showQuestion,
        });
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
      }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
      }

    setWrapperRef(node) {
        this.wrapperRef = node;
      }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            const wrapper = document.getElementById("wrapper");
            wrapper.classList.toggle("is-close");
            setTimeout(this.setState({showQuestion: false}), 1000);
        }
      }


    render() {
        return (
            <div className="tooltip-div" ref={this.setWrapperRef} id="wrapper">
                <img
                    className="tooltip-question"
                    src={questionIcon}
                    alt="подсказка"
                    onClick={() => {
                        this.setState({showQuestion: !this.state.showQuestion});
                }}
                />
                { this.state.showQuestion && 
                <span 
                    className = "tooltip-text"
                > {this.props.text} </span>
                }
            </div>
        )
    }
}
