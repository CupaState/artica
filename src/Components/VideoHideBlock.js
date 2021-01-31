import React, { Component } from 'react';
import "../css/VideoHideBlock.css";

export default class VideoHideBlock extends Component {
    render() {
        const isUncover = this.props.isUncover;
        return (
            <div className="videoblock-wrapper">
                {isUncover &&
                <div>
                    <iframe
                        className="videoblock-item"
                        width="560" height="315"
                        title="видеоотзыв"
                        src="https://www.youtube.com/embed/JOC6jK8e1vY"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen={true}
                        webkitallowfullscreen="true"
                        mozallowfullscreen="true">
                    </iframe>

                    <iframe
                        className="videoblock-item"
                        width="560" height="315"
                        title="видеоотзыв"
                        src="https://www.youtube.com/embed/KupMlFfIBc8"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen={true}
                        webkitallowfullscreen="true"
                        mozallowfullscreen="true">
                    </iframe>

                    <iframe
                        className="videoblock-item"
                        width="560" height="315"
                        title="видеоотзыв"
                        src="https://www.youtube.com/embed/SHDbAS_eUyU"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen={true}
                        webkitallowfullscreen="true"
                        mozallowfullscreen="true">
                    </iframe>

                    <iframe
                        className="videoblock-item"
                        width="560" height="315"
                        title="видеоотзыв"
                        src="https://www.youtube.com/embed/rt7nNaeheBw"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen = {true}
                        webkitallowfullscreen="true"
                        mozallowfullscreen="true">
                    </iframe>
                </div>
                }
            </div>
        )
    }
}
