import {applyMiddleware, combineReducers, createStore} from "redux";
import {loadingReducer} from "./loadingReducer";
import {settingsReducer} from "./settingsReducer";
import {requestReducer} from "./requestReducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    loading: loadingReducer,
    settings: settingsReducer,
    request: requestReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store;