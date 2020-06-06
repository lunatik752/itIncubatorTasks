import {api} from "../dal/api";
import {Dispatch} from "redux";

const CHANGE_SUCCESS = "wednesday/reducer/CHANGE_SUCCESS"
const TOGGLE_IS_WAITING_RESPONSE = "wednesday/reducer/TOGGLE_IS_WAITING_RESPONSE"
const SHOW_MESSAGE = "wednesday/reducer/SHOW_MESSAGE"

type InitialStateType = {
    success: boolean
    isWaiting: boolean
    responseMessage: string
}

const initialState: InitialStateType = {
    success: true,
    isWaiting: false,
    responseMessage: ''
}

export const requestReducer = (state: InitialStateType = initialState, action: RequestReducerActionsTypes): InitialStateType => {
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

// action types

type RequestReducerActionsTypes = ChangeSuccessType | ToggleWaitingResponseType | ShowMessageType

type  ChangeSuccessType = {
    type: typeof CHANGE_SUCCESS
    success: boolean
}

type  ToggleWaitingResponseType = {
    type: typeof TOGGLE_IS_WAITING_RESPONSE
    isWaiting: boolean
}

type  ShowMessageType = {
    type: typeof SHOW_MESSAGE
    responseMessage: string
}



// action creators

export const changeSuccess = (success: boolean): ChangeSuccessType => {
    return {type: CHANGE_SUCCESS, success}
}
const toggleWaitingResponse = (isWaiting: boolean): ToggleWaitingResponseType => {
    return {type: TOGGLE_IS_WAITING_RESPONSE, isWaiting}
}
const showMessage = (responseMessage: string): ShowMessageType => {
    return {type: SHOW_MESSAGE, responseMessage}
}

//thunk
export const getServerResponse = (success: boolean) => {
    return (dispatch: Dispatch<RequestReducerActionsTypes>) => {
        dispatch(toggleWaitingResponse(true));
        api.sendRequest(success)
            .then(response => {
                dispatch(toggleWaitingResponse(false));
                dispatch(showMessage(`${response.data.errorText} Запрос отправлен!`));
            })
    }
}


/*export const getServerResponse = (success) => {
    return (dispatch) => {
        dispatch(toggleWaitingResponse(true));
        tryCatch(() => api.sendRequest(success))
            .then(response => {
                dispatch(toggleWaitingResponse(false));
                response === 'error'
                    ? dispatch(showMessage("Произошла ошибка на сервере!"))
                    : dispatch(showMessage(`${response.errorText} Запрос отправлен!`));
            })
    }
}*/

