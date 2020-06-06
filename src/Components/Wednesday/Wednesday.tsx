import React from 'react';
import style from './Wednesday.module.css'
import SendingPostRequest from "./SendingPostRequest/SendingPostRequest";
import {connect} from "react-redux";
import {setTheme} from "../../redux/settingsReducer";
import ThemesSettings from "./ThemesSettings/ThemesSettings";
import {ThemeType} from "../../types/entities";
import {AppStateType} from "../../redux/store";



type MapStatePropsType = {
    themes: Array<ThemeType>
    style: string
}

type MapDispatchPropsType = {
    setTheme: (theme: string) => void;
}

type PropsType = MapDispatchPropsType & MapStatePropsType

const Wednesday = (props: PropsType) => {
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

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        themes: state.settings.themes,
        style: state.settings.style,
    }
}

const ConnectedWednesday = connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {setTheme})(Wednesday);
export default ConnectedWednesday;
