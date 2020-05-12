import React from 'react';

import style from './Wednesday.module.css'
import ConnectedThemeSettings from "./ThemesSettings/ThemesSettings";


function Tuesday() {
    return (
        <div className={style.wednesdayWrapper}>
            <ConnectedThemeSettings/>
        </div>
    );
}

export default Tuesday;


