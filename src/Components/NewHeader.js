import React, { Component } from 'react';
import "../css/NewHeader.css";
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
import captures from '../assets/main/captures.png';

import Home from '../Pages/Home';
import About from "../Pages/About";
import Contacts from "../Pages/Contacts";
import Airbrushing from "../Pages/Airbrushing";
import Interiors from "../Pages/Interiors";
import Restoration from "../Pages/Restoration";
import Facades from "../Pages/Facades";

import DropDownMenu from "./DropDownMenu";

export default class NewHeader extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            isShowMenu: false,
        };

        this.closeMenu = this.closeMenu.bind(this);
    }

    closeMenu(isShowMenu)
    {
        this.setState({isShowMenu: isShowMenu})
    }

    render() {
        return (
            <>
                <div className="header-wrapper">
                    <img
                        src={captures}
                        className="header-captures"
                        onClick={() => {this.setState({isShowMenu: !this.state.isShowMenu})}}
                    />
                    <span
                        className="header-mail"
                        onClick={() => {window.location='mailto:info@art-tiger-studio.ru?subject='+window.location.href;}}
                    >
                        info@art-tiger-studio.ru
                    </span>
                    <a className="header-logo"
                        href="/"
                        target="_blank"
                    >
                        <img
                            src={logo}
                            className="header-logo-img"
                        />
                    </a>
                    
                    <span
                        className="header-phone"
                        onClick={ () => {window.open("tel:+79779613936")}}
                    >
                        +7 (977) 961-39-36
                    </span>
                </div>

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

                <DropDownMenu isShowMenu={this.state.isShowMenu} closeMenu={this.closeMenu}/>
            </>
        )
    }
}
