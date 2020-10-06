import React, { Component } from 'react';
import { Modal, Form, Row, Col } from "react-bootstrap";
import ButtonUI from "./Button";
import closeButton from "../assets/icons/closeButton.svg"
import "../css/Modal.css"

export default class MyModal extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        const show = false;
            return (
                <Modal className="modal-wrapper" show = {this.props.isOpen} onHide = {()=>{this.props.onClose(show)}}>
                    <Modal.Body>
                        <img fluid
                            src={closeButton}
                            className = "close-modal-btn"
                            onClick = {()=>{this.props.onClose(show)}}
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
            );
    }

    
}
