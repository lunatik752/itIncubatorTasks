import React from "react";
import style from './Theme.module.css'

const Theme = (props) => {
    const onRadioInputCheck = (e) => {
        props.onChangeClick(e.currentTarget.value);
    }
    return (
        <div className={style.themSelector}>
                <input type='radio'
                       checked={props.style === props.title}
                       name={props.name}
                       onChange={onRadioInputCheck}
                       value={props.title}/>
                <label>{props.title}</label>
        </div>
    );
}

export default Theme;