import React, { Component } from 'react';
import "../css/MenuOther.css";

export default class MenuOther extends Component {
    constructor(props)
    {
        super(props);
    }

    render() {
        const isShowOther = this.props.isShowOther;
        return (
            <>
                {isShowOther &&
                <div className="menu-other-wrapper">
                    <a      
                        href="#"
                        target="_blank"
                        className="menu-other-link"
                    >
                        ГОНЧАРНАЯ МАСТЕРСКАЯ
                    </a>
                    <a      
                        href="#"
                        target="_blank"
                        className="menu-other-link"
                    >
                        ЮВЕЛИРНАЯ МАСТЕРСКАЯ
                    </a>
                </div>
                }
            </>
        )
    }
}
