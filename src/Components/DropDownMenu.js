import React, { Component } from 'react';
import "../css/DropDownMenu.css";
import MenuOther from "../Components/MenuOther";

import arrow from "../assets/icons/rightarrow.ico";
import vkIcon from "../assets/menuIcons/vkIcon.ico";
import instagramIcon from "../assets/menuIcons/instagramIcon.ico";
import facebookIcon from "../assets/menuIcons/facebookIcon.ico";
import whatsappIcon from "../assets/menuIcons/whatsappIcon.ico";
import youtubeIcon from "../assets/menuIcons/youtubeIcon.ico";


export default class DropDownMenu extends Component {
    constructor(props)
    {
        super(props);

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
            const wrapper = document.getElementById("wrapper");
            wrapper.classList.add("is-close");
            setTimeout(this.props.closeMenu, 1000, false);
        }
      }

    render() {
        const isShowMenu = this.props.isShowMenu
        return (
            <>
                {
                    isShowMenu &&
                    <div
                        className="menu-wrapper"
                        ref={this.setWrapperRef}
                        id="wrapper"
                    >
                        <img
                            src={arrow}
                            className="menu-arrow"
                            alt="закрыть меню"
                            onClick = {() => {
                                const wrapper = document.getElementById("wrapper");
                                wrapper.classList.add("is-close");
                                setTimeout(this.props.closeMenu, 1000, false);
                            }}
                        />
                        <a
                            href="/facades"
                            target="_blank"
                            className="menu-main-link1"
                        >
                            РОСПИСЬ ФАСАДОВ
                        </a>
                        <a
                            href="/interiors"
                            target="_blank"
                            className="menu-main-link"
                        >
                            ОФОРМЛЕНИЕ ИНТЕРЬЕРОВ
                        </a>
                        <a
                            href="/restoration"
                            target="_blank"
                            className="menu-main-link"
                        >
                            РЕСТАВРАЦИЯ
                        </a>
                        <a
                            href="/airbrushing"
                            target="_blank"
                            className="menu-main-link"
                        >
                            АЭРОГРАФИЯ
                        </a>

                        <MenuOther/>

                        <a
                            href="/contacts"
                            target="_blank"
                            className="menu-link1"
                        >
                            О КОМПАНИИ
                        </a>
                        <a
                            href="/about"
                            target="_blank"
                            className="menu-link"
                        >
                            КАК МЫ РАБОТАЕМ
                        </a>
                        <a
                            href="/contacts"
                            target="_blank"
                            className="menu-link"
                        >
                            КОНТАКТЫ
                        </a>

                        <div className="menu-icon-wrapper">
                            <a
                                className="menu-icon"
                                href="https://vk.com/arttiger_catalog"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={vkIcon}
                                    className="menu-icon-img"
                                    alt="VK"
                                />
                            </a>
                            <a
                                className="menu-icon"
                                href="https://www.instagram.com/art_tiger_/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={instagramIcon}
                                    className="menu-icon-img"
                                    alt="instagram"
                                />
                            </a>
                            <a
                                className="menu-icon"
                                href="https://www.facebook.com/groups/1157346364376526/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={facebookIcon}
                                    className="menu-icon-img"
                                    alt="facebook"
                                />
                            </a>
                            <a
                                className="menu-icon"
                                href="https://wa.me/79776913936?text=Здравствуйте.%20Меня%20интересуют%20услуги%20Вашей%20компании"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => {window.open('https://wa.me/79776913936?text=Здравствуйте.%20Меня%20интересуют%20услуги%20Вашей%20компании')}}
                            >
                                <img
                                    src={whatsappIcon}
                                    className="menu-icon-img"
                                    alt="whatsapp"
                                />
                            </a>
                            <a
                                className="menu-icon"
                                href="https://www.youtube.com/channel/UCuBoNl2xm6HlkZLc9qR-9TA"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={youtubeIcon}
                                    className="menu-icon-img"
                                    alt="youtube"
                                />
                            </a>
                            
                        </div>
                        
                    </div>
                }
            </>
        )
    }
}
