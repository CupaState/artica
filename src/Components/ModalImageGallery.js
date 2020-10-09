import React, { Component } from 'react';
import backArrow from "../assets/icons/backArrow.ico";
import forwardArrow from "../assets/icons/forwardArrow.ico";
import closeButton from "../assets/icons/closeButton.svg";

import "../css/ModalImageGallery.css";

export default class ModalImageGallery extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            thisSlide: this.props.ImgArrIndex,
        };

        this.prevSlide = this.prevSlide.bind(this);
        this.forwardSlide = this.forwardSlide.bind(this);
    }

    prevSlide()
    {
        if(this.state.thisSlide > 0)
        {    
            this.setState((state) => 
            {
                return {thisSlide: state.thisSlide - 1}
            });
        }
        else
        {
            this.setState(() =>
                {
                    return {thisSlide: this.props.ImageArr.length - 1}
                }
            );
        }
    }

    forwardSlide()
    {
        if(this.props.ImageArr.length - 1 > this.state.thisSlide)
        {
            this.setState((state) =>
            {
                return {thisSlide: state.thisSlide + 1}
            });
        }
        else
        {
            this.setState(() =>
            {
                return {thisSlide: 0}
            });
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps)
    {
        if(nextProps.ImgArrIndex != this.props.ImgArrIndex)
        {
            return this.setState({thisSlide: nextProps.ImgArrIndex})
        }
    }


    render() {
        const isShowImage = this.props.isShowImage;
        {
            return(
            <div>
                { isShowImage && 
                <div
                    className="gallery-wrapper-block-show"
                    id="animate"
                >
                    <img
                        src={closeButton}
                        className="gallery-close-btn"
                        id="close"
                        ref={this.setWrapperRef}
                        onClick = {() => { const wrapper = document.getElementById("animate");
                                            wrapper.classList.add("is-close");
                                            setTimeout(this.props.closeImage, 1000, false);}}
                    />
                    <img
                        src={backArrow}
                        className="gallery-back-arrow"
                        onClick={() => {this.prevSlide(this.state.thisSlide);}}
                    />
                    <img
                        src={forwardArrow}
                        className="gallery-forward-arrow"
                        onClick= { () => {this.forwardSlide(this.state.thisSlide);}}
                    />
                    <img
                        src={this.props.ImageArr[this.state.thisSlide]}
                        className="gallery-img-block"
                    />              
                </div>
                }
            </div>
        );
        }
    }
}
