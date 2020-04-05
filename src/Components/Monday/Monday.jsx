import React from 'react';
import Header from "./Header/Header";
import MessageCloud from "./MessageCloud/MessageCloud";
import CharacterList from "./CharacterList/CharacterList";
import HelloCounter from "./HelloCounter/HelloCounter";


function Monday() {
    return (
        <div>
            <Header/>
            <MessageCloud/>
            <CharacterList/>
            <HelloCounter/>
        </div>
    );
}

export default Monday;


