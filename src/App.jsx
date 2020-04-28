import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Monday from "./Components/Monday/Monday";
import Tuesday from "./Components/Tuesday/Tuesday";
import {Route} from "react-router-dom";
import Loading from "./Components/Loading/Loading";
import Wednesday from "./Components/Wednesday/Wednesday";


class App extends React.Component {

    state = {
        loading: true
    }

    componentDidMount() {
        setInterval(() => {
                this.setState({
                    loading: false
                })
            }, 3000
        )
    };

    render = () => {

        return (
            <div className='App-wrapper'>
                {this.state.loading ?
                    <Loading/> :
                    <>
                        <Navbar/>
                        <Route path='/monday' render={() => <Monday/>}/>
                        <Route path='/tuesday' render={() => <Tuesday/>}/>
                        <Route path='/wednesday' render={() => <Wednesday/>}/>
                    </>
                }
            </div>
        );
    }
}

export default App;


