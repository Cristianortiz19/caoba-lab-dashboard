import React from "react";
import './Aside.css'
import BackButton from "./BackButton";
import AsideButton from "./AsideButton";
import { ProfileIcon, ModelsIcon, DatasetIcon, CreditsIcon, AcademyIcon, ExitIcon} from "./icons";
import ExitButton from "./ExitButton";

function Aside() {
    return (
        <aside>
            <div>
                <BackButton />
                <figure><img src="./caobalab_logo.webp" alt="" /></figure>
                <nav className="aside-nav-bar">
                    <AsideButton icon={<ProfileIcon />} text="Mi perfil" status={false} />
                    <AsideButton icon={<ModelsIcon />} text="Modelos" status={true} />
                    <AsideButton icon={<DatasetIcon />} text="Datasets" status={false} />
                    <AsideButton icon={<CreditsIcon />} text="Créditos" status={false} />
                    <AsideButton icon={<AcademyIcon />} text="Academia" status={false} />
                </nav>
            </div>
            <ExitButton icon={<ExitIcon />} text="Salir" />
        </aside>
    )
}

export default Aside;