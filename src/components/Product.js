import React from "react";


export default function Product(props) {
    return (
        <div className="beerBox">
            <div>
                <img src={props.img} className="imgsize"/>
            </div>
            <div>
                <h3>
                    {props.children}
                </h3>
            </div>
        </div>
    )
}
