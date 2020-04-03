import React from 'react';
import style from './Button.module.css'



const Button = (props) => {

    return (
        <div>
            <button className={style.button}
                    onClick={props.addName}
            >{props.nameButton}
            </button>
        </div>
    )
};


export default Button;