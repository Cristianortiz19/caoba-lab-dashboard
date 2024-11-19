import React from "react";
import InfoButtons from "./InfoButtons";

function Info() {
    return(
        <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
            <InfoButtons />
            <p style={{fontSize: '13px', color: '#575757', width: '450px'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit 
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
            </p>
        </div>
    )
}

export default Info;