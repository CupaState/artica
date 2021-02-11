import React, { Component } from 'react';
import '../css/Dials.css';
import dialFiz from '../assets/dials/fiz.pdf';
import dialUr from '../assets/dials/ur.pdf';

class Dials extends Component{
    constructor(props)
    {
        super();

    }

    render()
    {
        return(
            <>
                <div>
                    <div className="dial-header-div">
                        <span className="dial-header">СКАЧАТЬ ДОГОВОР</span>
                    </div>
                    <div className="dial-fiz-div">
                        <span className="dial-fiz">ДЛЯ ФИЗИЧЕСКИХ ЛИЦ:</span>
                    </div>
                    <div className="dial-button-div">
                        <a
                            download
                            href={ dialFiz }
                            className="dial-button"
                        >СКАЧАТЬ</a>
                    </div>

                    <div className="dial-ur-div">
                        <span className="dial-ur">ДЛЯ ЮРИДИЧЕСКИХ ЛИЦ:</span>
                    </div>
                    <div className="dial-button-div">
                        <a
                            download
                            href={ dialUr }
                            className="dial-button"
                        >СКАЧАТЬ</a>
                    </div>
                </div>

            </>
        );
    }
}

export default Dials;