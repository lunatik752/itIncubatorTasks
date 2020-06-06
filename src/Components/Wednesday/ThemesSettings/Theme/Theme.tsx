import React, {ChangeEvent} from "react";
import style from './Theme.module.css'

type OwnPropsType = {
    key: number
    title: string
    name: string
    onChangeClick: (theme: string)=>void
    style: string
}


const Theme = (props: OwnPropsType) => {
    const onRadioInputCheck = (e: ChangeEvent<HTMLInputElement>) => {
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