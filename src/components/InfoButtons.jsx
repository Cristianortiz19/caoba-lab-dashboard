import React from "react";
import './InfoButtons.css'

function InfoButtons() {
    return(
        <nav className="info-buttons" style={{fontSize:'16px', fontWeight: '400'}}>
            <button style={{backgroundColor: 'white', borderRadius: '4px 4px 0px 0px', border: '1px solid #DEE2E6'}}>Acerca de</button>
            <button style={{color: '#2A318A'}}>Archivos (3)</button>
            <button style={{color: '#2A318A'}}>Comentarios (57)</button>
        </nav>
    )
}

export default InfoButtons;