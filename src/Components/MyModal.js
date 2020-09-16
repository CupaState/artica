import React, { Component } from 'react';
import { Modal, Form, Row, Col } from "react-bootstrap";
import ButtonUI from "./Button";
import closeButton from "../assets/icons/closeButton.svg"
import "../css/Modal.css"
import bsCustomFileInput from 'bs-custom-file-input';


export default class MyModal extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            show: false,
        };
    }
    handleClose = () => { this.setState({show: !this.state.show})};
    componentWillReceiveProps(value)
    {
        this.setState({show: value.isOpen});
    }

    render()
    {
        return (
            <Modal show = {this.state.show} onHide = {this.handleClose}>
                <Modal.Body>
                    <img fluid
                        src={closeButton}
                        className = "close-modal-btn"
                        onClick = {this.handleClose}
                    />
                    <Form action="telegram.php" method="POST" >
                        <Row className="row-modal-content">
                            <Col>
                                <Form.Control type="text" placeholder="Введите имя" />
                            </Col>
                            <Col>
                                <Form.Control type="text" placeholder="Введите телефон"/>
                            </Col>
                            <Col className = "col-modal-btn">
                                <ButtonUI
                                classNameButton="order-modal-btn"
                                text = "Заказать"
                                onClick = {this.handleClose}
                                type="submit"
                                />
                            </Col>
                        </Row>
                        <Row className="row-low-modal">
                        <div className="custom-file">
                        <div className="custom-text">Прикрепить фото</div>
                            <input type="file" id="upload"/>
                        </div>
                            <Form.Control className="task-modal-form" placeholder="Опишите свою задачу"></Form.Control>
                        </Row>
                    </Form>
                </Modal.Body>
            </Modal>
        )
    }

    
}
