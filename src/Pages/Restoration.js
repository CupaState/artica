import React, { Component } from 'react';
import "../css/Facades.css";
import "../css/Restoration.css";
import ButtonUI from "../Components/Button";
import RestorationHideBlock from "../Components/HideBlock";
import MyModal from "../Components/MyModal";
import ModalImageGallery from "../Components/ModalImageGallery";
import Gallery from "../Components/Gallery";


import nextArrowIcon from "../assets/icons/rightarrow.ico";

import restorationHeader from "../assets/restorationImg/restorationHeader.png"
import kitchenImg from "../assets/facadesImg/kitchen.png";
import windowImg from "../assets/facadesImg/window.png";
import waitingRoom from "../assets/facadesImg/WaitingRoom.png";
import cupboard from "../assets/restorationImg/cupboard.png";
import doors from "../assets/restorationImg/doors.png";
import dressers from "../assets/restorationImg/dressers.png";
import chairs from "../assets/restorationImg/chairs.png";


class Restoration extends Component {
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
                            src={restorationHeader}
                            alt="Реставрация"
                        />
                        <span
                            className="RestorationHeaderText"
                        >
                            Роспись и реставрация мебели
                        </span>
                        <span
                            className="facadeHeaderPriceText"
                        >
                           Ручная работа от 5000 руб. за предмет | скидка 5% при заказе от 3-х элементов
                        </span>
                        <span
                            className="facadeHeaderGarantText"
                        >
                            Гарантия на работы<br></br>
                            5 лет
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
                        >
                            <span className="facades-divider-text">
                                ПОДРОБНЕЕ О РЕСТАВРАЦИИ
                            </span>
                        </div>
                        <img
                            className="divider-arrow"
                            src={nextArrowIcon}
                            alt="подробнее"
                            onClick = {() =>
                                        {
                                            this.setState({uncover: !this.state.uncover});
                                        }
                                      }
                        />
                    </div>
                    <RestorationHideBlock
                            isUncover = {this.state.uncover}
                            text = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem."
                    />
                    <div className="wrapper-gallery-part">
                            <span className = "gallery-header">
                                Галерея наших работ
                            </span>
                            <div className="gallery-wrapper">
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
                                    <span className="gallery-text">
                                        Кухня-гостиная <br></br>
                                        3м<sup>2</sup>|30 000руб.|6 дней
                                    </span>
                                </a>
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
                                    <span className="gallery-text">
                                        Кухня-гостиная <br></br>
                                        3м<sup>2</sup>|30 000руб.|6 дней
                                    </span>
                                </a>
                        </div>
                    </div>
                    <div className="gallery-bottom-wrapper">
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
                                <span className="gallery-text-bottom">
                                    Зал ожидания <br></br>
                                    18м<sup>2</sup>|38 000руб.|5 дней
                                </span>
                            </a>
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
                                            this.imgIndex = 3;
                                    }}
                                />
                                <span className="gallery-text-bottom">
                                    Зал ожидания <br></br>
                                    18м<sup>2</sup>|38 000руб.|5 дней
                                </span>
                            </a>
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
                                            this.imgIndex = 4;
                                    }}
                                />
                                <span className="gallery-text-bottom">
                                    Зал ожидания <br></br>
                                    18м<sup>2</sup>|38 000руб.|5 дней
                                </span>
                            </a>
                            <div className="gallery-more-photo"
                            onClick={() => {this.setState({isShowGallery: true});}}
                            >
                                <span className="gallery-more-photo-text">
                                    Больше фото
                                </span>
                            </div>
                    </div>
                    <div className="text-block-div">
                            <span className="text-block-idea">
                                Идеи для вдохновения
                            </span>
                            <span className="text-block-promise">
                                Не можете представить свою будущую роспись?<br></br>
                                В помощь Вашему вдохновению работы лучших художников жанра.<br></br>
                                Нарисуем похожее или скомбинируем Ваши идеи
                            </span>
                    </div>
                    <div className="facades-text-block">
                        <span className="facades-text">
                            Шкафы
                        </span>
                    </div>

                    <div className="restoration-element-div">
                        <img
                            className="restoration-element-img"
                            alt="изображение"
                            src={cupboard}
                        />
                    </div>

                    <div className="facades-text-block">
                        <span className="facades-text">
                            Двери
                        </span>
                    </div>

                    <div className="restoration-element-div">
                        <img
                            className="restoration-element-img"
                            src={doors}
                            alt="изображение"
                        />
                    </div>

                    <div className="facades-text-block">
                        <span className="facades-text">
                            Комоды и тумбочки
                        </span>
                    </div>

                    <div className="restoration-element-div">
                        <img
                            className="restoration-element-img"
                            src={dressers}
                            alt="изображение"
                        />
                    </div>

                    <div className="facades-text-block">
                        <span className="facades-text">
                            Стулья
                        </span>
                    </div>

                    <div className="restoration-element-lost-div">
                        <img
                            className="restoration-element-img"
                            src={chairs}
                            alt="изображение"
                        />
                    </div>

                    <div className="vk-gallery-wrapper">
                            <a className="link-vk-gallery"
                                href="https://vk.com/album-12967671_238255746"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Галерея ВКонтакте"
                                alt="Галерея ВКонтакте"
                                onClick={() => {window.href="https://vk.com/album-12967671_238255746"}}
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

export default Restoration;