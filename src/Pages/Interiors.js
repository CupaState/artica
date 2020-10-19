import React, { Component } from 'react';
import "../css/Facades.css";
import "../css/Restoration.css";
import "../css/Interiors.css";
import ButtonUI from "../Components/Button";
import InteriorsHideBlock from "../Components/HideBlock";
import MyModal from "../Components/MyModal";
import ModalImageGallery from "../Components/ModalImageGallery";
import Gallery from "../Components/Gallery";


import nextArrowIcon from "../assets/icons/rightarrow.ico";

import interiorsHeader from "../assets/interiorsImg/interiorsHeader.png"
import kitchenImg from "../assets/facadesImg/kitchen.png";
import windowImg from "../assets/facadesImg/window.png";
import waitingRoom from "../assets/facadesImg/WaitingRoom.png";
import livingRoom from "../assets/interiorsImg/livingRoom.png";
import kitchenArt from "../assets/interiorsImg/kitchenArt.png";
import childrensRoom from "../assets/interiorsImg/childrensRoom.png";
import bathRoom from "../assets/interiorsImg/bathRoom.png";


class Interiors extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            show: false,
            uncover: false,
            isShowImage: false,
            isShowGallery: false,
        };
        this.onClose = this.onClose.bind(this);
        this.closeImage = this.closeImage.bind(this);
        this.closeGallery = this.closeGallery.bind(this);

        this.galleryImage = [
            kitchenImg, windowImg,
            waitingRoom, waitingRoom,
            waitingRoom
            ];
        this.imgIndex = 0;
    }

    onClose = (isShow) =>
    {
        this.setState({show: isShow});
    }

    closeImage = (isShowImage) =>
    {
        this.setState({isShowImage: isShowImage});
        this.imgIndex = 0;
    }

    closeGallery = (isShowGallery) =>
    {
        this.setState({isShowGallery: isShowGallery});
    }

    render() {
        return (
            <>
                <div>
                    <div 
                        className="facadeHeaderDiv"
                    >
                        <img
                            className="facadeHeaderImg"
                            src={interiorsHeader}
                            alt="оформление интерьеров"
                        />
                        <span
                            className="interiorsHeaderText"
                        >
                            Художественное оформление интерьеров
                        </span>
                        <span
                            className="interiorsHeaderPriceText"
                        >
                           от 1299 руб. за м<sup>2</sup>
                        </span>
                        <span
                            className="interiorsHeaderGarantText"
                        >
                            Гарантия на работы<br></br>
                            2 года - внешние стены<br></br>
                            4 года - внутренние стены
                        </span>
                    </div>
                </div>
                <div className="promise-block">
                            <div className="promise-text">
                                <span>
                                    За 3 дня бесплатно нарисуем Вам эскиз будущей <br></br> работы ещё
                                    до оплаты и заключения договора
                                </span>
                            </div>
                            <div className="promise-button-div">
                                <ButtonUI
                                    classNameButton = "promise-button"
                                    text = "Заказать эскиз"
                                    onClick = {() => {this.setState({show: !this.state.show})}}
                                />
                            </div>
                </div>
                <div className="divider-div">
                        <hr className="facades-divider"></hr>
                        <div
                            className="facades-divider-header"
                            onClick = {() =>
                                {
                                    this.setState({uncover: !this.state.uncover});
                                }
                              }
                        >
                            <span className="facades-divider-text">
                                ПОДРОБНЕЕ ОБ ОФОРМЛЕНИИ ИНТЕРЬЕРОВ
                            </span>
                        </div>
                        <img
                            className="divider-arrow"
                            src={nextArrowIcon}
                            alt="подробнее об интерьерах"
                            onClick = {() =>
                                        {
                                            this.setState({uncover: !this.state.uncover});
                                        }
                                      }
                        />
                    </div>
                    <InteriorsHideBlock
                            isUncover = {this.state.uncover}
                            text = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem."
                    />
                    <div className="wrapper-gallery-part">
                            <span className = "gallery-header">
                                Галерея наших работ
                            </span>
                            <div className="gallery-wrapper">
                                <div className="gallery-wrapper-block-div">
                                    <a
                                        className="gallery-img-div1"
                                        href
                                    >
                                        <img
                                            className="gallery-img"
                                            src={kitchenImg}
                                            alt="изображение"
                                            title="Нажмите для увеличения изображения"
                                            onClick={() =>
                                                {this.setState({isShowImage: true});
                                                this.imgIndex = 0;
                                            }}
                                        />

                                    </a>
                                    <span className="gallery-text">
                                            Кухня-гостиная <br></br>
                                            3м<sup>2</sup>|30 000руб.|6 дней
                                    </span>                                 
                                </div>

                                <div className="gallery-wrapper-block-div">
                                    <a
                                        className="gallery-img-div2"
                                        href
                                    >
                                        <img
                                            className="gallery-img"
                                            src={windowImg}
                                            alt="изображение"
                                            title="Нажмите для увеличения изображения"
                                            onClick={() =>
                                                {
                                                    this.setState({isShowImage: true});
                                                    this.imgIndex = 1;
                                            }}
                                        />
                                    </a>
                                        <span className="gallery-text1">
                                            Кухня-гостиная <br></br>
                                            3м<sup>2</sup>|30 000руб.|6 дней
                                        </span>
                                </div>

                        </div>
                    </div>
                    <div className="gallery-bottom-wrapper">
                        <div className="gallery-wrapper-block-small-div">
                            <a
                                    className="gallery-img-div3"
                                    href
                                >
                                    <img
                                        className="gallery-img-small"
                                        src={waitingRoom}
                                        alt="изображение"
                                        title="Нажмите для увеличения изображения"
                                        onClick={() =>
                                            {
                                                this.setState({isShowImage: true});
                                                this.imgIndex = 2;
                                        }}
                                    />
                                </a>
                                <span className="gallery-text-bottom-small">
                                    Зал ожидания <br></br>
                                    18м<sup>2</sup>|38 000руб.|5 дней
                                </span>
                        </div>

                        <div className="gallery-wrapper-block-small-div">
                        <a
                                className="gallery-img-div4"
                                href
                            >
                                <img
                                    className="gallery-img-small"
                                    src={waitingRoom}
                                    alt="изображение"
                                    title="Нажмите для увеличения изображения"
                                    onClick={() =>
                                        {
                                            this.setState({isShowImage: true});
                                            this.imgIndex = 3;
                                    }}
                                />
                            </a>
                            <span className="gallery-text-bottom-small">
                                Зал ожидания <br></br>
                                18м<sup>2</sup>|38 000руб.|5 дней
                            </span>
                        </div>

                        <div className="gallery-wrapper-block-small-div">
                            <a
                                className="gallery-img-div5"
                                href
                            >
                                <img
                                    className="gallery-img-small"
                                    src={waitingRoom}
                                    alt="изображение"
                                    title="Нажмите для увеличения изображения"
                                    onClick={() =>
                                        {
                                            this.setState({isShowImage: true});
                                            this.imgIndex = 4;
                                    }}
                                />
                            </a>
                                <span className="gallery-text-bottom-small">
                                    Зал ожидания <br></br>
                                    18м<sup>2</sup>|38 000руб.|5 дней
                                </span>
                        </div>

                            <div className="gallery-more-photo"
                            onClick={() => {this.setState({isShowGallery: true});}}
                            >
                                <span className="gallery-more-photo-text">
                                    Больше фото
                                </span>
                            </div>
                    </div>
                            <div
                                className="gallery-more-photo-mobile"
                                onClick={() => {this.setState({isShowGallery: true});}}
                            >
                                <span className="gallery-more-photo-text">
                                    Больше фото
                                </span>
                            </div>
                    <div className="text-block-div">
                            <span className="text-block-idea">
                                Идеи для Вашей росписи
                            </span>
                            <span className="text-block-promise">
                                Не можете представить свою будущую роспись?<br></br>
                                В помощь Вашему вдохновению работы лучших художников жанра.<br></br>
                                Нарисуем похожее или скомбинируем Ваши идеи
                            </span>
                    </div>
                    <div className="ineriors-example-block">
                            <span className="interiors-text">
                                Роспись гостиных и спален
                            </span>
                            <div className="interiors-element-div">
                            <img
                                className="interiors-element-img"
                                src={livingRoom}
                                alt="изображение"
                            />
                        </div>
                    </div>
                    
                    <div className="ineriors-example-block1">
                            <span className="interiors-text">
                                Роспись кухонь
                            </span>
                        <div className="interiors-element-div">
                            <img
                                className="interiors-element-img"
                                src={kitchenArt}
                                alt="изображение"
                            />
                        </div>
                    </div>


                    <div className="ineriors-example-block1">
                        <span className="interiors-text">
                            Роспись детских комнат
                        </span>
                        <div className="interiors-element-div">
                            <img
                                className="interiors-element-img"
                                src={childrensRoom}
                                alt="изображение"
                            />
                        </div>
                    </div>

                    <div className="ineriors-example-block2">
                        <span className="interiors-text">
                            Роспись ванных и санузлов
                        </span>
                        <div className="interiors-element-div">
                            <img
                                className="interiors-element-img"
                                src={bathRoom}
                                alt="изображение"
                            />
                        </div>
                    </div>

                    <div className="vk-gallery-wrapper">
                            <a className="link-vk-gallery"
                                href="https://vk.com/album-12967671_238023379"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Галерея ВКонтакте"
                                alt="Галерея ВКонтакте"
                                onClick={() => {window.href="https://vk.com/album-12967671_238023379"}}
                            >
                                <span className="link-vk-gallery-text">
                                    Посмотреть ещё больше идей в нашей группе ВК
                                </span>
                            </a>
                        </div>

                        <div className="present-block">
                            <span className="present-text">
                                Каждый 10-й м<sup>2</sup> в подарок
                            </span>
                        </div>

                        <div className="facades-bottom-button-div">
                                <ButtonUI
                                    classNameButton = "facades-bottom-button"
                                    classNameText = "textButtonUI-facades"
                                    text = "ЭСКИЗ БЕСПЛАТНО"
                                    onClick = {() => {this.setState({show: !this.state.show})}}
                                />
                        </div>

                        <div className="facades-footer-info-block">
                            <div className="footer-phone-div">
                                <span
                                    className="footer-phone"
                                    onClick={ () => {window.open("tel:+79779613936")}}
                                >
                                    +7(977)691-39-36
                                </span>
                            </div>
                            <div className="footer-mail-div">
                                <span
                                    className="footer-mail"
                                    href="mail:info@art-tiger-studio.ru"
                                    onClick={() => {window.location='mailto:info@art-tiger-studio.ru?subject='+window.location.href;}}
                                >
                                    info@art-tiger-studio.ru
                                </span>
                            </div>
                        </div>
                        <ModalImageGallery isShowImage={this.state.isShowImage} ImageArr={this.galleryImage} ImgArrIndex={this.imgIndex} closeImage={this.closeImage}/>
                        <Gallery isShowGallery={this.state.isShowGallery} ImageArr={this.galleryImage} closeGallery={this.closeGallery}/>
                        <MyModal isOpen = {this.state.show} onClose = {this.onClose}/>
            </>
        );
    }
}

export default Interiors;