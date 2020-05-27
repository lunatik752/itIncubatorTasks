import {api, tryCatch} from "../dal/api";

const CHANGE_SUCCESS = "wednesday/reducer/CHANGE_SUCCESS"
const TOGGLE_IS_WAITING_RESPONSE = "wednesday/reducer/TOGGLE_IS_WAITING_RESPONSE"
const SHOW_MESSAGE = "wednesday/reducer/SHOW_MESSAGE"



const initialState = {
    success: true,
    isWaiting: false,
    responseMessage: ''
}

export const requestReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SUCCESS:
            return {
                ...state, success: action.success
            }
        case TOGGLE_IS_WAITING_RESPONSE:
            return {
                ...state, isWaiting: action.isWaiting
            }
        case SHOW_MESSAGE:
            return {
                ...state, responseMessage: action.responseMessage
            }
        default :
            return state;
    }
}


export const changeSuccess = (success) => {
    return {type: CHANGE_SUCCESS, success}
}
const toggleWaitingResponse = (isWaiting) => {
    return {type: TOGGLE_IS_WAITING_RESPONSE, isWaiting}
}
const showMessage = (responseMessage) => {
    return {type: SHOW_MESSAGE, responseMessage}
}

//thunk
export const getServerResponse = (success) => { return (dispatch) => {
    dispatch(toggleWaitingResponse(true));
    tryCatch(() => api.sendRequest(success))
        .then(response => {
            dispatch(toggleWaitingResponse(false));
            response === 'error'
                ? dispatch(showMessage("Произошла ошибка на сервере!"))
                : dispatch(showMessage(`${response.errorText} Запрос отправлен!`));
        })
}}

