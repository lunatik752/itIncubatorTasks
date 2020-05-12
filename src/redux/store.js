import {combineReducers, createStore} from "redux";
import {loadingReducer} from "./loadingReducer";
import {settingsReducer} from "./settingsReducer";

let reducers = combineReducers({
    loading: loadingReducer,
    settings: settingsReducer
});

const store = createStore(reducers);
export default store;