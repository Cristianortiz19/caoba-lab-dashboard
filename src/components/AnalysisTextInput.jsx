import React from "react";
import { TextIcon, MoneyIcon } from "./icons";
import Button from "./Button";
import './AnalysisTextInput.css'

function AnalysisTextInput() {
    return(
        <section className="analysis-text-input">
            <span className="header-analysis-text-input">
                <TextIcon />
                <h3>Ingresa el texto o descripción para analizar</h3>
            </span>
            <hr />
            <div className="content-analysis-text-input">
                <p style={{color: '#575757', fontSize: '16px'}}>Estás a punto de probar el modelo <strong>Apnea del sueño.</strong> Esta acción te costará 2 créditos</p>
                <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <h3 style={{fontSize: '20px', fontWeight: '500'}}>Costo de uso</h3>
                        <span style={{display: 'flex', gap: '5px'}}>
                            <MoneyIcon />
                            <p>2 créditos</p>
                        </span>
                    </div>
                    <textarea style={{padding: '10px', height: '80px', fontSize: '16px', border: '1px solid #6C757D', borderRadius: '5px'}} placeholder="Autosize heigh based on content lines" name="" id=""></textarea>
                </div>
            </div>
            <hr />
            <div style={{padding:'16px', display: 'flex', justifyContent: 'end', gap: '8px'}}>
                <Button text="Simular" type="Secondary" />
                <Button text="Ejecutar predicción" type="Primary" />
            </div>
        </section>
    )
}

export default AnalysisTextInput;