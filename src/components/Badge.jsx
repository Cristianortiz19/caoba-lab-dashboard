import React from "react";

function Badge({ text }) {
    return(
        <span style={{ backgroundColor: '#5CC9E3', color: '#FFF', fontSize: '16px', padding: '6px 12px', borderRadius: '100px'}}>{text}</span>
    )
}

export default Badge;