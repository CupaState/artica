import React, { Component } from 'react';
import "../css/About.css";
import "../css/Facades.css";
import "../css/Home.css";

import ModalImageGallery from "../Components/ModalImageGallery";
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
import img3000 from "../assets/aboutImg/img3000_1.jpg";
import img5000 from "../assets/aboutImg/img5000_1.jpg";
import img7000 from "../assets/aboutImg/img8000.jpg";
import img9000 from "../assets/aboutImg/img15000.jpg";

import rekvizit from "../assets/dials/rekvizit.pdf";

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
            isShowImage: false
        };

        this.imgArr = [img3000, img5000, img7000, img9000];
        this.imgIndex = 0;

        this.firstToolTip = <div>
        <div 
        onClick={ () => {window.open("tel:+79779613936")}}
        style={ { cursor:"pointer", textDecoration:"underline" } }>
            Звоните нам</div> и опишите свою задумку.
            Мы предварительно проконсультируем Вас, что поможет
            определиться с дальнейшим планом действий.
            Желательно прикрепить фото объекта или дизайн-проект
        </div>

        this.secondToolTip = <div>
            Если нет возможности самостоятельно провести замеры, или для ознакомления с нюансами объекта 
            необходимо личное присутствие, то
            наши художники приездут к Вам, чтобы проконсультировать и
            замерить площадь, планируемую под роспись.
        </div>

        this.thirdTooltip = <div>
            Мы подберем рисунки, обсудим их с Вами, и выбранные
            картинки разместим на фотографию объекта будущей росписи. 
            <span style={{ textDecoration:"underline" }}><a href="#eskiz"
            >
            <br></br>Утвержденный эскиз мы прикрепляем в договор.</a></span>
            Также он
            дает нам возможность точно просчитать
            стоимость работы.
        </div>

        this.fourthToolTip = <div>
            Работаем как с физ.лицами так и с юр.лицами
            <div style={{ border:"1px solid", borderColor:"whitesmoke", borderRadius:"15px", padding:"5px", marginTop:"5%" }}>
                <a 
                href="/dials"
                >ДОГОВОРЫ</a>
            </div>
        </div>

        this.fifthToolTip = <div>
            Роспись, выполненная по всем правилам, будет безопасной,
            экологичной и долговечной. Для лучшего результата необходимо
            использовать материалы престижных брендов и соблюдать
            технологии нанесения рисунка. Подготовленные поверхности снизу
            и бесцветный лак сверху, надёжно защищают живописный слой
            долгие годы.
        </div>

        this.sixthToolTip = <div>
            Наши художники воплощают утвержденный эскиз, стараясь
            отступать от него только по просьбе клиента, и то, если это
            незначительное отступление и своевременно сказанное.
        </div>

        this.seventhToolTip = <div>
            После завершения работы и приемки, подписываем акт.
            Проводим оплату.
            Оплата для ЮР.ЛИЦ:
            <div style={{ border:"1px solid", borderColor:"whitesmoke", borderRadius:"15px", padding:"5px", marginTop:"5%" }}>
                <a 
                download
                href={ rekvizit }
                >РЕКВИЗИТЫ</a>
            </div>
        </div>

        this.eighthToolTip = <div>
            Наносим защитный слой лака, если это необходимо в связи
            условиями эксплуатации рисунка или вызвано пожеланием
            заказчика. Лак может быть матовый или глянцевый, прозрачный
            или с цветом. Любой рисунок под лаком сохранится гораздо
            дольше.
        </div>

        this.onClose = this.onClose.bind(this);
        this.closeImage = this.closeImage.bind(this);
    }

    closeImage = (isShowImage) =>
    {
        this.setState({ isShowImage: isShowImage });
        this.imgIndex = 0;
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
                            text = {this.firstToolTip}
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
                            text = { this.secondToolTip }
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
                            text = { this.thirdTooltip }
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
                            text = { this.fourthToolTip }
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
                            text = { this.fifthToolTip }
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
                            text = { this.sixthToolTip }
                            className="tooltip-question"
                        />

                        <a className="how-to-work-img-div"
                            onClick={ () => {window.href="https://vk.com/album-12967671_238789318"}}
                            href="https://vk.com/album-12967671_238789318"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                className="how-to-work-img-paint"
                                src={paint}
                                alt="изображение"
                            />
                        </a>
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
                            text = { this.seventhToolTip }
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
                            text = { this.eighthToolTip }
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
                            ЭСКИЗ – способ помочь клиенту выбрать, что
                            нарисовать,<br></br> а художникам - оценить сроки и
                            стоимость работы.
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
                            ПРОЦЕСС СОЗДАНИЯ:
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
                        <br></br>
                        <span style={{fontStyle:"italic"}}>(цифры приведены для рисунка размером от 10м<sup>2</sup>)</span>

                    </span>
                </div>

                <a name="eskiz"></a>

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
                            onClick={
                                (e)=>{
                                    e.preventDefault();
                                    this.setState({isShowImage: true });
                                    this.imgIndex = 0;                                
                                }
                            }
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
                            onClick={
                                (e)=>{
                                    e.preventDefault();
                                    this.setState({isShowImage: true });
                                    this.imgIndex = 1;                                
                                }
                            }
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
                            onClick={
                                (e)=>{
                                    e.preventDefault();
                                    this.setState({isShowImage: true });
                                    this.imgIndex = 2;                                
                                }
                            }
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
                            onClick={
                                (e)=>{
                                    e.preventDefault();
                                    this.setState({isShowImage: true });
                                    this.imgIndex = 3;                                
                                }
                            }
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
                <ModalImageGallery isShowImage={this.state.isShowImage} ImageArr={this.imgArr} ImgArrIndex={this.imgIndex} closeImage={this.closeImage}/>
                <MyModal isOpen = {this.state.show} onClose = {this.onClose}/>
            </>
        );
    }
}

export default About;