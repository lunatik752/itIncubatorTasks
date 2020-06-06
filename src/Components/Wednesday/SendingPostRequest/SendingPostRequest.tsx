import React, {ChangeEvent} from "react";
import styles from './SendingPostRequest.module.css'
import Button from "../../../common/Button/Button";

import {connect} from "react-redux";
import {changeSuccess, getServerResponse} from "../../../redux/requestReducer";
import Loading from "../../Loading/Loading";
import {AppStateType} from "../../../redux/store";


type OwnPropsType = {
    style: string
}

type MapStatePropsType = {
    success: boolean
    isWaiting: boolean
    responseMessage: string
}

type MapDispatchPropsType = {
    changeSuccess: (success: boolean) => void;
    getServerResponse: (success: boolean) => void;
}

type PropsType = OwnPropsType & MapDispatchPropsType & MapStatePropsType


class SendingPostRequest extends React.Component<PropsType, AppStateType> {


    onRequestSend = () => {
        this.props.getServerResponse(this.props.success)
    }

    onSuccessChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.props.changeSuccess(e.currentTarget.checked)
    }

    render = () => {
        const pageTheme = styles.wrapper + ' ' + styles[this.props.style];
        return (
            <div className={pageTheme}>
                <h2>Server request</h2>
                <div className={styles.success}>
                    <label>success:</label>
                    <input type="checkbox"
                           checked={this.props.success}
                           onChange={this.onSuccessChange}
                    />
                </div>
                <Button nameButton='Send'
                        onClick={this.onRequestSend}
                        disabled={this.props.isWaiting}

                />
                <div className={styles.requestMessage}>
                    {this.props.isWaiting
                        ? <Loading/>
                        : <div>
                            <p>{this.props.responseMessage}</p>
                        </div>
                    }
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        success: state.request.success,
        isWaiting: state.request.isWaiting,
        responseMessage: state.request.responseMessage
    }
}

const ConnectedPostRequest = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
    changeSuccess,
    getServerResponse
})(SendingPostRequest);

export default ConnectedPostRequest;
