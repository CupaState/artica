import React, { Component } from 'react';
import "../css/MenuOther.css";
import arrow from "../assets/icons/rightarrow.ico";

export default class MenuOther extends Component {
    constructor(props)
    {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick() {
        const wrapper = document.getElementById("wrap");
        wrapper.classList.toggle('is-open');
        const gonchar = document.getElementById("gonchar")
        gonchar.classList.toggle("is-open");
        const uvelir = document.getElementById("uvelir")
        uvelir.classList.toggle("is-open");
    }

    render() {
        return (
            <>
            <div
                className="other-div-wrapper"
            >
                <span
                    className="menu-other-text"
                    onClick = {() => { this.handleClick() }}
                >
                    ДРУГИЕ УСЛУГИ
                </span>
                <img
                    src={arrow}
                    alt="другие услуги"
                    className="menu-other-arrow"
                    onClick = {() => { this.handleClick() }}
                />
            </div>
                <div
                    className="wrapper-other"
                    id="wrap"
                >
                    <a      
                        href="#"
                        className="menu-other-link"
                        id="gonchar"
                    >
                        ГОНЧАРНАЯ МАСТЕРСКАЯ
                    </a>
                    <a      
                        href="#"
                        className="menu-other-link"
                        id="uvelir"
                    >
                        ЮВЕЛИРНАЯ МАСТЕРСКАЯ
                    </a>
                </div>
            </>
        )
    }
}
