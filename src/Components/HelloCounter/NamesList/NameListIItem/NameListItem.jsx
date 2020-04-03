import React from 'react';
import style from './NameListItem.module.css';


const NameListItem = (props) => {


    return (
        <div className={style.characterItem}>
            <span>{props.name}</span>
        </div>
    )
};

export default NameListItem;