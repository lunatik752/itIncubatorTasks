import React from 'react';
import style from './CharacterItem.module.css';

type PropsType ={
    filterValue: string
    character: string
}

const CharacterItem = (props: PropsType) => {

    let classCharacterItemRed = props.filterValue === props.character ? style.characterItemRed : "";

    return (
        <div className={style.characterItem + " " + classCharacterItemRed} >
            <span>{props.character}</span>
        </div>
    )
};

export default CharacterItem;