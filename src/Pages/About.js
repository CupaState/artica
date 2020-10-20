import React, { Component } from 'react';
import "../css/About.css";
import "../css/Facades.css";
import "../css/Home.css";

import VideoHideBlock from "../Components/VideoHideBlock";
import HideBlock from "../Components/HideBlock";
import Tooltip from "../Components/Tooltip";
import ButtonUI from "../Components/Button";
import MyModal from "../Components/MyModal";

import worker from "../assets/aboutImg/worker.png";
import message from "../assets/aboutImg/message.png";
import prepare from "../assets/aboutImg/prepare.png";
import paint from "../assets/aboutImg/paint.png";
import approve from "../assets/aboutImg/approve.png";
import coverLayer from "../assets/aboutImg/coverLayer.png";
import roller from "../assets/aboutImg/roller.png";
import project from "../assets/aboutImg/project.png";
import list from "../assets/aboutImg/list.png";
import cash from "../assets/aboutImg/cash.png";
import clock from "../assets/aboutImg/clock.png";
import wall from "../assets/aboutImg/wall.png";
import sourceWall from "../assets/aboutImg/sourceWall.png";
import var1 from "../assets/aboutImg/var1.png";
import var2 from "../assets/aboutImg/var2.png";
import var3 from "../assets/aboutImg/var3.png";
import doneVar1 from "../assets/aboutImg/doneVar1.png";
import doneVar2 from "../assets/aboutImg/doneVar2.png";
import doneVar3 from "../assets/aboutImg/doneVar3.png";
import img3000 from "../assets/aboutImg/img3000.png";
import img5000 from "../assets/aboutImg/img5000.png";
import img7000 from "../assets/aboutImg/img7000.png";
import img9000 from "../assets/aboutImg/img9000.png";

import nextArrowIcon from "../assets/icons/rightarrow.ico";
import starFull from "../assets/icons/starFull.png";
import star from "../assets/icons/star.png";


class About extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            uncoverVideo: false,
            show: false,
            images: doneVar1,
            uncover: false,
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
                <div className="about-header-div">
                    <span className="about-header-text">
                        КАК МЫ РАБОТЕМ:
                    </span>
                </div>
                <div className="how-to-work-wrapper">

                    <div className="how-to-work-div">
                        <div className="how-to-work-num">
                            <span className="how-to-work-num-text">
                                1
                            </span>
                        </div>


                        <Tooltip
                            text = "Ipsum"
                            className="tooltip-question"
                        />

                        <div className="how-to-work-img-div">
                            <img
                                className="how-to-work-img"
                                src={message}
                                alt="изображение"
                            />
                        </div>
                        <div className="how-to-work-text-div">
                            <span className="how-to-work-text">
                                Обсуждение проекта
                            </span>
                        </div>
                    </div>

                    <div className="how-to-work-div">
                        <div className="how-to-work-num">
                            <span className="how-to-work-num-text">
                                2
                            </span> 
                        </div>

                        <Tooltip
                            text = "Lorem"
                            className="tooltip-question"
                        />

                        <div className="how-to-work-img-div">
                            <img
                                className="how-to-work-img"
                                src={worker}
                                alt="изображение"
                            />
                        </div>
                        <div className="how-to-work-text-div">
                            <span className="how-to-work-text">
                                Замер и фотографировние объекта
                            </span>
                        </div>
 
                    </div>

                    <div className="how-to-work-div">
                        <div className="how-to-work-num">
                            <span className="how-to-work-num-text">
                                3
                            </span> 
                        </div>

                        <Tooltip
                            text = "sdfjdffndfglaalgnn gfkflflslagn rkkfmzg"
                            className="tooltip-question"
                        />

                        <div className="how-to-work-img-div">
                            <img
                                className="how-to-work-img"
                                src={project}
                                alt="изображение"
                            />
                        </div>
                        <div className="how-to-work-text-div">
                            <span className="how-to-work-text">
                                Подготовка дизайн-проекта
                            </span>
                        </div>
                    </div>

                    <div className="how-to-work-div">
                        <div className="how-to-work-num">
                            <span className="how-to-work-num-text">
                                4
                            </span> 
                        </div>

                        <Tooltip
                            text = "DFhla;gfgrpq"
                            className="tooltip-question"
                        />

                        <div className="how-to-work-img-div">
                            <img
                                className="how-to-work-img"
                                src={list}
                                alt="изображение"
                            />
                        </div>
                        <div className="how-to-work-text-div">
                            <span className="how-to-work-text">
                                Заключение договора
                            </span>
                        </div>
                    </div>

                    <div className="how-to-work-div">
                        <div className="how-to-work-num">
                            <span className="how-to-work-num-text">
                                5
                            </span> 
                        </div>

                        <Tooltip
                            text = "oefkvlef;lfekfe'afe'la'adw"
                            className="tooltip-question"
                        />

                        <div className="how-to-work-img-div">
                            <img
                                className="how-to-work-img"
                                src={prepare}
                                alt="изображение"
                            />
                        </div>
                        <div className="how-to-work-text-div">
                            <span className="how-to-work-text">
                                Подготовка поверхности
                            </span> 
                        </div>
                    </div>

                    <div className="how-to-work-div">
                        <div className="how-to-work-num">
                            <span className="how-to-work-num-text">
                                6
                            </span> 
                        </div>

                        <Tooltip
                            text = "poewjljdnfga;brfgbzsghvnsmu,mnzbfvd"
                            className="tooltip-question"
                        />

                        <div className="how-to-work-img-div">
                            <img
                                className="how-to-work-img"
                                src={paint}
                                alt="изображение"
                            />
                        </div>
                        <div className="how-to-work-text-div">
                            <span className="how-to-work-text">
                                Работа художников
                            </span>
                        </div>
                    </div>

                    <div className="how-to-work-div">
                        <div className="how-to-work-num">
                            <span className="how-to-work-num-text">
                                7
                            </span> 
                        </div>

                        <Tooltip
                            text = "apodg;jhbvl,vroepsxvc"
                            className="tooltip-question"
                        />

                        <div className="how-to-work-img-div">
                            <img
                                className="how-to-work-img"
                                src={approve}
                                alt="изображение"
                            />
                        </div>
                        <div className="how-to-work-text-div">
                            <span className="how-to-work-text">
                                Утверждение проекта
                            </span>
                        </div>
                    </div>

                    <div className="how-to-work-div">
                        <div className="how-to-work-num">
                            <span className="how-to-work-num-text">
                                8
                            </span> 
                        </div>

                        <Tooltip
                            text = "[esd;jgvlbsfcfecd]"
                            className="tooltip-question"
                        />

                        <div className="how-to-work-img-div">
                            <img
                                className="how-to-work-img1"
                                src={coverLayer}
                                alt="изображение"
                            />
                        </div>
                        <div className="how-to-work-text-div">
                            <span className="how-to-work-text">
                                Нанесение защитного покрытия
                            </span>
                        </div>
                    </div>
                </div>

                <div
                    className="divider-div"
                >
                    <hr className="facades-divider"></hr>
                    <div
                        className="facades-divider-header"
                        onClick = {() =>
                            {
                                this.setState({uncoverVideo: !this.state.uncoverVideo});
                            }
                        }
                    >
                        <span className="facades-divider-text">
                            ПОСМОТРЕТЬ ВИДЕООТЗЫВЫ
                        </span>
                    </div>
                    <img
                        className="divider-arrow"
                        src={nextArrowIcon}
                        alt="подробнее"
                        onClick = {() =>
                            {
                                this.setState({uncoverVideo: !this.state.uncoverVideo});
                            }
                        }
                    />
                </div>

                    <VideoHideBlock
                        isUncover = {this.state.uncoverVideo}
                    />

                <div className="about-work-wrapper">

                    <div className="about-work-item">
                        <div
                            className="about-work-img-block"
                        >
                            <img
                                src={roller}
                                className="about-work-img"
                                alt="изображение"
                            />
                        </div>
                        <span className="about-work-blue-text">
                            Краска не осыпется и не потускнеет
                        </span>
                        <span className="about-work-white-text">
                            Тщательно подготовим поверхность перед работой. 
                            Покроем лаком после завершения. 
                            Благодаря соблюдению технологии роспись будет яркой и
                            продержится минимум 5 лет
                        </span>
                        <Tooltip
                            text="Тщательно подготовим поверхность перед работой. 
                            Покроем лаком после завершения. 
                            Благодаря соблюдению технологии роспись будет яркой и
                            продержится минимум 5 лет"
                            className="tooltip-question-visible"
                        />
                    </div>

                    <div className="about-work-item">
                        <div className="about-work-img-block">
                            <img
                                src={clock}
                                className="about-work-img"
                                alt="изображение"
                            />
                        </div>
                        <span className="about-work-blue-text">
                            Ускоренное выполнение заказа
                        </span>
                        <span className="about-work-white-text">
                            Нужно сделать быстрее?<br></br>
                            Большой штат художников 
                            позволяет выполнять 
                            даже крупные заказы за 2-3 дня
                        </span>
                        <Tooltip
                            text="Нужно сделать быстрее?
                            Большой штат художников 
                            позволяет выполнять 
                            даже крупные заказы за 2-3 дня"
                            className="tooltip-question-visible"
                        />
                    </div>

                    <div className="about-work-item">
                        <div className="about-work-img-block">
                            <img
                                src={wall}
                                className="about-work-img"
                                alt="изображение"
                            />
                        </div>
                        <span className="about-work-blue-text">
                            Работаем с различными поверхностями
                        </span>
                        <span className="about-work-white-text">
                            Пишем на бетоне, кирпиче, 
                            крашеной штукатурке, 
                            железных воротах,
                            бумаге и даже стекле. 
                            Независимо от высоты стены
                            работа будет выглядеть отлично
                        </span>
                        <Tooltip
                            text="Пишем на бетоне, кирпиче, 
                            крашеной штукатурке, 
                            железных воротах,
                            бумаге и даже стекле. 
                            Независимо от высоты стены
                            работа будет выглядеть отлично"
                            className="tooltip-question-visible"
                        />
                    </div>

                    <div className="about-work-item">
                        <div className="about-work-img-block">
                            <img
                                src={cash}
                                className="about-work-img"
                                alt="изображение"
                            />
                        </div>
                        <span className="about-work-blue-text">
                            Экономим Ваши деньги
                        </span>
                        <span className="about-work-white-text">
                            Предложим несколько разных вариантов исполнения,<br></br>
                            чтобы подобрать для Вас наиболее подходящий по цене и технологии
                        </span>
                        <Tooltip
                            text="Предложим несколько разных вариантов исполнения,
                            чтобы подобрать для Вас наиболее подходящий по цене и технологии"
                            className="tooltip-question-visible"
                        />
                    </div>
                </div>

                <div className="about-promise-block">
                    <div className="promise-text">
                        <span>
                            За 3 дня бесплатно нарисуем Вам эскиз будущей <br></br> работы ещё
                            до оплаты и заключения договора
                        </span>
                    </div>
                    <div className="promise-button-div">
                        <ButtonUI
                            classNameButton = "promise-button"
                            classNameText = "textButtonUI-promise"
                            text = "Заказать эскиз"
                            onClick = {() => {this.setState({show: !this.state.show})}}
                        />
                    </div>
                </div>
                
                <div className="sketch-create">
                    <span className="sketch-create-header">
                            ПРОЦЕСС СОЗДАНИЯ ЭСКИЗА
                    </span>
                </div>

                <div className="sketch-create-wrapper">
                    <div>
                        <img
                            src={sourceWall}
                            className="sketch-create-gallery-source"
                            alt="изображение"
                        />
                        <div className="sketch-create-gallery-text-div1">
                            <span className="sketch-create-gallery-num1">
                                1
                            </span>
                            <span className="sketch-create-gallery-text1">
                                Вы присылаете нам фото объекта и параметры стен
                            </span>
                        </div>
                    </div>
                    
                    <div className="sketch-create-gallery">
                        <img
                            src={var1}
                            className="sketch-create-gallery-img1"
                            alt="изображение"
                            onMouseEnter={() => {this.setState({images: doneVar1});}}
                        />         
                        <img
                            src={var2}
                            alt="изображение"
                            className="sketch-create-gallery-img2"
                            onMouseEnter={() => {this.setState({images: doneVar2});}}
                        />
                        <img
                            src={var3}
                            alt="изображение"
                            className="sketch-create-gallery-img3"
                            onMouseEnter={() => {this.setState({images: doneVar3});}}
                        />
                        <div className="sketch-create-gallery-text-div2">
                            <span className="sketch-create-gallery-num2">
                                2
                            </span>
                            <span className="sketch-create-gallery-text2">
                                Мы предлагаем вам изображения<br></br> для нанесения на стену или разрабатываем<br></br> индивидуальный эскиз
                            </span>
                            <span className="sketch-create-gallery-text2-mobile">
                                Мы предлагаем <br></br> вам изображения<br></br> для нанесения на стену <br></br> или разрабатываем<br></br> индивидуальный эскиз
                            </span>
                        </div>
                        
                    </div>
                    <div>
                        <img
                            className="sketch-create-gallery-done"
                            src={this.state.images}
                            alt="Эскиз"
                        />
                        <div  className="sketch-create-gallery-text-div3">
                            <span className="sketch-create-gallery-num3">
                                3
                            </span>
                            <span className="sketch-create-gallery-text3">
                                После выбора изображения<br></br> 
                                показываем, как оно будет выглядеть на поверхности.<br></br>
                                После утверждения эскиза, рассчёта стоимости и подписания договора - начинаем работы
                            </span>
                            <span className="sketch-create-gallery-text3-mobile">
                                После выбора изображения<br></br> 
                                показываем, как оно будет выглядеть на поверхности.
                            </span>
                        </div>    
                    </div>
                </div>

                <div className="calculate-header-div">
                    <span className="calculate-header">
                        РАССЧЁТ СТОИМОСТИ ИЗОБРАЖЕНИЯ
                    </span>
                    <span className="calculate-header-text">
                        Стоимость изображения зависит от сложности, проработки, количества<br></br> элементов
                        и цветовой гаммы. <br></br>
                        Ниже приведены цены нанесения изображения в интерьере за м<sup>2</sup>
                    </span>
                </div>

                <div className="calculate-example-wrapper">

                    <div className="calculate-example-div">
                        <div className="calculate-example-star-div">
                            <img
                                className="calculate-example-star"
                                src={starFull}
                                alt="изображение"
                            />
                            <img
                                className="calculate-example-star"
                                src={starFull}
                                alt="изображение"
                            />
                            <img
                                className="calculate-example-star"
                                src={star}
                                alt="изображение"
                            />
                            <img
                                className="calculate-example-star"
                                src={star}
                                alt="изображение"
                            />
                            <img
                                className="calculate-example-star"
                                src={star}
                                alt="изображение"
                            />
                        </div>
                        <img
                            src={img3000}
                            className="calculate-example-img"
                            alt="изображение"
                        />
                        <span className="calculate-example-price"> 3000 руб.</span>
                    </div>

                    <div className="calculate-example-div">
                        <div className="calculate-example-star-div">
                            <img
                                className="calculate-example-star"
                                src={starFull}
                                alt="изображение"
                            />
                            <img
                                className="calculate-example-star"
                                src={starFull}
                                alt="изображение"
                            />
                            <img
                                className="calculate-example-star"
                                src={starFull}
                                alt="изображение"
                            />
                            <img
                                className="calculate-example-star"
                                src={star}
                                alt="изображение"
                            />
                            <img
                                className="calculate-example-star"
                                src={star}
                                alt="изображение"
                            />
                        </div>
                        <img
                            src={img5000}
                            alt="изображение"
                            className="calculate-example-img"
                        />
                        <span className="calculate-example-price"> 5000 руб.</span>
                    </div>

                    <div className="calculate-example-div">
                        <div className="calculate-example-star-div">
                            <img
                                className="calculate-example-star"
                                src={starFull}
                                alt="изображение"
                            />
                            <img
                                className="calculate-example-star"
                                src={starFull}
                                 alt="изображение"
                            />
                            <img
                                className="calculate-example-star"
                                src={starFull}
                                 alt="изображение"
                            />
                            <img
                                className="calculate-example-star"
                                src={starFull}
                                 alt="изображение"
                            />
                            <img
                                className="calculate-example-star"
                                src={star}
                                 alt="изображение"
                            />
                        </div>
                        <img
                            src={img7000}
                             alt="изображение"
                            className="calculate-example-img"
                        />
                        <span className="calculate-example-price"> 7000 руб.</span>
                    </div>

                    <div className="calculate-example-div">
                        <div className="calculate-example-star-div">
                            <img
                                className="calculate-example-star"
                                src={starFull}
                                 alt="изображение"
                            />
                            <img
                                className="calculate-example-star"
                                src={starFull}
                                 alt="изображение"
                            />
                            <img
                                className="calculate-example-star"
                                src={starFull}
                                 alt="изображение"
                            />
                            <img
                                className="calculate-example-star"
                                src={starFull}
                                 alt="изображение"
                            />
                            <img
                                className="calculate-example-star"
                                src={starFull}
                                 alt="изображение"
                            />
                        </div>
                        <img
                            src={img9000}
                             alt="изображение"
                            className="calculate-example-img"
                        />
                        <span className="calculate-example-price"> 9000 руб.</span>
                    </div>
                </div>

                <div
                    className="divider-div"
                >
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
                            ПОДРОБНЕЕ
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
                <HideBlock
                    isUncover = {this.state.uncover}
                    text = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem."
                />

                <div className="about-footer-info-block">
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
                
                <MyModal isOpen = {this.state.show} onClose = {this.onClose}/>
            </>
        );
    }
}

export default About;