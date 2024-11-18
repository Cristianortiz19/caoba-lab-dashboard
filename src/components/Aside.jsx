import React from "react";
import './Aside.css'
import BackButton from "./BackButton";

function Aside() {
    return (
        <aside>
            <BackButton />
            <figure><img src="./caobalab_logo.webp" alt="" /></figure>
        </aside>
    )
}

export default Aside;