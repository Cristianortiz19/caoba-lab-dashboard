import React from "react";

function Button({ text, type }) {
    return (
        <>  
            {type === 'Primary' && <button style={{backgroundColor: "#2A318A", fontSize: "16px", fontWeight: '400', padding: '8px 16px', borderRadius: '4px'}}>{text}</button>}
            {type === 'Secondary' && <button style={{backgroundColor: "#2A318A", fontSize: "16px", fontWeight: '400', padding: '8px 16px', borderRadius: '4px'}}>{text}</button>}
        </>
    )
}

export default Button;