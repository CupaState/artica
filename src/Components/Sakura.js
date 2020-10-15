import React, { Component } from "react";
import "../css/sakura.css";
import track from "../music/LeadRainBlanket.mp3";

export default class Sakura extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            isOpenSakura: this.props.isOpenSakura,
            layerClass: "opened-wrapper",
            clickLayer: function()
            {
                console.log("Hello from CupaState");
            },
            closeSakura: this.props.closeSakura
        }
    }

    componentWillReceiveProps(nextProps)
    {
        if(nextProps.isOpenSakura !== this.props.isOpenSakura)
        {
            this.setState({ isOpenSakura: nextProps.isOpenSakura });
        }
    }

    render() {
        if(this.state.isOpenSakura)
        {
            setTimeout(
                ()=>{
                    const closeSakura = this.state.closeSakura;
                    this.setState({
                        layerClass: "sakura-wrapper",
                        clickLayer: function()
                        {
                            closeSakura();
                        }
                });
                }, 10000); 
        }
        return (
            <>
            {
                this.state.isOpenSakura &&
                <div
                    id="layer"
                    className={ this.state.layerClass }
                    onClick={ this.state.clickLayer }
                >
                    <span className="anand-name">
                        Made animation by Anand Davaasuren
                    </span>
                    <span
                        className="cupastate"
                    >
                        CupaState Prod.
                    </span>
                    <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 100,
                    }}
                    ></div>
                    
                    <iframe
                        src="http://168.235.82.214/"
                        title="CupaState"
                        className="sakura"
                        allowFullScreen={true}
                        seamless={true}
                    ></iframe>
                    <audio
                        src={track}
                        type="audio/mp3"
                        autoPlay={ true }
                        id="audio"
                        loop={true}
                    ></audio>
                </div>
            }
            </>
        )
    }
}