import React from 'react';
import MessageCloud from "./MessageCloud/MessageCloud";
import CharacterList from "./CharacterList/CharacterList";
import HelloCounter from "./HelloCounter/HelloCounter";
import style from './Monday.module.css'
import Header from "./Header/Header";


const Monday = () => {
    return (
        <div className={style.mondayWrapper}>
            <Header/>
            <MessageCloud/>
            <CharacterList/>
            <HelloCounter/>
        </div>
    );
}

export default Monday;


