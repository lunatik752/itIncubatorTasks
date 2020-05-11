const SET_LOADING = "app/reducer/SET_LOADING"


const initialState = {
    loading: true
}

export const loadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {...state, loading: action.loading};
        default :
            return state;
    }
}

export const setLoading = (newLoading) => {
    return {type: SET_LOADING, newLoading}
}
