import React, { Component } from 'react';
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
                        Lorem ipsum dolor sit amet,
                        consectetuer adipiscing elit.
                        Aenean commodo ligula eget dolor.
                        Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus.
                        Donec quam felis, ultricies nec,
                        pellentesque eu, pretium quis, sem.
                        Lorem ipsum dolor sit amet,
                        consectetuer adipiscing elit.
                        Aenean commodo ligula eget dolor.
                        Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus.
                        Donec quam felis, ultricies nec,
                        pellentesque eu, pretium quis, sem.
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
