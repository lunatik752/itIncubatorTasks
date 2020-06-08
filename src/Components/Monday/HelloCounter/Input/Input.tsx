import React, { ChangeEvent, KeyboardEvent } from 'react';
import style from './Input.module.css'


type PropsType = {
    changeInputText: (newText: string)=>void
    onKeyPress: ()=>void
    error: boolean
    placeholderValue: string
    inputText: string
}

const Input = (props: PropsType) => {


    let onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeInputText(e.currentTarget.value)
    };

    let onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            props.onKeyPress()
        }
    };

    return (
        <div>
            <input className={`${style.input} ${props.error ? style.error : ''}`}
                   type="text"
                   placeholder={props.placeholderValue}
                   onChange={onInputChange}
                   onKeyPress={onKeyPress}
                   value={props.inputText}
            />
        </div>
    )
};


export default Input;