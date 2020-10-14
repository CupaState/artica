import React, { useState } from 'react';
import { Modal, Form, Row, Col } from "react-bootstrap";
import ButtonUI from "./Button";
import closeButton from "../assets/icons/closeButton.svg";
import "../css/Modal.css";
import PhoneInput, { isPossiblePhoneNumber } from 'react-phone-number-input';

export default function MyModal(props)
{

        const show = false;

        let buttonAddClass = "order-modal-btn";
        let inputAddClass = "";
        let disabled = true

        const [value, setValue] = useState();

        const phoneNumber = isPossiblePhoneNumber(value);

        if(phoneNumber)
        {
            inputAddClass = "ok";
            disabled = false;
        }

        const checkInput = function (value)
        {
            if(!isPossiblePhoneNumber(value))
            {
                inputAddClass="error";
                buttonAddClass= "order-modal-error"
                disabled = true;
            }
            else if(inputAddClass === "")
            {
                inputAddClass="";
            }
            else
            {
                inputAddClass="ok";
                disabled = false;
            }
        }

        checkInput(value);

            return (
                <Modal className="modal-wrapper" show = {props.isOpen} onHide = {()=>{props.onClose(show)}}>
                    <Modal.Body>
                        <img
                            src={closeButton}
                            alt="закрыть"
                            className = "close-modal-btn"
                            onClick = {()=>{props.onClose(show)}}
                        />
                        <Form action="telegram.php" method="POST" >
                            <Row className="row-modal-content">
                                <Col>
                                    <Form.Control type="text" placeholder="Введите имя" />
                                </Col>
                                <Col>
                                    <PhoneInput
                                        placeholder="Введите телефон*"
                                        international
                                        value={value}
                                        onChange={setValue}
                                        className={inputAddClass}
                                    />
                                </Col>
                                <Col className = "col-modal-btn">
                                    <ButtonUI
                                        classNameButton={buttonAddClass}
                                        text = "Заказать"
                                        type="submit"
                                        disabled={disabled}
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
