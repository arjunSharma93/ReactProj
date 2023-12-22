import React from "react";


export default function FunctionComponent(props){

    const red = () => {
        alert("Red Function called");
    }

    return (
        <div>
            <h1 onClick={red}>{props.text}</h1>
        </div>
    )
}