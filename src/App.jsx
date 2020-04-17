import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Monday from "./Components/Monday/Monday";
import Tuesday from "./Components/Tuesday/Tuesday";
import {Route} from "react-router-dom";




const App = () => {
    return (
        <div className='App-wrapper'>
            <Navbar/>
            <Route path='/monday' render={() => <Monday/>}/>
            <Route path='/tuesday'  render={() => <Tuesday/>}/>
        </div>
    );
};

export default App;


