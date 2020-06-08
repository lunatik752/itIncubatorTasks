import React from 'react';
import style from './Counter.module.css'

type PropsType = {
    counterValue: number
}

const Counter = (props: PropsType) => {

    return (
        <div className={style.counter}>
            <span>{props.counterValue}</span>
        </div>
    )
};


export default Counter;