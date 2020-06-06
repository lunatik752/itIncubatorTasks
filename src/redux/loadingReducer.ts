const SET_LOADING = "app/reducer/SET_LOADING"

type InitialStateType = {
    isLoading: boolean
}

const initialState = {
    isLoading: true
}

export const loadingReducer = (state: InitialStateType = initialState, action: SetLoadingType): InitialStateType => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            };
        default :
            return state;
    }
}

type SetLoadingType = {
    type: typeof SET_LOADING
    isLoading: boolean
}

export const setLoading = (isLoading: boolean): SetLoadingType => {
    return {type: SET_LOADING, isLoading}
}