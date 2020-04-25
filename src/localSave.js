export const saveState = (key, state) => {
    let stateAsString = JSON.stringify(state);
    localStorage.setItem(key, stateAsString)
};

export const restoreState = (key, defaultState) => {
    let state = defaultState;
    let stateAsString = localStorage.getItem(key);
    if (stateAsString != null) {
        return state = JSON.parse(stateAsString);
    }
};