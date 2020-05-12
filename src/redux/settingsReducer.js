const SET_THEME = "wednesday/reducer/SET_THEME"

const initialState = {
    themes: [
        {id: 1, title: 'original'},
        {id: 2, title: 'dark'},
        {id: 3, title: 'light'},
        {id: 4, title: 'red'},
        {id: 5, title: 'green'},
    ],
    style: 'original'
}

export const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_THEME:
            return {...state,
                style: action.title
                }
        default :
            return state;
    }
}

export const setTheme = (title) => {
    return {type: SET_THEME, title}
}
