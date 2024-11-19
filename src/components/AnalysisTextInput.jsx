import React from "react";
import { TextIcon } from "./icons";

function AnalysisTextInput() {
    return(
        <section>
            <span>
                <TextIcon />
                <h3>Ingresa el texto o descripción para analizar</h3>
            </span>
            <div>
                <p>Estás a punto de probar el modelo <strong>Apnea del sueño.</strong> Esta acción te costará 2 créditos</p>
            </div>
        </section>
    )
}

export default AnalysisTextInput;