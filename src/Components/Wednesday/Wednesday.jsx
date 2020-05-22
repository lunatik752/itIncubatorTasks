import React from 'react';

import style from './Wednesday.module.css'
import SendingPostRequest from "./SendingPostRequest/SendingPostRequest";
import {connect} from "react-redux";
import {setTheme} from "../../redux/settingsReducer";
import ThemesSettings from "./ThemesSettings/ThemesSettings";


function Wednesday(props) {
    return (
        <div className={style.wednesdayWrapper}>
            <ThemesSettings themes={props.themes}
                            style={props.style}
                            setTheme={props.setTheme}
            />
            <SendingPostRequest  style={props.style}/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        themes: state.settings.themes,
        style: state.settings.style,
    }
}

const ConnectedWednesday = connect(mapStateToProps, {setTheme})(Wednesday);
export default ConnectedWednesday;
