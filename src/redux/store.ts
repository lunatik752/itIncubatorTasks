import {applyMiddleware, combineReducers, createStore} from "redux";
import {loadingReducer} from "./loadingReducer";
import {settingsReducer} from "./settingsReducer";
import {requestReducer} from "./requestReducer";
import thunkMiddleware from "redux-thunk"

let rootReducers = combineReducers({
    loading: loadingReducer,
    settings: settingsReducer,
    request: requestReducer
});

type RootReducersType = typeof rootReducers;
export type AppStateType = ReturnType<RootReducersType>

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware));
export default store;