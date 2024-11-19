import React from "react";
import { InfoIcon, GlobeIcon, LanguageIcon, GraduationIcon, MoneyIcon } from "./icons";
import './DetailCard.css'

function DetailCard() {
    return (
        <div className="detail-card">
            <h4>Detalle</h4>
            <hr style={{color: '#212529'}} />
            <nav className="detail-card-content">
                <div className="detail-card-nav">
                    <span>
                        <InfoIcon></InfoIcon>
                        <p><strong>Última actualización:</strong> 20/01/2024</p>
                    </span>
                    <span>
                        <GlobeIcon></GlobeIcon>
                        <p><strong>Idioma soportado:</strong> Español</p>
                    </span>
                    <span>
                        <LanguageIcon></LanguageIcon>
                        <p><strong>Lenguaje:</strong> Python</p>
                    </span>
                    <span>
                        <GraduationIcon></GraduationIcon>
                        <p><strong>Universidad</strong> Javeriana de Bogotá</p>
                    </span>
                </div>
                <span className="detail-card-footer">
                    <p>Costo de uso</p>
                    <div>
                        <MoneyIcon />
                        <p>2</p>
                    </div>
            </span>
            </nav>
        </div>
    )
}

export default DetailCard;