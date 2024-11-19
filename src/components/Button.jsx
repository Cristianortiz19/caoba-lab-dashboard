import React from "react";
import './Button.css'

function Button({ text, type }) {
    return (
        <>  
            {type === 'Primary' && <button className="button-primary" style={{color: 'white', fontSize: "16px", fontWeight: '400', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', border: 'none'}}>{text}</button>}
            {type === 'Secondary' && <button className="button-secondary" style={{color: 'white', fontSize: "16px", fontWeight: '400', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', border: 'none'}}>{text}</button>}
        </>
    )
}

export default Button;