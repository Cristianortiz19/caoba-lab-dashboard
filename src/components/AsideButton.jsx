import React from "react";

function AsideButton({ icon, text, status }) {
    return (
        <a href="" className="aside-button" style={{display: "flex", gap: "16px", alignItems: "center"}}>
            {icon}
            {status === true && <p style={{color: "#2A318A", fontSize: "20px", fontWeight: "400"}}>{text}</p>}
            {status === false && <p style={{color: "#2B2B2B", fontSize: "20px", fontWeight: "400"}}>{text}</p>}
        </a>
    )
}

export default AsideButton;