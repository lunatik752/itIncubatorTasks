import React from "react";
import styles from './SendingPostRequest.module.css'
import Button from "../../../common/Button/Button";
import {api} from "../../../dal/api";
import {connect} from "react-redux";
import {changeSuccess, showMessage, toggleWaitingResponse} from "../../../redux/requestReducer";
import Loading from "../../Loading/Loading";


class SendingPostRequest extends React.Component {


    onRequestSend = () => {
        this.props.toggleWaitingResponse(true);
        api.sendRequest(this.props.success)
            .then(response => {
                this.props.toggleWaitingResponse(false);
                response === 'error' ? this.props.showMessage("Произошла ошибка на сервере!") : this.props.showMessage(`${response.errorText} Запрос отправлен!` )
            })
    }

    onSuccessChange = (e) => {
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

const mapStateToProps = (state) => {
    return {
        success: state.request.success,
        isWaiting: state.request.isWaiting,
        responseMessage: state.request.responseMessage
    }
}

const ConnectedWednesday = connect(mapStateToProps, {
    changeSuccess,
    toggleWaitingResponse,
    showMessage
})(SendingPostRequest);

export default ConnectedWednesday
