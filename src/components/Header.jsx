import React from "react";
import { MoneyIcon, SearchIcon } from "./icons";
import Button from "./Button";
import './Header.css'

function Header() {
    return (
        <header>
            <div></div>
            <nav style={{display: 'flex', gap: '30px'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
                    <MoneyIcon />
                    <p>Créditos disponibles: 100</p>
                </div>
                <Button text="Recargar" type="Primary" />
            </nav>
            <span style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
                <a href=""><SearchIcon /></a>
                <a href=""><img src="./avatar.webp" alt="" /></a>
            </span>
        </header>
    )
}

export default Header;