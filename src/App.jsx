import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import MessageCloud from "./Components/MessageCloud/MessageCloud";



function App() {
    return (
        <div className='App-wrapper'>
            <Header/>
            <MessageCloud/>
        </div>
    );
}

export default App;
