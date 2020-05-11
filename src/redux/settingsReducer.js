const SET_THEME = "wednesday/reducer/SET_THEME"

const initialState = {
    themes: [
        {id: 1, title: 'original'},
        {id: 2, title: 'dark'},
        {id: 3, title: 'light'}
    ]
}

export const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_THEME:
            return {...state,
                themes: state.themes.filter(theme => theme.id === action.themeId)
                }
        default :
            return state;
    }
}

export const setLoading = (themeId) => {
    return {type: SET_THEME, themeId}
}
