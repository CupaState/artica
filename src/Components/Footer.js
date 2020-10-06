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
                <a className="footer-icon-vk"
                    href="https://vk.com/arttiger_catalog"
                    target="_blank"
                    onClick={() => {window.href="https://vk.com/arttiger_catalog"}}
                >
                    <img
                        src={vk}
                        className="footer-icon"
                    />
                </a>
                <a className="footer-icon-fb"
                    href="https://www.facebook.com/groups/1157346364376526/"
                    target="_blank"
                    onClick={() => {window.href="https://www.facebook.com/groups/1157346364376526/"}}

                >
                    <img
                        src={facebook}
                        className="footer-icon"
                    />
                </a>
                <a className="footer-icon-yt"
                    href="https://www.youtube.com/channel/UCuBoNl2xm6HlkZLc9qR-9TA"
                    target="_blank"
                    onClick={() => {window.href="https://www.youtube.com/channel/UCuBoNl2xm6HlkZLc9qR-9TA"}}

                >
                    <img
                        src={youtoube}
                        className="footer-icon"
                    />
                </a>
                <a className="footer-icon-inst"
                    href="https://www.instagram.com/art_tiger_/"
                    target="_blank"
                    onClick={() => {window.href="https://www.instagram.com/art_tiger_/"}}

                >
                    <img 
                        src={instagram}
                        className="footer-icon"
                    />
                </a>
                <a className="footer-icon-whatsapp"
                    href="https://wa.me/79776913936?text=Здравствуйте.%20Меня%20интересуют%20услуги%20Вашей%20компании"
                    target="_blank"
                    onClick={() => {window.open('https://wa.me/79776913936?text=Здравствуйте.%20Меня%20интересуют%20услуги%20Вашей%20компании')}}

                >
                    <img 
                        src={whatsapp}
                        className="footer-icon"
                    />
                </a>
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
