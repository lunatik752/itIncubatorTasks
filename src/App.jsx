import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import MessageCloud from "./Components/MessageCloud/MessageCloud";
import CharacterList from "./Components/CharacterList/CharacterList";
import HelloCounter from "./Components/HelloCounter/HelloCounter";



function App() {
    return (
        <div className='App-wrapper'>
            <Header/>
            <MessageCloud/>
            <CharacterList/>
            <HelloCounter/>
        </div>
    );
}

export default App;


