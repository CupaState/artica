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
        if(nextProps.ImgArrIndex !== this.props.ImgArrIndex)
        {
            return this.setState({thisSlide: nextProps.ImgArrIndex})
        }
    }


    render() {
        const isShowImage = this.props.isShowImage;

        if(isShowImage)
        {
            document.body.style.overflow="hidden";
        }
        else
        {
            document.body.style.overflow="";
        }

            return(
            <div>
                { isShowImage && 
                <div
                    className="gallery-wrapper-block-show"
                    id="animate"
                    onClick={
                        (event) => {
                            if(event.target === document.getElementById("modal-body"))
                            {
                                const wrapper = document.getElementById("animate");
                                wrapper.classList.add("is-close");
                                setTimeout(this.props.closeImage, 300, false);
                            }
                        }
                    }
                >
                    <div id="modal-body" style={{zIndex: 1000}}>
                        <img
                            src={closeButton}
                            className="gallery-close-btn"
                            alt="закрыть"
                            onClick = {() => { const wrapper = document.getElementById("animate");
                                                wrapper.classList.add("is-close");
                                                setTimeout(this.props.closeImage, 300, false);}}
                        />
                        <img
                            src={backArrow}
                            className="gallery-back-arrow"
                            alt="предыдущий слайд"
                            onClick={() => {this.prevSlide(this.state.thisSlide);}}
                        />
                        <img
                            src={forwardArrow}
                            className="gallery-forward-arrow"
                            alt="следующий слайд"
                            onClick= { () => {this.forwardSlide(this.state.thisSlide);}}
                        />
                        <img
                            src={this.props.ImageArr[this.state.thisSlide]}
                            className="gallery-img-block"
                            alt="изображение"
                            onClick= { () => {this.forwardSlide(this.state.thisSlide);}}
                        />  
                    </div>
                </div>
                }
            </div>
        );
    }
}
