import React from "react";

function ExitButton({ icon, text}) {
    return (
        <a href="" className="aside-button" style={{display: "flex", gap: "16px", alignItems: "center", border: "2px solid #2A318A", width: "115px", justifyContent: "center", padding: "6px 10px", borderRadius: "6px"}}>
            {icon}
            <p style={{color: "#2A318A", fontSize: "14px", fontWeight: "600"}}>{text}</p>
        </a>
    )
}

export default ExitButton;