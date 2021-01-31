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
        this.textAboutPaint = <div className=""><strong>Техники и стилистические направления росписи:</strong><br></br><br></br>
        <strong>1. Классические техники ( Монументальная живопись)</strong><br></br><br></br>
        <strong>Фреска</strong> (<strong>Fresco</strong> с итальянского «свежий»). Рисунок наносится на только что нанесенную
        (влажную) штукатурку при помощи водорастворимых красок. При высыхании на её
        поверхности образовывается пленка, защищающая изображения от воздействия внешних
        факторов. Пик популярности техники пришелся на эпоху Возрождения.
        <br></br><br></br>
        <strong>Алсекко</strong> (<strong>a secco</strong> с итальянского «по сухому»). Рисунок наносится на сухую штукатурку.
        Краски сперва растирают на растительном клее и яйце, а затем в них добавляются известь
        и акриловые, масляные, или темперные краски.
        <br></br><br></br>
        <strong>Сграфитто</strong> (с итальянского «выцарапанный»). Сперва на стену наносится грунт черного цвета, 
        затем белого, а изображение создается путем соскабливания верхнего слоя.
        Изобретение сграффито принадлежит древним грекам, но широкое распространение оно
        получило в эпоху Ренессанса у итальянцев.
        <br></br><br></br>
        <strong>Энкаустика</strong>. Техника заключается в нанесении расплавленной на воске краске либо
        масляной краски на сухую штукатурку. Также сюда включается технология рисунка,
        нанесенного сперва на деревянную панель либо холст, с последующим наклеиванием на
        стену.
        <br></br><br></br>
        <strong>Альфрейная роспись</strong>. Работу по готовым трафаретам и шаблонам по высохшему грунту, и
        имитирующую различные способы и приёмы отделки внутренних помещений:
        <strong>полихромная альфрейная роспись</strong> — с флористическими мотивами, переплетением
        листьев, цветов, геральдической символикой, золочением;
        <br></br><br></br>
         <strong>монохром</strong> - все переливы и оттенки одного цвета;
         <br></br><br></br>
         <strong>гризайль</strong> - имитация архитектурных деталей, лепнины;<br></br><br></br>
        <strong>Обманки</strong> ( или <strong>тромплей</strong>). Рисунки, выполненные в данной технике, способны визуально
        преображать и искажать пространство, исправлять геометрию помещений, недостатки
        планировки и архитектурного решения.
        <br></br><br></br>
        <strong>2.Современные техники:</strong><br></br><br></br>
       <strong>Роспись акрилом</strong>. Такая краска легко наносится и быстро сохнет, образует ровную и
        прочную плёнку практически на любой поверхности, не смывается водой, не выгорает на
        солнце. Является самым удобным и популярным материалом для росписи используемом
        сейчас.<br></br><br></br>
        <strong>Роспись светящимися красками</strong>. В данной технике такие современные материалы как
        краски с эффектом перламутра, светонакопительные, флуоресцентные краски, которые
        светятся в темноте.<br></br><br></br>
        <strong>Аэрография</strong>. Наносится при помощи специального аэрозоля. Изображения получаются
        долговечными, пластичными и объемными.<br></br><br></br>
        <strong>Граффити</strong>. Используется преимущественно для внешнего пространства - заборов, стен
        зданий. Изображения наносятся аэрозольными баллончиками, заправленными краской.<br></br><br></br>
        <strong>3D-роспись</strong>. С некоторых ракурсов создается ощущение что 2D изображение стало
        объемным<br></br><br></br>
        <strong>Трафаретная роспись</strong>. Благодаря заранее распечатанным и вырезанным трафаретам можно
        значительно увеличить скорость нанесения изображения на стены, но подходит она
        только для некоторых стилей рисунков.<br></br><br></br><br></br>
        <strong><u>ОБЩИЕ РЕКОМЕНДАЦИИ ПО ПОДБОРУ СТИЛЯ РОСПИСИ:</u></strong><br></br><br></br>
        <strong>Классический стиль</strong> - изысканная ручная роспись или гравюры.<br></br><br></br>
        <strong>Шебби шик</strong> и <strong>Бохо шик</strong> - патинирование и старение мебели, художественная роспись стен и
        потолка орнаментами.<br></br><br></br>
        <strong>Ар-деко</strong> и <strong>Ампир</strong> - живопись на стене.<br></br><br></br>
        <strong>Фьюжн, неопластицизм</strong> или <strong>поп-арт</strong> – графика в интерьере с использованием трафаретных
        рисунков.<br></br><br></br>
        <strong>Лофт</strong> - разрисовка стен, с предварительным старением клинкерной плитки или художественной
        покраской стен с имитацией фактуры бетона или ржавчины.<br></br><br></br>
        <strong>Готика</strong> - градиентная покраска и тонировка скульптур, роспись барельефа.<br></br><br></br>
        <strong>Марокканский стиль</strong> - Потрясающие узоры на стенах или плитка ручной работы.<br></br><br></br>
        <strong>Для деревянной дачи или коттеджа</strong> – архангельская или хохломская роспись и орнаменты.<br></br><br></br>
        </div>

        this.livingRoomText = <div>
            Гостиные комнаты - главные по критерию «произвести впечатление интерьером» 
            и в тоже время «быть уютной для всей семьи», т.к. именно здесь вы собираетесь всей семьей, 
            встречаетесь с гостями, отмечаете радостные и праздничные события, можете просто посидеть за чашкой кофе, пообщаться и т.д.
            <br></br><br></br>
            Спальня - то место, где человек будет готовиться ко сну и оно должно успокоить наш ум от событий
            пережитых за день и наполнить его вдохновляющими мечтами, мысли о которых будут
            развиваться в нашем бессознательном во время сна а они в свою очередь будут наполнять
            позитивом и энергией к утру.
            </div>
        this.kitchenArtText = <div>Часто берут на себя функцию гостиных и 
            так же являются местом, где все члены семьи собираются вместе 
            по несколько раз за день. Это очаги семейного уюта, 
            поэтому оформление интерьера кухни должно быть продумано до мелочей, 
            чтобы создавать мир и гармонию в семейном коллективе, а для хозяйки кухни 
            дарить творческое настроение для создания кулинарных шедевров для своих близких.</div>
        this.childrensRoomText = <div>Развитие ребенка во многом зависит от окружающей его обстановки,
             поэтому важно создать интерьер комнаты таким образом чтобы он мог получать вдохновение, 
             находясь в своем маленьком владении.</div>
        this.bathRoomText = <div>
            Комнаты, где человек бывает наедине с собой чаще чем в каких-то других помещениях своего
            жилища. Отличной идеей будет создать на стенах рисунок, на который можно смотреть, при этом
            самому погружаясь в свои мысли. Самой популярной тематикой для этого типа помещений стал
            «Подводный мир и его обитатели».</div>
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
                            text = {this.textAboutPaint}
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
                            <br></br>
                            Удобное оформление по категориям может помочь вам определиться<br></br> с выбором стиля
                            и изображения для реализации своей задумки.<br></br><br></br>
                            <i><u>Тут собраны не только наши работы!</u></i>
                            </span>
                    </div>
                    <div className="interiors-example-block">
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

                    <LittleHideBlock
                        className="little-block-wrapper"
                        text = {this.livingRoomText}
                    />
                    
                    <div className="interiors-example-block1">
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

                    <LittleHideBlock
                        className="little-block-wrapper"
                        text = {this.kitchenArtText}
                    />


                    <div className="interiors-example-block1">
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

                    <LittleHideBlock
                        className="little-block-wrapper"
                        text = {this.childrensRoomText}
                    />

                    <div className="interiors-example-block2">
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

                    <LittleHideBlock
                        className="little-block-wrapper1"
                        text = {this.bathRoomText}
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
                                    text = "ЗАКАЗАТЬ ЭСКИЗ"
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