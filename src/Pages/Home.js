import React, { Component } from 'react';
import CarouselBox from "../Components/CarouselBox";
import facadesArtImg from "../assets/main/facadesArtImg.png";
import interiorsImg from "../assets/main/interiorsImg.png";
import restorationImg from "../assets/main/restorationImg.png";
import aeroImg from "../assets/main/aeroImg.png";
import ButtonUI from "../Components/Button";
import MyModal from "../Components/MyModal";
import nextArrowIcon from "../assets/icons/rightarrow.ico";
import "../css/Home.css";

class Home extends Component {

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
        this.setState({ show: isShow });
    }
    
    render() {

        return (
            <>
                <CarouselBox/>
                <div className="blockBelowCarousel">
                    <span className="textBelowCarousel">
                    Опишите свою задачу или прикрепите дизайн<br></br> проект,
                     и мы свяжемся с Вами для консультации
                     </span>
                     <ButtonUI
                       classNameButton = "callButtonUI"
                       classNameText = "textButtonUI"
                       text = "Заказать обратный звонок"
                       onClick = {() => {this.setState({show: !this.state.show})}}
                    />
                </div>

                    <div className="home-photo-block">
                        <div className="image-block-div1">
                            <img 
                                src={facadesArtImg}
                                className="example-img"
                                alt="перейти на страницу"
                                onClick={()=>{window.open('/facades')}}
                            />
                            <span className="home-photo-text">Роспись Фасадов</span>
                            <img
                                className="next-arrow-i"
                                src={nextArrowIcon}
                                alt="перейти на страницу"
                                onClick={()=>{window.open('/facades')}}
                            />
                        </div>
                        <div className="image-block-div2">
                            <img 
                                src={interiorsImg}
                                className="example-img"
                                alt="перейти на страницу"
                                onClick={()=>{window.open('/interiors')}}
                            />
                            <span className="home-photo-text">Интерьеры</span>
                            <img
                                className="next-arrow-i"
                                src={nextArrowIcon}
                                alt="перейти на страницу"
                                onClick={()=>{window.open('/interiors')}}
                            />
                        </div>
                        <div className="image-block-div3">
                            <img 
                                src={restorationImg}
                                className="example-img"
                                alt="перейти на страницу"
                                onClick={()=>{window.open('/restoration')}}
                            />
                            <span className="home-photo-text">Реставрация</span>
                            <img
                                className="next-arrow-i"
                                src={nextArrowIcon}
                                alt="перейти на страницу"
                                onClick={()=>{window.open('/restoration')}}
                            />
                        </div>
                        <div className="image-block-div4">
                            <img 
                                src={aeroImg}
                                className="example-img"
                                alt="перейти на страницу"
                                onClick={()=>{window.open('/airbrushing')}}
                            />
                            <span className="home-photo-text">Аэрография на авто и мото</span>
                            <img
                                className="next-arrow-i"
                                src={nextArrowIcon}
                                alt="перейти на страницу"
                                onClick={()=>{window.open('/airbrushing')}}
                            />
                        </div>
                    </div>
                    <div className="other-services-block">
                        <div className="other-services-container">
                            <span className="other-services-text">Другие услуги</span>
                            <img
                                className="other-services-arrow"
                                src={nextArrowIcon}
                                alt="другие услуги"
                            />
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
                                    classNameText = "textButtonUI-promise"
                                    text = "Закажи эскиз"
                                    onClick = {() => {this.setState({show: !this.state.show})}}
                                />
                            </div>
                    </div>
                    <hr className="divider"></hr>
                    <div className="about-home-block">
                        <span className="about-home-text">
                            За 10 лет работы реализовано более 1000 проектов всех уровней сложности. <br></br>
                            Наш коллектив состоит из более чем 20 специалистов в различных ремесленных и художественных областях.
                        </span>
                    </div>
                    <hr className="divider"></hr>
                    <div className="footer-info-block">
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

export default Home;