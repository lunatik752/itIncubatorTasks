import React from 'react';
import style from './NamesList.module.css'
import NameListItem from "./NameListIItem/NameListItem";



const NamesList = (props) => {

    let namesListElements = props.namesList.map(n => {
        return <NameListItem name={n.name} key={n.id} />
    });

    return (
        <div className={style.namesListWrapper}>
            {namesListElements}
        </div>
    )
};


export default NamesList;