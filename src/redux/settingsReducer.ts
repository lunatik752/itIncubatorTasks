const SET_THEME = "wednesday/reducer/SET_THEME"

type InitialStateType = {
    themes: Array<ThemeType>
    style: string
}

type ThemeType = {
    id: number
    title: string
}

const initialState: InitialStateType = {
    themes: [
        {id: 1, title: 'original'},
        {id: 2, title: 'dark'},
        {id: 3, title: 'light'},
        {id: 4, title: 'red'},
        {id: 5, title: 'green'},
    ],
    style: 'original'
}

export const settingsReducer = (state: InitialStateType = initialState, action: SetThemeType): InitialStateType => {
    switch (action.type) {
        case SET_THEME:
            return {...state,
                style: action.title
                }
        default :
            return state;
    }
}


//action types
type SetThemeType = {
    type: typeof SET_THEME
    title: string
}

//action
export const setTheme = (title: string) => {
    return {type: SET_THEME, title}
}
