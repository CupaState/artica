import React, { Component } from 'react';
import MapImgArray from "./MapImgArray";
import closeButton from "../assets/icons/closeButton.svg";

import "../css/Gallery.css";


export default class Gallery extends Component {
    constructor(props)
    {
        super(props);
        this.imgArray = this.props.ImageArr;

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
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
            const wrapper = document.getElementById("wrapper-big-gallery");
            wrapper.classList.add("is-close");
            setTimeout(this.props.closeGallery, 1000, false);
        }
      }


    render() {
        const isShowGallery = this.props.isShowGallery;
        return (
            <div>
                {
                    isShowGallery &&
                    <div
                        className="gallery-component-wrapper"
                        id="wrapper-big-gallery"
                        ref={this.setWrapperRef}
                    >
                        <div className="gallery-component">
                            <MapImgArray ImageArr={this.imgArray} />
                            
                        </div>
                        <img
                                src={closeButton}
                                className="gallery-component-close-btn"
                                onClick = {() => {
                                    const wrapper = document.getElementById("wrapper-big-gallery");
                                    wrapper.classList.add("is-close");
                                    setTimeout(this.props.closeGallery, 1000, false);
                                }}
                                // onClick={() => {this.props.closeGallery(false);}}
                            />
                    </div>
                }
            </div>
        )
    }
}
