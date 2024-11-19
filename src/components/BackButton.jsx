import React from "react";
import './BackButton.css'
import { BackIcon } from "./icons";

function BackButton() {
    return (
        <a href="" className="back-button" style={{marginTop: '60px'}}>
            <BackIcon />
        </a>
    )
}

export default BackButton;