import React from 'react';
import style from './NameInput.module.css'



const NameInput = (props) => {

    return (
        <div>
            <input className={style.nameInput}
                   ref={props.newName}
                   type="text"
                   placeholder="Введите имя"/>
        </div>
    )
};


export default NameInput;