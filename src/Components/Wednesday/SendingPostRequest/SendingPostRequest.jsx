import React from "react";
import styles from './SendingPostRequest.module.css'
import Button from "../../../common/Button/Button";
import {api} from "../../../dal/api";
import {connect} from "react-redux";
import {changeSuccess} from "../../../redux/requestReducer";


class SendingPostRequest extends React.Component {

    state = {
        success: true
    }



    onRequestSend = () => {
        api.sendRequest(this.state.success)
            .then(response => {
            })
    }

    onSuccessChange = (e) => {
        debugger
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
                />
                <div>

                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return{
        success: state.request.success
    }
}

const ConnectedWednesday = connect(mapStateToProps, {changeSuccess})(SendingPostRequest);

export default ConnectedWednesday
