import React from 'react';
import "../css/Gallery.css";


export default function MapImgArray(props) {
    const newImgArr = props.ImageArr;
    let index = 0;
    const items = newImgArr.map((img) =>
    {
        return(
            <img
                src={img}
                className="gallery-component-img"
            />
        );
    });
    
    return (<div>{items}</div>)
}
