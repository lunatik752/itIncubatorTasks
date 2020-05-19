import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Monday from "./Components/Monday/Monday";
import Tuesday from "./Components/Tuesday/Tuesday";
import {Route} from "react-router-dom";
import Loading from "./Components/Loading/Loading";
import Wednesday from "./Components/Wednesday/Wednesday";
import {connect} from "react-redux";
import {setLoading} from "./redux/loadingReducer";


class App extends React.Component {

    componentDidMount() {
       let newLoading = {
           loading: false
       }
        setInterval(() => {
                this.props.setLoading(newLoading)
            }, 500
        )
    };

    render = () => {
        return (
            <div className='App-wrapper'>
                {this.props.loading ?
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

const mapStateToProps = (state) => {
    return {
        loading: state.loading.loading
    }
}

const ConnectedApp = connect(mapStateToProps, {setLoading})(App);
export default ConnectedApp;



