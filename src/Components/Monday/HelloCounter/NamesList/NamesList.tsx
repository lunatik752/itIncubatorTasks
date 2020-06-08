import React from 'react';
import style from './NamesList.module.css'
import NameListItem from "./NameListIItem/NameListItem";
import { NameType } from '../HelloCounter';

type PropsType = {
    namesList: Array<NameType>
}

const NamesList = (props: PropsType) => {

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