import React from 'react';

import style from './Wednesday.module.css'
import ThemeSettings from "./ThemeSettings/ThemeSettings";


function Tuesday() {
    return (
        <div className={style.wednesdayWrapper}>
            <ThemeSettings/>
        </div>
    );
}

export default Tuesday;


