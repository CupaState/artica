import React, { Component } from 'react';
import "../css/HideBlock.css";

export default class FacadesHideBlock extends Component {

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
            );

    }
}
