import React from "react";

function Button({ text, type }) {
    return (
        <>  
            {type === 'Primary' && <button style={{color: 'white', backgroundColor: "#2A318A", fontSize: "16px", fontWeight: '400', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer'}}>{text}</button>}
            {type === 'Secondary' && <button style={{color: 'white', backgroundColor: "#2A318A", fontSize: "16px", fontWeight: '400', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer'}}>{text}</button>}
        </>
    )
}

export default Button;