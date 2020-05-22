const  SAND_REQUEST = "wednesday/reducer/SAND_REQUEST"
const  CHANGE_SUCCESS = "wednesday/reducer/CHANGE_SUCCESS"


const initialState = {
    success: true
}

export const requestReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAND_REQUEST:
            return {...state};
        case CHANGE_SUCCESS:
            debugger
            return {
                ...state, success: action.success
            }
        default :
            return state;
    }
}

export const sendRequest = () => {
    return {type: SAND_REQUEST}
}

export const changeSuccess = (success) => {
    debugger
    return {type: CHANGE_SUCCESS, success}
}
