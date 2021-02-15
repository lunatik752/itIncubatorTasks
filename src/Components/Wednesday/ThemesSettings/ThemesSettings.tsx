import React from "react";
import styles from './ThemesSettings.module.css'
import Theme from "./Theme/Theme";
import {ThemeType} from "../../../types/entities";

type OwnPropsType = {
    themes: Array<ThemeType>
    style: string
    setTheme: (theme: string) => void
}

const ThemesSettings = (props: OwnPropsType) => {


    //test comment from branch  test3
    //test comment from branch  test4


    const pageTheme = styles.themesSettingsWrapper + ' ' + styles[props.style];

    const onChangeClick = (theme: string) => {
        props.setTheme(theme);
    }


    const themeItem = props.themes.map(theme => <Theme key={theme.id}
                                                       title={theme.title}
                                                       name={'theme'}
                                                       onChangeClick={onChangeClick}
                                                       style={props.style}

    />)

    return (

        <div className={pageTheme}>
            <h2>Choose a theme:</h2>
            <div className={styles.themesSettings}>
                {themeItem}
            </div>
        </div>
    );
}


export default ThemesSettings;
