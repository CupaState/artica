import React, { Component } from 'react';
import { 
    Navbar,
    Container,
    FormControl,
    Nav,
    Form,
    NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import logo from "../assets/logo.png";
import Phone from "../assets/main/phone.png";
import Mail from "../assets/main/mail.png";


import Home from '../Pages/Home';
import About from "../Pages/About";
import Contacts from "../Pages/Contacts";
import Airbrushing from "../Pages/Airbrushing";
import Interiors from "../Pages/Interiors";
import Restoration from "../Pages/Restoration";
import Facades from "../Pages/Facades";


export default class Header extends Component {
    render() {
        return (
            <>
            <Navbar className="primary" collapseOnSelect expand="sm" bg="black" expand="false">
                <Container fluid>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <span
                        src={Mail}
                        className="mailText"
                        href="mail:info@art-tiger-studio.ru"
                        onClick = { () => {window.location='mailto:info@art-tiger-studio.ru?subject='+window.location.href;}}
                        alt="e-mail"
                        >info@art-tiger-studio.ru</span>
                    <Navbar.Brand href="/" >
                        <img
                            src={logo}
                            height="44"
                            width="226"
                            className="d-inline-block align-top logo"
                            alt="logo"
                        />
                        <img
                        src={Phone}
                        className="phoneText"
                        onClick={ () => {window.open("tel:+79779613936")}}
                        />
                        
                    </Navbar.Brand>
                    <Navbar.Collapse id="responsive-navbar-nav" className="arc-dark">
                        <Nav className="mr-auto arc-dark">
                            <Nav.Link href="/">Главная</Nav.Link>
                            <Nav.Link href="/about">Как мы работаем</Nav.Link>
                            <Nav.Link href="/contacts">Контакты</Nav.Link>
                            <Nav.Link href="/airbrushing">Аэрография</Nav.Link>
                            <Nav.Link href="/interiors">Интерьеры</Nav.Link>
                            <Nav.Link href="/restoration">Реставрация</Nav.Link>
                            <Nav.Link href="/facades">Фасады</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/contacts" component={Contacts}/>
                <Route exact path="/airbrushing" component={Airbrushing}/>
                <Route exact path="/interiors" component={Interiors}/>
                <Route exact path="/restoration" component={Restoration}/>
                <Route exact path="/facades" component={Facades}/>
            </Switch>
            </Router>
            </>
            
        );
    }
}
