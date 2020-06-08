import React from 'react';
import style from './NameListItem.module.css';

type PropsType = {
    name: string
}

const NameListItem = (props: PropsType) => {


    return (
        <div className={style.characterItem}>
            <span>{props.name}</span>
        </div>
    )
};

export default NameListItem;