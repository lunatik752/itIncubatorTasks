import React from 'react';
import style from './Counter.module.css'



const Counter = (props) => {

    return (
        <div className={style.counter}>
            <span>{props.counterValue}</span>
        </div>
    )
};


export default Counter;