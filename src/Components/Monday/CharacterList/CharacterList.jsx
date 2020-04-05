import React from 'react';
import style from './CharacterList.module.css';
import CharacterItem from "./CharacterItem/CharacterItem";


const CharacterList = () => {

    let characterList = [
        {id: 1, character: "Оптимист"},
        {id: 2, character: "Авантюрист"},
        {id: 3, character: "Рационалист"},
        {id: 4, character: "Альтруист"}
    ];

    let filterValue = "Авантюрист";

    let characterElements = characterList.map(ch => {
        return <CharacterItem character={ch.character} filterValue={filterValue} key={ch.id}/>
    });

    return (
        <div className={style.characterListWrapper}>
            {characterElements}
        </div>
    )
};

export default CharacterList;