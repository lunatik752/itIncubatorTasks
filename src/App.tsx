import React from 'react';
import styles from './App.module.css';
import Navbar from "./Components/Navbar/Navbar";
import Monday from "./Components/Monday/Monday";
import Tuesday from "./Components/Tuesday/Tuesday";
import {Route} from "react-router-dom";
import Loading from "./Components/Loading/Loading";
import Wednesday from "./Components/Wednesday/Wednesday";
import {connect} from "react-redux";
import {setLoading} from "./redux/loadingReducer";
import {AppStateType} from "./redux/store";


type MapStatePropsType = {
    isLoading: boolean
}

type MapDispatchPropsType = {
    setLoading: (isLoading: boolean) => void;
}

type PropsType = MapStatePropsType & MapDispatchPropsType

class App extends React.Component<PropsType> {

    componentDidMount() {
        setTimeout(() => {
                this.props.setLoading(false)
            }, 500
        )
    };

    render = () => {
        return (
            <div className={styles.appWrapper}>
                {this.props.isLoading ?
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

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isLoading: state.loading.isLoading
    }
}

const ConnectedApp = connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {setLoading})(App);
export default ConnectedApp;



