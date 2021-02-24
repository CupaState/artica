import React, { Component } from 'react';
import "../css/Facades.css";
import "../css/Restoration.css";
import "../css/Interiors.css";
import ButtonUI from "../Components/Button";
import InteriorsHideBlock from "../Components/HideBlock";
import MyModal from "../Components/MyModal";
import ModalImageGallery from "../Components/ModalImageGallery";
import Gallery from "../Components/Gallery";
import LittleHideBlock from "../Components/LittleHideBlock";


import nextArrowIcon from "../assets/icons/rightarrow.ico";

import airHeader from "../assets/airImg/airHeader.png"
import kitchenImg from "../assets/facadesImg/kitchen.png";
import windowImg from "../assets/facadesImg/window.png";
import waitingRoom from "../assets/facadesImg/WaitingRoom.png";
import car from "../assets/airImg/car.png";
import SUV from "../assets/airImg/SUV.png";
import motocycle from "../assets/airImg/motocycle.png";
import trailer from "../assets/airImg/trailer.png";
import autoVinyl from "../assets/airImg/autoVinyl.png"


class Airbrushing extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            show: false,
            uncover: false,
            isShowImage: false,
            isShowGallery: false,
            isShowWhy: false,
            isShowStages: false,
            isShowPreliminaryStage: false,
            isShowPrepareStage: false,
            isShowMainStage: false,
            isShowFinalStage: false,
            isShowGarantText: false,
            isShowOurAdvantages: false,
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

        this.airbrushingText = <div style={{ userSelect: "none" }}>
             <span
                                style={{ cursor: "pointer", color: "gray", marginTop: "1%" }}
                                onClick = {()=> 
                                    {
                                        this.setState({ isShowWhy: !this.state.isShowWhy })
                                        let why = document.getElementById("why");
                                        if(!this.state.isShowWhy)
                                        {
                                            why.classList.add("visible");
                                        }
                                        else
                                        {
                                            why.classList.remove("visible");
                                        }
                                    }
                                }
                            >
                                <strong> ЗАЧЕМ НУЖНА? </strong>
                            </span>

                            <div
                                className="why-hide"
                                id="why"
                                style={{marginTop: "1%"}}
                            >
                                <ul>
                                    <li style={{marginTop: "2%"}}>
                                        Создает уникальный стиль, помогая выделить автомобиль из автопотока скучных решений
                                        и цветов.
                                    </li>
                                    <li style={{marginTop: "2%"}}>
                                        Способ показать, чем увлекается, или что любит делать его владелец. Возможно, отражает
                                        его характер или взгляды на жизнь.
                                    </li>
                                    <li style={{marginTop: "2%"}}>
                                        Противоугонное средство – такие авто угонщики обходят стороной из-за опасности быть
                                        легко пойманными
                                    </li>
                                    <li style={{marginTop: "2%"}}>
                                        Реклама и брендинг: логотипы, название услуги, номер телефона или сайт и т.д. все это
                                        можно нарисовать на корпоративном авто
                                    </li>
                                </ul>
                            </div>

                            <br></br><br></br>
                            <hr style={{color: "gray", border: "1px solid"}}></hr>

                            <span
                                style={{ cursor: "pointer", color: "gray", marginTop: "1%" }}
                                onClick = {()=> 
                                    {
                                        this.setState({ isShowStages: !this.state.isShowStages })
                                        let why = document.getElementsByName("stages");
                                        if(!this.state.isShowStages)
                                        {
                                            why.forEach(element => {
                                                element.classList.add("visible");
                                            });
                                        }
                                        else
                                        {
                                            why.forEach(element => {
                                                element.classList.remove("visible");
                                            });
                                        }
                                    }
                                }
                            >
                                <strong> ЭТАПЫ РАБОТЫ: </strong>
                            </span>

                            <span
                                style={{ cursor: "pointer", color: "gray", marginTop: "1%" }}
                                name="stages"
                                className="why-hide"
                                onClick = {()=> 
                                    {
                                        this.setState({ isShowPreliminaryStage: !this.state.isShowPreliminaryStage });
                                        let why = document.getElementById("preliminary");
                                        if(!this.state.isShowPreliminaryStage)
                                        {
                                            why.classList.add("visible");
                                        }
                                        else
                                        {
                                            why.classList.remove("visible");
                                        }
                                    }
                                }
                            >
                                <strong> Предварительный: </strong>
                            </span>

                            <div
                                className="why-hide"
                                id="preliminary"
                                style={{marginTop: "1%"}}
                            >
                                <ol type="1">
                                    <li style={{marginTop: "2%"}}>
                                        Разработка эскиза (если у клиента нет готового дизайн-проекта).
                                        <ol type="A" style={{marginTop: "2%"}} >
                                            <li style={{marginTop: "1%"}}>
                                                Общение с клиентом: запрос фотографий авто и обсуждение пожеланий. 
                                            </li>
                                            <li style={{marginTop: "1%"}}>
                                                Подбор подходящих картинок (лучше если клиент сам высылает примеры картинок).
                                            </li>
                                            <li style={{marginTop: "1%"}}>
                                                Оплата зависит от сложности эскиза, но иногда мы делаем эскиз бесплатно).
                                            </li>
                                            <li style={{marginTop: "1%"}}>
                                                Художник создает эскиз(ы) от 1 до 7 дней в зависимости от сложности и загруженности.
                                            </li>
                                            <li style={{marginTop: "1%"}}>
                                                Согласование эскиза с заказчиком: доработки, правки и утверждение окончательной версии.
                                            </li>
                                        </ol>
                                    </li>

                                    <li style={{marginTop: "2%"}}>
                                        Если клиент не вписывается в запланированный им бюджет, то ему предлагаются варианты
                                        для снижения стоимости:
                                        <ol type="A" style={{marginTop: "2%"}} >
                                            <li style={{marginTop: "1%"}}>
                                                Упрощение эскиза.
                                            </li>
                                            <li style={{marginTop: "1%"}}>
                                                Снижение уровня прорисовки.
                                            </li>
                                        </ol>
                                    </li>

                                    <li style={{marginTop: "2%"}}>
                                        <a style={{ border:"1px solid", borderColor:"whitesmoke", borderRadius:"15px", padding:"5px"}} href="/dials">
                                            <strong>Подписание договора</strong>
                                        </a>
                                    </li>
                                    <li style={{marginTop: "2%"}}>
                                        Внесение аванса.
                                    </li>
                                </ol>
                            </div>

                            <span
                                style={{ cursor: "pointer", color: "gray", marginTop: "1%" }}
                                name="stages"
                                className="why-hide"
                                onClick = {()=> 
                                    {
                                        this.setState({ isShowPrepareStage: !this.state.isShowPrepareStage })
                                        let why = document.getElementById("prepare");
                                        if(!this.state.isShowPrepareStage)
                                        {
                                            why.classList.add("visible");
                                        }
                                        else
                                        {
                                            why.classList.remove("visible");
                                        }
                                    }
                                }
                            >
                                <strong> Подготовительный: </strong>
                            </span>

                            <div
                                className="why-hide"
                                id="prepare"
                                style={{marginTop: "1%"}}
                            >
                                <ol type="1">
                                    <li style={{marginTop: "2%"}}>
                                        Мойка и чистка кузова.
                                    </li>
                                    <li style={{marginTop: "2%"}}>
                                        Демонтаж или(и) оклейка пленкой элементов кузова
                                    </li>
                                    <li style={{marginTop: "2%"}}>
                                        Подготовка поверхности: устраняются сколы и царапины, при необходимости выравнивается
                                        кузов, если на нем есть вмятины. Снимается слой лака.
                                    </li>
                                </ol>
                            </div>

                            <span
                                style={{ cursor: "pointer", color: "gray", marginTop: "1%" }}
                                name="stages"
                                className="why-hide"
                                onClick = {()=> 
                                    {
                                        this.setState({ isShowMainStage: !this.state.isShowMainStage });
                                        let why = document.getElementById("main");
                                        if(!this.state.isShowMainStage)
                                        {
                                            why.classList.add("visible");
                                        }
                                        else
                                        {
                                            why.classList.remove("visible");
                                        }
                                    }
                                }
                            >
                                <strong> Основной: </strong>
                            </span>

                            <div
                                className="why-hide"
                                id="main"
                                style={{marginTop: "1%"}}
                            >
                                <ol type="1">
                                    <li style={{marginTop: "2%"}}>
                                        Нанесение аэрографии (после завершения этого этапа заказчик приглашается на осмотр или
                                        ему отправляют фото или видео осмотр получившегося рисунка. Если требуются какие-то
                                        правки, то их делают на этом этапе, до лакировки).
                                    </li>
                                    <li style={{marginTop: "2%"}}>
                                        Лакировка (делается в несколько слоев).
                                    </li>
                                    <li style={{marginTop: "2%"}}>
                                        Детали кузова крепятся на прежние места.
                                    </li>
                                    <li style={{marginTop: "2%"}}>
                                        Полировка.
                                    </li>
                                </ol>
                            </div>

                            <span
                                style={{ cursor: "pointer", color: "gray", marginTop: "1%" }}
                                name="stages"
                                className="why-hide"
                                onClick = {()=> 
                                    {
                                        this.setState({ isShowFinalStage: !this.state.isShowFinalStage });
                                        let why = document.getElementById("final");
                                        if(!this.state.isShowFinalStage)
                                        {
                                            why.classList.add("visible");
                                        }
                                        else
                                        {
                                            why.classList.remove("visible");
                                        }
                                    }
                                }
                            >
                                <strong> Завершающий: </strong>
                            </span>

                            <div
                                className="why-hide"
                                id="final"
                                style={{marginTop: "1%"}}
                            >
                                <ol type="1">
                                    <li style={{marginTop: "2%"}}>
                                        Заказчик принимает работу и подписывает акт выполненных работ. Оплачивает оставшуюся
                                        часть средств и уезжает на своем обновленном улучшенном автомобиле.
                                    </li>
                                </ol>
                            </div>

                            <br></br><br></br>

                            <hr style={{color: "gray", border: "1px solid"}}></hr>
                            <span>
                                <strong>Цена на аэрографию</strong> зависит от многих факторов: площадь рисунка, детализация изображения,
                                место расположения рисунка, сложность подготовительных работ, используемая техника
                                нанесения краски.
                            </span>
                            <hr style={{color: "gray", border: "1px solid"}}></hr>

                            <span
                                style={{ cursor: "pointer", color: "gray", marginTop: "1%" }}
                                onClick = {()=> 
                                    {
                                        this.setState({ isShowGarantText: !this.state.isShowGarantText });
                                        let why = document.getElementById("garant");
                                        if(!this.state.isShowGarantText)
                                        {
                                            why.classList.add("visible");
                                        }
                                        else
                                        {
                                            why.classList.remove("visible");
                                        }
                                    }
                                }
                            >
                                <strong> ГАРАНТИИ: </strong>
                            </span>

                            <div
                                className="why-hide"
                                id="garant"
                                style={{marginTop: "1%"}}
                            >
                                Все работы, начиная от разработки эскиза, заканчивая нанесением защитного лака, выполняются
                                профессионалами с использованием современного, высокотехнологичного оборудования.
                                Рисунок наносится качественными, автомобильными красками, стойкими к выцветанию и любым
                                внешним воздействиям.
                                <br></br><br></br>
                                Мы предоставляем гарантию на все работы сроком на 1 год. После выполнения аэрографии также
                                сохраняется и заводская гарантия на автомобиль. Цены на наши услуги прописываются в договоре
                                до начала работ и остаются неизменными. Отсутствуют скрытые тарифы и дополнительные
                                платежи.
                            </div>

                            <br></br><br></br>

                            <span
                                style={{ cursor: "pointer", color: "gray", marginTop: "1%" }}
                                onClick = {()=> 
                                    {
                                        this.setState({ isShowOurAdvantages: !this.state.isShowOurAdvantages });
                                        let why = document.getElementById("advantages");
                                        if(!this.state.isShowOurAdvantages)
                                        {
                                            why.classList.add("visible");
                                        }
                                        else
                                        {
                                            why.classList.remove("visible");
                                        }
                                    }
                                }
                            >
                                <strong> НАШИ ПРЕИМУЩЕСТВА: </strong>
                            </span>

                            <div
                                className="why-hide"
                                id="advantages"
                                style={{marginTop: "1%"}}
                            >
                                <ul>
                                    <li style={{marginTop: "2%"}}>
                                        Художники с опытом работы более 10 лет
                                    </li>
                                    <li style={{marginTop: "2%"}}>
                                        Гарантия на работы 1 год + сохранение заводской гарантии
                                    </li>
                                    <li style={{marginTop: "2%"}}>
                                        Разработка индивидуального дизайн-проекта
                                    </li>
                                    <li style={{marginTop: "2%"}}>
                                        Работы ведутся на оборудовании крупнейшего дилерского центра
                                    </li>
                                    <li style={{marginTop: "2%"}}>
                                        Возможность предоставления подменного автомобиля.
                                    </li>
                                </ul>
                            </div>
        </div>
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
                            src={airHeader}
                            alt="Аэрография"
                        />
                        <span
                            className="interiorsHeaderText"
                        >
                            Аэрография на автомобилях и мотоциклах
                        </span>
                        <span
                            className="interiorsHeaderPriceText"
                        >
                           от 15 000 руб. за деталь | скидка 5% при заказе от 3-х элементов
                        </span>
                        <span
                            className="interiorsHeaderGarantText"
                        >
                            Гарантия на работы<br></br>
                            5 лет
                        </span>
                    </div>
                </div>
                <div className="promise-block">
                            <div className="promise-text">
                                <span>
                                    За 3 дня нарисуем Вам эскиз будущей <br></br> работы ещё
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
                                ПОДРОБНЕЕ ОБ АЭРОГРАФИИ
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
                    <InteriorsHideBlock
                            isUncover = {this.state.uncover}
                            text = { this.airbrushingText }
                    />

                    <div className="wrapper-gallery-part">
                            <span className = "gallery-header">
                                Галерея наших работ
                            </span>
                            
                            <div className="gallery-wrapper">
                                <div className="gallery-wrapper-block-div">
                                    <a 
                                        className="gallery-img-div1"
                                        href={true}
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
                                        href={true}
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
                                    href={true}
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
                                href={true}
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
                                href={true}
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
                    <div className="interiors-example-block">
                        <span className="interiors-text">
                            Легковые автомобили
                        </span>
                        <div className="interiors-element-div">
                            <img
                                className="interiors-element-img"
                                src={car}
                                alt="изображение"
                            />
                        </div>
                    </div>

                        <LittleHideBlock
                            className="little-block-wrapper"
                            text = "Пластмассовый мир победил... Всех, кроме нас "
                        />

                    <div className="interiors-example-block1">
                        <span className="interiors-text">
                            Внедорожники
                        </span>
                        <div className="interiors-element-div">
                            <img
                                className="interiors-element-img"
                                src={SUV}
                                alt="изображение"
                            />
                        </div>
                    </div>

                    <LittleHideBlock
                        className="little-block-wrapper"
                        text = "Пластмассовый мир победил... Всех, кроме нас/ ВНЕДОРОЖНИКИ"
                    />

                    <div className="interiors-example-block1">
                        <span className="interiors-text">
                            Мотоциклы
                        </span>
                        <div className="interiors-element-div">
                            <img
                                className="interiors-element-img"
                                src={motocycle}
                                alt="изображение"
                            />
                        </div>
                    </div>

                    <LittleHideBlock
                        className="little-block-wrapper"
                        text = "Пластмассовый мир победил... Всех, кроме нас/ МОТИКИ"
                    />

                    <div className="interiors-example-block1">
                        <span className="interiors-text">
                            Грузовые и автобусы
                        </span>
                        <div className="interiors-element-div">
                            <img
                                className="interiors-element-img"
                                src={trailer}
                                alt="изображение"
                            />
                        </div>
                    </div>

                    <LittleHideBlock
                        className="little-block-wrapper"
                        text = "Пластмассовый мир победил... Всех, кроме нас/ Трейлеры"
                    />

                    <div className="interiors-example-block2">
                        <span className="interiors-text">
                            Автовинил
                        </span>
                        <div className="interiors-element-div">
                            <img
                                className="interiors-element-img"
                                src={autoVinyl}
                                alt="изображение"
                            />
                        </div>
                    </div>

                    <LittleHideBlock
                        className="little-block-wrapper1"
                        text = "Пластмассовый мир победил... Всех, кроме нас/ ВИНИЛ"
                    />

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

export default Airbrushing;