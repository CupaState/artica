import React, { Component } from 'react';
import vk from "../assets/icons/footerIcons/vk.ico";
import facebook from "../assets/icons/footerIcons/facebook.ico";
import youtoube from "../assets/icons/footerIcons/youtoube.ico";
import instagram from "../assets/icons/footerIcons/instagram.ico";
import whatsapp from "../assets/icons/footerIcons/whatsapp.ico";
import "../css/Footer.css";

export default class Footer extends Component {
constructor(props)
{
    super(props);
    
}

    render() {
        return (
            <>
            <div className="footer-block">
                <div className="footer-icon-vk">
                    <img
                        src={vk}
                        className="footer-icon"
                        onClick={() => {window.location.href="https://vk.com/arttiger_catalog"}}
                    />
                </div>
                <div className="footer-icon-fb">
                    <img
                        src={facebook}
                        className="footer-icon"
                        onClick={() => {window.location.href="https://www.facebook.com/groups/1157346364376526/"}}
                    />
                </div>
                <div className="footer-icon-yt">
                    <img
                        src={youtoube}
                        className="footer-icon"
                        onClick={() => {window.location.href="https://www.youtube.com/channel/UCuBoNl2xm6HlkZLc9qR-9TA"}}
                    />
                </div>
                <div className="footer-icon-inst">
                    <img 
                        src={instagram}
                        className="footer-icon"
                        onClick={() => {window.location.href="https://www.instagram.com/art_tiger_/"}}
                    />
                </div>
                <div className="footer-icon-whatsapp">
                    <img 
                        src={whatsapp}
                        className="footer-icon"
                        onClick={() => {window.open(' https://wa.me/79776913936?text=Здравствуйте.%20Меня%20интересуют%20услуги%20Вашей%20компании')}}
                    />
                </div>
            </div>
            <div className="artica-bottom">
                <span className="artica-bottom-text">
                    &#169; 2010-2020 "АРТИКА" - творческое объединение художников, г. Москва и МО
                </span>
            </div>
            </>
            
            
        )
    }
}
