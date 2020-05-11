import React from "react";
import style from './ThemeSettings.module.css'


const ThemeSettings = () => {
    return (
        <div className={style.themeSettingsWrapper}>
            <h2>Choose a theme:</h2>
            <div className={style.themSelector}>
                <input type="radio"/>
                <label> standard </label>
            </div>
            <div  >
                <input type="radio"/>
                <label> standard </label>
            </div>
        </div>
    );
}

export default ThemeSettings