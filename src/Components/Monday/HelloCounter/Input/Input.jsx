import React from 'react';
import style from './Input.module.css'


const Input = (props) => {


    let onInputChange = (e) => {
        props.changeInputText(e.currentTarget.value)
    };

    let onKeyPress = (e) => {
        if (e.key === "Enter") {
            props.onKeyPress()
        }
    };

    return (
        <div>
            <input className={props.state.error ? style.error : style.nameInput}
                   type="text"
                   placeholder={props.state.placeholderValue}
                   onChange={onInputChange}
                   onKeyPress={onKeyPress}
                   value={props.state.inputText}
            />

        </div>
    )
};


export default Input;