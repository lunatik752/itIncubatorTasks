import React from "react";
import styles from './ThemesSettings.module.css'
import {connect} from "react-redux";
import Theme from "./Theme/Theme";
import {setTheme} from "../../../redux/settingsReducer";


const ThemesSettings = (props) => {

    const pageTheme = styles.themesSettingsWrapper + ' ' + styles[props.style];

    const onChangeClick = (theme) => {
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
            <div className='themesSettings'>
                {themeItem}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {

    return {
        themes: state.settings.themes,
        style: state.settings.style
    }
}


const ConnectedThemeSettings = connect(mapStateToProps, {setTheme})(ThemesSettings);
export default ConnectedThemeSettings;
