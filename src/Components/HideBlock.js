import React, { Component } from 'react';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';
import "../css/HideBlock.css";

export default class FacadesHideBlock extends Component {
    constructor(props)
    {
        super(props);
    }

    render() {
        const isUncover = this.props.isUncover;
        if(isUncover)
        {
            return (
                <div className="wrapper">
                    <span className="hide-block-text">
                        { this.props.text }
                    </span>
                </div>    
            );
        }
            return(
                <div>
                </div>
            )

    }
}
