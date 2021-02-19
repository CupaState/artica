import React, { Component } from 'react';
import "../css/HideBlock.css";

export default class FacadesHideBlock extends Component {

    render() {
        //const isUncover = this.props.isUncover;
        if(this.props.isUncover)
        {
            return (
                <div className="wrapper">
                    <div id="wrapper-id">                    
                        <span className="hide-block-text">
                            { this.props.text }
                        </span>
                    </div>
                </div>    
            );
        }
            return(
                <div>
                </div>
            );

    }
}
