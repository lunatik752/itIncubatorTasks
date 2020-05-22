import {combineReducers, createStore} from "redux";
import {loadingReducer} from "./loadingReducer";
import {settingsReducer} from "./settingsReducer";
import {requestReducer} from "./requestReducer";

let reducers = combineReducers({
    loading: loadingReducer,
    settings: settingsReducer,
    request: requestReducer
});

const store = createStore(reducers);
export default store;