import React from 'react';
import style from './CharacterList.module.css';
import CharacterItem from "./CharacterItem/CharacterItem";


type CharacterType = {
    id: number
    character: string
}

const CharacterList = () => {

    let charactersList: Array<CharacterType> = [
        {id: 1, character: "Оптимист"},
        {id: 2, character: "Авантюрист"},
        {id: 3, character: "Рационалист"},
        {id: 4, character: "Альтруист"}
    ];

    let filterValue: string = "Авантюрист";

    let characterElements = charactersList.map(ch => {
        return <CharacterItem character={ch.character} filterValue={filterValue} key={ch.id}/>
    });

    return (
        <div className={style.characterListWrapper}>
            {characterElements}
        </div>
    )
};

export default CharacterList;