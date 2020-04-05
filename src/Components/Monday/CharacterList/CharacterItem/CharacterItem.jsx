import React from 'react';
import style from './CharacterItem.module.css';


const CharacterItem = (props) => {

    let classCharacterItemRed = props.filterValue === props.character ? style.characterItemRed : "";

    return (
        <div className={style.characterItem + " " + classCharacterItemRed} >
            <span>{props.character}</span>
        </div>
    )
};

export default CharacterItem;