import React from 'react';
import Header from "./Header/Header";
import MessageCloud from "./MessageCloud/MessageCloud";
import CharacterList from "./CharacterList/CharacterList";
import HelloCounter from "./HelloCounter/HelloCounter";
import style from './Monday.module.css'


function Monday() {
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


