import {combineReducers, createStore} from "redux";
import {loadingReducer} from "./loadingReducer";
import {settingsReducer} from "./settingsReducer";

let reducers = combineReducers({
    loadingPage: loadingReducer,
settingsPage: settingsReducer
});

const store = createStore(reducers);
export default store;