import React, { Component } from 'react';
import MapImgArray from "./MapImgArray";
import closeButton from "../assets/icons/closeButton.svg";

import "../css/Gallery.css";


export default class Gallery extends Component {
    constructor(props)
    {
        super(props);
        this.imgArray = this.props.ImageArr;
    }


    render() {
        const isShowGallery = this.props.isShowGallery;
        return (
            <div>
                {
                    isShowGallery &&
                    <div className="gallery-component-wrapper">
                        <div className="gallery-component">
                            <MapImgArray ImageArr={this.imgArray} />
                            
                        </div>
                        <img
                                src={closeButton}
                                className="gallery-component-close-btn"
                                onClick={() => {this.props.closeGallery(false);}}
                            />
                    </div>
                }
            </div>
        )
    }
}
