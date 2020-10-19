import React, { Component } from "react";
import "../css/Facades.css";
import "../css/littleHideBlock.css";

export default class LittleHideBlock extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            isOpenBlock: false,
        }
    }

    render() {
        return (
        <div
            className={this.props.className}
            onClick = {() =>
                {
                    this.setState({isOpenBlock: !this.state.isOpenBlock});
                }
              }
        >
                <span className="little-block-text">
                    ПОДРОБНЕЕ
                </span>
                <div
                    id="hide-text"
                >
                    {
                        this.state.isOpenBlock &&
                        <span
                            className="hide-block-text"
                        >
                            { this.props.text }
                        </span>
                    }
                </div>
        </div>   
        );
    }
}
