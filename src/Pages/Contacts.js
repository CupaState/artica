import React, { Component } from 'react';
import "../css/Contacts.css";

import ButtonUI from "../Components/Button";
import MyModal from "../Components/MyModal";

import phoneIcon from "../assets/contactsImg/phoneIcon.png";
import mailIcon from "../assets/contactsImg/mailIcon.png";
import vk from "../assets/icons/footerIcons/vk.ico";
import facebook from "../assets/icons/footerIcons/facebook.ico";
import instagram from "../assets/icons/footerIcons/instagram.ico";
import whatsapp from "../assets/icons/footerIcons/whatsapp.ico";

class Contacts extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            show: false,
        };
        this.onClose = this.onClose.bind(this);
    }

    onClose = (isShow) =>
    {
        this.setState({show: isShow});
    }

    render() {
        return (
            <>
                <div className="contacts-header-wrapper">
                    <span className="contacts-header">
                        КОНТАКТЫ
                    </span>
                </div>

                <div className="contact-phone-wrapper">
                    <img
                        src={phoneIcon}
                        className="contact-phone-img"
                        alt="телефон"
                        onClick = {() => {window.open("tel:+79779613936")}}
                    />
                    <span
                        className="contact-phone-number"
                        onClick = {() => {window.open("tel:+79779613936")}}
                    >
                        +7 (977) 691-39-36
                    </span>
                    <span className="contact-phone-text">
                        Каждый день с 8:00 до 22:00
                    </span>
                </div>
                <div className="contacts-button-div">
                        <ButtonUI
                            classNameButton = "facades-bottom-button"
                            classNameText = "textButtonUI-facades"
                            text = "Обратный звонок"
                            onClick = {() => {this.setState({show: !this.state.show})}}
                        />
                    </div>

                <div className="contact-mail-wrapper">
                    <img
                        src={mailIcon}
                        className="contact-mail-img"
                        alt="почта"
                        href="mail:info@art-tiger-studio.ru"
                        onClick={() => {window.location='mailto:info@art-tiger-studio.ru?subject='+window.location.href;}}
                    />
                    <span
                        className="contact-mail-text"
                        href="mail:info@art-tiger-studio.ru"
                        onClick={() => {window.location='mailto:info@art-tiger-studio.ru?subject='+window.location.href;}}
                    >
                        info@art-tiger-studio.ru
                    </span>
                </div>

                <div className="contacts-button-div">
                    <ButtonUI
                        classNameButton = "facades-bottom-button"
                        classNameText = "textButtonUI-facades"
                        text = "Заказать рассчёт"
                        onClick = {() => {this.setState({show: !this.state.show})}}
                    />
                </div>

                <div className="contact-link-text-wrapper">
                    <span className="contact-link-text">
                        Связаться через мессенджер или соцсети
                    </span>
                </div>

                <div className="contact-link-icons-wrapper">
                    <a
                        className="icon"
                        href="https://vk.com/arttiger_catalog"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => {window.href="https://vk.com/arttiger_catalog"}}>
                        <img
                            src={vk}
                            alt="ВКонтакте"
                            className="contact-link-icons"
                        />
                    </a>
                    
                    <a
                        className="icon"
                        href="https://www.facebook.com/groups/1157346364376526/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => {window.href="https://www.facebook.com/groups/1157346364376526/"}}
                    >
                        <img
                            src={facebook}
                            alt="FaceBook"
                            className="contact-link-icons"
                        />
                    </a>
                    
                    <a
                        className="icon"
                        href="https://www.instagram.com/art_tiger_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => {window.href="https://www.instagram.com/art_tiger_/"}}
                    >
                        <img
                            src={instagram}
                            alt="Instagram"
                            className="contact-link-icons"
                        />
                    </a>
                    
                    <a
                        className="icon"
                        href="https://wa.me/79776913936?text=Здравствуйте.%20Меня%20интересуют%20услуги%20Вашей%20компании"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => {window.open('https://wa.me/79776913936?text=Здравствуйте.%20Меня%20интересуют%20услуги%20Вашей%20компании')}}
                    >
                        <img
                            src={whatsapp}
                            alt="WhatsApp"
                            className="contact-link-icons"
                        />
                    </a>
                    
                </div>

                <div className="contact-map-wrapper">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d560.5503625415711!2d38.18846682926847!3d55.807102998785496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ad022ec934ecb%3A0x3240dfad965d3c4c!2z0YPQuy4g0JPQvtGA0YzQutC-0LPQviwgMdCwLCDQmtGD0L_QsNCy0L3QsCDQodGC0LDRgNCw0Y8sINCc0L7RgdC60L7QstGB0LrQsNGPINC-0LHQuy4sIDE0MjQ1MA!5e0!3m2!1sru!2sru!4v1602020930849!5m2!1sru!2sru"
                    width="800" height="600"
                    frameBorder="0"
                    allowFullScreen={true}
                    aria-hidden="false"
                    title="articaMap"
                    tabIndex="0">
                </iframe>
                </div>

                <div className="contacts-info-wrapper">
                    <span className="contacts-info-header">
                        РЕКВИЗИТЫ И КАРТОЧКА ПРЕДПРИЯТИЯ
                    </span>
                    <span className="contacts-info-text">
                        ООО "АРТИКА", ИНН 5008042442, ОГРН 1065047064697<br></br>
                        <br></br>
                        <sup>Юридический адрес:</sup><br></br>
                        108811, город Москва, поселение Московский, квартал 32, владение 17А, строение 1, этаж 3, помещение 104<br></br>
                        <br></br>
                        <sup>Фактический адрес:</sup><br></br>
                        108811, город Москва, поселение Московский, квартал 32, владение 17А, строение 1, этаж 3, помещение 104<br></br>
                        <br></br>
                        <sup>Тел.:</sup><br></br>
                        + 7 (977) 961-39-36<br></br>
                        <br></br>
                        <sup>Email:</sup><br></br>
                        info@art-tiger-studio.ru
                    </span>
                </div>

                <MyModal isOpen = {this.state.show} onClose = {this.onClose}/>
            </>
        );
    }
}

export default Contacts;