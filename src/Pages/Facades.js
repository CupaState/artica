import React, { Component } from 'react';
import "../css/Facades.css";
import facadesHeader from "../assets/facadesImg/facadeHeader.png";
import ButtonUI from "../Components/Button";
import MyModal from "../Components/MyModal";
import nextArrowIcon from "../assets/icons/rightarrow.ico";
import FacadesHideBlock from "../Components/HideBlock";
import kitchenImg from "../assets/facadesImg/kitchen.png";
import windowImg from "../assets/facadesImg/window.png";
import waitingRoom from "../assets/facadesImg/WaitingRoom.png";
import ModalImageGallery from "../Components/ModalImageGallery";
import Gallery from "../Components/Gallery";

class Facades extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            show: false,
            uncover: false,
            isShowImage: false,
            isShowGallery: false,
            isShowWhy: false,
            isShowPriceDependency: false,
            isShowStages: false,
            isShowWalls: false,
            isShowTechnics: false,
            isShowFeatures: false,
            isShowAdvantages: false,
            isShowStyles: false
        };

        this.onClose = this.onClose.bind(this);
        this.closeImage = this.closeImage.bind(this);
        this.closeGallery = this.closeGallery.bind(this);

        this.galleryImage = [
            kitchenImg, windowImg,
            waitingRoom, waitingRoom,
            waitingRoom, waitingRoom,
            waitingRoom, waitingRoom,
            waitingRoom, waitingRoom,
            waitingRoom, waitingRoom,
            waitingRoom, waitingRoom,
            waitingRoom, waitingRoom,
            waitingRoom, waitingRoom,
            waitingRoom, waitingRoom,
            waitingRoom, waitingRoom,
            waitingRoom, waitingRoom,
            waitingRoom,
            ];
        this.imgIndex = 0;

        this.facadesText = <div style={{ userSelect: "none" }}>
            <strong>Роспись фасадов</strong> - лучший способ для того, чтобы сделать строения незабываемыми, улицы
                    самобытными, а город уникальным. <br></br><br></br>
                    <div
                        className="facades-divider-text"
                    >
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
                                <span>
                                    <strong>Компаниям:</strong>   реклама, узнаваемость.<br></br>
                                    <strong>Людям:</strong> эстетическое удовольствие от преображения внешнего вида, или же,
                                    чтобы высказать какую-то мысль и привлечь внимание других людей.
                                </span>
                            </div>

                            <br></br><br></br>

                            <span
                                style={{ cursor: "pointer", color: "gray", marginTop: "1%" }}
                                onClick = {()=> 
                                    {
                                        this.setState({ isShowPriceDependency: !this.state.isShowPriceDependency })
                                        let why = document.getElementById("price");
                                        if(!this.state.isShowPriceDependency)
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
                                <strong> СТОИМОСТЬ ЗАВИСИТ ОТ: </strong>
                            </span>

                            <div
                                className="why-hide"
                                id="price"
                                style={{marginTop: "1%"}}
                            >
                                <ul>
                                    <li style={{marginTop: "2%"}}>
                                        <strong>Поверхности под роспись</strong> — нужна ли дополнительная подготовка:
                                        грунтовка, окраска, штукатурка? Высотные работы планируются или
                                        нет?
                                    </li>
                                    <li style={{marginTop: "2%"}}>
                                        <strong>Площадь рабочей поверхности</strong> — чем больше объем, тем дешевле за 1м<sup>2</sup>
                                    </li>                                    
                                    <li style={{marginTop: "2%"}}>
                                        <strong>Сложность рисунка</strong> — много ли цветов? Много ли мелких деталей надо
                                                                            отрисовать?
                                    </li>                                    
                                </ul>
                            </div>

                            <br></br><br></br>
                            
                            <hr style={{color: "gray", border: "1px solid"}}></hr>

                            <span style={{color: "gray"}}><i>Создание фресок и муралов часто дешевле, чем украшать фасады
                                    лепниной и штукатуркой или другой облицовкой.</i>
                            </span>

                            <hr style={{color: "gray", border: "1px solid"}}></hr>

                            <br></br>

                            <span
                                style={{ cursor: "pointer", color: "gray", marginTop: "1%" }}
                                onClick = {()=> 
                                    {
                                        this.setState({ isShowStages: !this.state.isShowStages })
                                        let why = document.getElementById("stages");
                                        if(!this.state.isShowStages)
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
                                <strong> ЭТАПЫ ВЫПОЛНЕНИЯ: </strong>
                            </span>

                            <div
                                className="why-hide"
                                id="stages"
                                style={{marginTop: "1%"}}
                            >
                                <ul>
                                    <li style={{marginTop: "2%"}}>
                                        Консультация и осмотр объекта
                                    </li>
                                    <li style={{marginTop: "2%"}}>
                                        Утверждение эскиза и договора 
                                    </li>             
                                    <li style={{marginTop: "2%"}}>
                                        Закупка и доставка материалов
                                    </li>
                                    <li style={{marginTop: "2%"}}>
                                        Монтаж строительных лесов, вышек-тур
                                    </li>
                                    <li style={{marginTop: "2%"}}>
                                        Очистка и обеспыливание
                                    </li>
                                    <li style={{marginTop: "2%"}}>
                                        Штукатурные или реставрационные работы <i>(если требуются)</i>
                                    </li>                                    
                                    <li style={{marginTop: "2%"}}>
                                        Грунтование
                                    </li>                                    
                                    <li style={{marginTop: "2%"}}>
                                        Наметка контура через проектор
                                    </li>                                    
                                    <li style={{marginTop: "2%"}}>
                                        Прорисовка изображения
                                    </li>
                                    <li style={{marginTop: "2%"}}>
                                        Нанесение защитного слоя лака
                                    </li>
                                    <li style={{marginTop: "2%"}}>
                                        Уборка
                                    </li>
                                </ul>
                            </div>

                            <br></br><br></br>

                            <span
                                style={{ cursor: "pointer", color: "gray", marginTop: "1%" }}
                                onClick = {()=> 
                                    {
                                        this.setState({ isShowWalls: !this.state.isShowWalls })
                                        let why = document.getElementById("walls");
                                        if(!this.state.isShowWalls)
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
                                <strong> КАКИЕ СТЕНЫ ПОДХОДЯТ? </strong>
                            </span>

                            <div
                                className="why-hide"
                                id="walls"
                                style={{marginTop: "1%"}}
                            >
                                <span>
                                Лучшая поверхность внешнего фасада – оштукатуренные стены. На такой
                                подложке можно выполнить рисунок максимальной четкости. Но сегодня
                                для живописи подходит абсолютно любая поверхность. Даже если она
                                кирпичная, и для такой поверхности найдется свой мотив, который оживит
                                ее внешний облик и придаст неповторимый шарм или желаемое
                                настроение.
                                </span>
                            </div>

                            <br></br><br></br>

                            <span
                                style={{ cursor: "pointer", color: "gray", marginTop: "1%" }}
                                onClick = {()=> 
                                    {
                                        this.setState({ isShowTechnics: !this.state.isShowTechnics })
                                        let why = document.getElementById("technics");
                                        if(!this.state.isShowTechnics)
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
                                <strong> ВИДЫ ТЕХНИК: </strong>
                            </span>

                            <div
                                className="why-hide"
                                id="technics"
                                style={{marginTop: "1%"}}
                            >
                                <ul>
                                    <li style={{marginTop: "2%"}}>
                                        Аэрозольная техника
                                    </li>
                                    <li style={{marginTop: "2%"}}>
                                        Роспись специальными кистями и маркерами 
                                    </li>             
                                    <li style={{marginTop: "2%"}}>
                                        Трафаретная роспись
                                    </li>
                                    <li style={{marginTop: "2%"}}>
                                        Валики и малярные кисти
                                    </li>
                                    <li style={{marginTop: "2%"}}>
                                        Окраска краскопультом
                                    </li>
                                </ul>
                            </div>

                            <br></br><br></br>

                            <span
                                style={{ cursor: "pointer", color: "gray", marginTop: "1%" }}
                                onClick = {()=> 
                                    {
                                        this.setState({ isShowFeatures: !this.state.isShowFeatures })
                                        let why = document.getElementById("features");
                                        if(!this.state.isShowFeatures)
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
                                <strong> ОСОБЕННОСТИ:</strong>
                            </span>

                            <div
                                className="why-hide"
                                id="features"
                                style={{marginTop: "1%"}}
                            >
                                Как бы талантливо мастер ни писал холсты, не у каждого получится охватить
                                перспективу на большой стене, да еще и работая на высоте.
                                <br></br><br></br>
                                <strong>Желательно при выборе рисунка учитывать много факторов:</strong>
                                <ul>
                                    <li style={{marginTop: "2%"}}>
                                        Стороны света
                                    </li>
                                    <li style={{marginTop: "2%"}}>
                                        Естественную освещенность в разное время суток, искусственное
                                        ночное освещение
                                    </li>
                                    <li style={{marginTop: "2%"}}>
                                        Местонахождение здания в общей концепции улицы
                                    </li>
                                    <li style={{marginTop: "2%"}}>
                                        Форму и масштаб стены
                                    </li>
                                </ul>
                            </div>

                            <br></br><br></br>

                            <span
                                style={{ cursor: "pointer", color: "gray", marginTop: "1%" }}
                                onClick = {()=> 
                                    {
                                        this.setState({ isShowAdvantages: !this.state.isShowAdvantages })
                                        let why = document.getElementById("advantages");
                                        if(!this.state.isShowAdvantages)
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
                                <strong> ПРЕИМУЩЕСТВА:</strong>
                            </span>

                            <div
                                className="why-hide"
                                id="advantages"
                                style={{marginTop: "1%"}}
                            >
                                <ul>
                                    <li style={{marginTop: "2%"}}>
                                        <strong>Скорость</strong> – быстрее чем делать облицовку из кирпича или панелей.
                                    </li>
                                    <li style={{marginTop: "2%"}}>
                                        <strong>Стоимость</strong> – экономия на дорогостоящих отделочных материалах и
                                                                    работах
                                    </li>
                                    <li style={{marginTop: "2%"}}>
                                        <strong>Срок службы</strong> – качественные краски для граффити, при правильной
                                                        подготовке поверхности, очень долго не выгорают и не отлетают.
                                    </li>
                                </ul>
                            </div>

                            <br></br><br></br>

                            <span
                                style={{ cursor: "pointer", color: "gray", marginTop: "1%" }}
                                onClick = {()=> 
                                    {
                                        this.setState({ isShowStyles: !this.state.isShowStyles })
                                        let why = document.getElementById("styles");
                                        if(!this.state.isShowStyles)
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
                                <strong> ОСНОВНЫЕ СТИЛИ РОСПИСИ ФАСАДОВ:</strong>
                            </span>

                            <div
                                className="why-hide"
                                id="styles"
                                style={{marginTop: "1%"}}
                            >
                                Существует немало стилей и креативных идей, все зависит от
                                художественной задумки, концепции вашего бизнеса и целевой аудитории.
                                <br></br>
                                <ul>
                                    <li style={{marginTop: "2%"}}>
                                        <strong>Леттеринг и каллиграфия</strong> – надписи на стенах любых размеров и
                                                                                    форм.
                                    </li>
                                    <li style={{marginTop: "2%"}}>
                                        <strong>Брендирование</strong> – фирменные цвета, логотипы, персонажи.
                                    </li>
                                    <li style={{marginTop: "2%"}}>
                                        <strong>Этнический стиль</strong> – используются национальные орнаменты. 
                                    </li>
                                    <li style={{marginTop: "2%"}}>
                                        <strong>Комиксы и персонажи</strong> – на стене изображаются сюжеты из известных
                                                                                сказок, комиксов, мультфильмов. Такие рисунки отличаются яркостью
                                                                                и позитивом.
 
                                    </li>
                                    <li style={{marginTop: "2%"}}>
                                        <strong>Геометрический минимализм</strong> – используются прямые и ломаные
                                                                                    линии, круги, квадраты, треугольники
                                    </li>
                                    <li style={{marginTop: "2%"}}>
                                        <strong>Градиентная покраска</strong> – плавный переход от цвета к цвету. 
                                    </li>
                                    <li style={{marginTop: "2%"}}>
                                        <strong>Скетчинг</strong> – выглядит как рисунок «от руки» карандашом в альбоме 
                                    </li>
                                    <li style={{marginTop: "2%"}}>
                                        <strong>Граффити и стрит-арт рисунки</strong> – всевозможные формы
                                                                                        самовыражения современных художников.

                                    </li>
                                    <li style={{marginTop: "2%"}}>
                                        <strong>Природа, пейзажи</strong> – разбавит приятными цветами городскую серость.
                                    </li>
                                    <li style={{marginTop: "2%"}}>
                                        <strong>Репродукции картин известных художников</strong> – точное повторение
                                                                                                    известных произведений искусства. Подойдет для ценителя
                                                                                                    классического искусства.
                                    </li>
                                    <li style={{marginTop: "2%"}}>
                                        <strong>Роспись-имитация</strong> – мрамора, лепнины, природного камня,
                                                                            натурального дерева и прочих материалов. Позволяет преобразить
                                                                            фасад, избегая долгосрочного ремонта с завозом натуральных
                                                                            материалов.
                                    </li>
                                </ul>
                            </div>
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
                        className = "facadeHeaderDiv"
                    >
                        <img
                            className="facadeHeaderImg"
                            src={facadesHeader}
                            alt="Роспись фасадов"
                        />
                        <span
                            className="facadeHeaderText"
                        >
                            Роспись Фасадов
                        </span>
                        <span
                            className="facadeHeaderPriceText"
                        >
                            от 1299 рублей за м<sup>2</sup> | каждый 10-й метр в подарок
                        </span>
                        <span
                            className="facadeHeaderGarantText"
                        >
                            Гарантия на работы<br></br>
                            2 года<br></br>
                            Выполнение работ любых размеров и сложностей
                        </span>
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
                                    text = "Заказать эскиз"
                                    onClick = {() => {this.setState({show: !this.state.show})}}
                                />
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
                            <span
                                className="facades-divider-text"
                            >
                                ПОДРОБНЕЕ О РОСПИСИ ФАСАДОВ
                            </span>
                        </div>
                        <img
                            className="divider-arrow"
                            src={nextArrowIcon}
                            alt="следующий слайд"
                            onClick = {() =>
                                        {
                                            this.setState({uncover: !this.state.uncover});
                                        }
                                      }
                        />
                    </div>
                        <FacadesHideBlock
                            isUncover = {this.state.uncover}
                            text = { this.facadesText }
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
                                Идея для вашей росписи
                            </span>
                            <span className="text-block-promise">
                                Не можете представить свою будущую роспись?<br></br>
                                В помощь Вашему вдохновению работы лучших художников жанра.<br></br>
                                Нарисуем похожее или скомбинируем Ваши идеи
                            </span>
                        </div>


                        <div className="facades-text-block">
                            <span className="facades-text">
                                Роспись фасадов
                            </span>
                        </div> 

                        <div className="facades-photo-wrapper">
                            <div className="facades-photo-block">
                                <div className="facades-photo-div">
                                    <img
                                        className="gallery-img-small"
                                        src={waitingRoom}
                                        alt="изображение"
                                        title="Нажмите для увеличения изображения"
                                        onClick={() =>
                                        {
                                            this.setState({isShowImage: true});
                                            this.imgIndex = 5;
                                        }}
                                    />
                                </div>
                                <div className="facades-photo-div">
                                    <img
                                        className="gallery-img-small"
                                        src={waitingRoom}
                                        alt="изображение"
                                        title="Нажмите для увеличения изображения"
                                        onClick={() =>
                                        {
                                            this.setState({isShowImage: true});
                                            this.imgIndex = 6;
                                        }}
                                    />
                                </div>
                                <div className="facades-photo-div">
                                    <img
                                        className="gallery-img-small"
                                        src={waitingRoom}
                                        alt="изображение"
                                        title="Нажмите для увеличения изображения"
                                        onClick={() =>
                                        {
                                            this.setState({isShowImage: true});
                                            this.imgIndex = 7;
                                        }}
                                    />
                                </div>
                                <div className="facades-photo-div">
                                    <img
                                        className="gallery-img-small"
                                        src={waitingRoom}
                                        alt="изображение"
                                        title="Нажмите для увеличения изображения"
                                        onClick={() =>
                                        {
                                            this.setState({isShowImage: true});
                                            this.imgIndex = 8;
                                        }}
                                    />
                                </div>
                                <div className="facades-photo-div1">
                                    <img
                                        className="gallery-img-small"
                                        src={waitingRoom}
                                        alt="изображение"
                                        title="Нажмите для увеличения изображения"
                                        onClick={() =>
                                        {
                                            this.setState({isShowImage: true});
                                            this.imgIndex = 9;
                                        }}
                                    />
                                </div>
                                <div className="facades-photo-div1">
                                    <img
                                        className="gallery-img-small"
                                        src={waitingRoom}
                                        alt="изображение"
                                        title="Нажмите для увеличения изображения"
                                        onClick={() =>
                                        {
                                            this.setState({isShowImage: true});
                                            this.imgIndex = 10;
                                        }}
                                    />
                                </div>
                                <div className="facades-photo-div1">
                                    <img
                                        className="gallery-img-small"
                                        src={waitingRoom}
                                        alt="изображение"
                                        title="Нажмите для увеличения изображения"
                                        onClick={() =>
                                        {
                                            this.setState({isShowImage: true});
                                            this.imgIndex = 11;
                                        }}
                                    />
                                </div>
                                <div className="facades-photo-div1">
                                    <img
                                        className="gallery-img-small"
                                        src={waitingRoom}
                                        alt="изображение"
                                        title="Нажмите для увеличения изображения"
                                        onClick={() =>
                                        {
                                            this.setState({isShowImage: true});
                                            this.imgIndex = 12;
                                        }}
                                    />
                                </div>
                                <div className="facades-photo-div1">
                                    <img
                                        className="gallery-img-small"
                                        src={waitingRoom}
                                        alt="изображение"
                                        title="Нажмите для увеличения изображения"
                                        onClick={() =>
                                        {
                                            this.setState({isShowImage: true});
                                            this.imgIndex = 13;
                                        }}
                                    />
                                </div>
                                <div className="facades-photo-div1">
                                    <img
                                        className="gallery-img-small"
                                        src={waitingRoom}
                                        alt="изображение"
                                        title="Нажмите для увеличения изображения"
                                        onClick={() =>
                                        {
                                            this.setState({isShowImage: true});
                                            this.imgIndex = 14;
                                        }}
                                    />
                                </div>
                                <div className="facades-photo-div1">
                                    <img
                                        className="gallery-img-small"
                                        src={waitingRoom}
                                        alt="изображение"
                                        title="Нажмите для увеличения изображения"
                                        onClick={() =>
                                        {
                                            this.setState({isShowImage: true});
                                            this.imgIndex = 15;
                                        }}
                                    />
                                </div>
                                <div className="facades-photo-div1">
                                    <img
                                        className="gallery-img-small"
                                        src={waitingRoom}
                                        alt="изображение"
                                        title="Нажмите для увеличения изображения"
                                        onClick={() =>
                                        {
                                            this.setState({isShowImage: true});
                                            this.imgIndex = 16;
                                        }}
                                    />
                                </div>
                                <div className="facades-photo-div1">
                                    <img
                                        className="gallery-img-small"
                                        src={waitingRoom}
                                        alt="изображение"
                                        title="Нажмите для увеличения изображения"
                                        onClick={() =>
                                        {
                                            this.setState({isShowImage: true});
                                            this.imgIndex = 17;
                                        }}
                                    />
                                </div>
                                <div className="facades-photo-div1">
                                    <img
                                        className="gallery-img-small"
                                        src={waitingRoom}
                                        alt="изображение"
                                        title="Нажмите для увеличения изображения"
                                        onClick={() =>
                                        {
                                            this.setState({isShowImage: true});
                                            this.imgIndex = 18;
                                        }}
                                    />
                                </div>
                                <div className="facades-photo-div1">
                                    <img
                                        className="gallery-img-small"
                                        src={waitingRoom}
                                        alt="изображение"
                                        title="Нажмите для увеличения изображения"
                                        onClick={() =>
                                        {
                                            this.setState({isShowImage: true});
                                            this.imgIndex = 19;
                                        }}
                                    />
                                </div>
                                <div className="facades-photo-div1">
                                    <img
                                        className="gallery-img-small"
                                        src={waitingRoom}
                                        alt="изображение"
                                        title="Нажмите для увеличения изображения"
                                        onClick={() =>
                                        {
                                            this.setState({isShowImage: true});
                                            this.imgIndex = 20;
                                        }}
                                    />
                                </div>
                                <div className="facades-photo-div1">
                                    <img
                                        className="gallery-img-small"
                                        src={waitingRoom}
                                        alt="изображение"
                                        title="Нажмите для увеличения изображения"
                                        onClick={() =>
                                        {
                                            this.setState({isShowImage: true});
                                            this.imgIndex = 21;
                                        }}
                                    />
                                </div>
                                <div className="facades-photo-div1">
                                    <img
                                        className="gallery-img-small"
                                        src={waitingRoom}
                                        alt="изображение"
                                        title="Нажмите для увеличения изображения"
                                        onClick={() =>
                                        {
                                            this.setState({isShowImage: true});
                                            this.imgIndex = 22;
                                        }}
                                    />
                                </div>
                                <div className="facades-photo-div1">
                                    <img
                                        className="gallery-img-small"
                                        src={waitingRoom}
                                        alt="изображение"
                                        title="Нажмите для увеличения изображения"
                                        onClick={() =>
                                        {
                                            this.setState({isShowImage: true});
                                            this.imgIndex = 23;
                                        }}
                                    />
                                </div>
                                <div className="facades-photo-div1">
                                    <img
                                        className="gallery-img-small"
                                        src={waitingRoom}
                                        alt="изображение"
                                        title="Нажмите для увеличения изображения"
                                        onClick={() =>
                                        {
                                            this.setState({isShowImage: true});
                                            this.imgIndex = 24;
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="vk-gallery-wrapper">
                            <a className="link-vk-gallery"
                                href="https://vk.com/album-12967671_238254691"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Галерея ВКонтакте"
                                alt="Галерея ВКонтакте"
                                onClick={() => {window.href="https://vk.com/album-12967671_238254691"}}
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
                        
                </div>
                <ModalImageGallery isShowImage={this.state.isShowImage} ImageArr={this.galleryImage} ImgArrIndex={this.imgIndex} closeImage={this.closeImage}/>
                <Gallery isShowGallery={this.state.isShowGallery} ImageArr={this.galleryImage} closeGallery={this.closeGallery}/>
                <MyModal isOpen = {this.state.show} onClose = {this.onClose}/>
            </>
        );
    }


}

export default Facades;