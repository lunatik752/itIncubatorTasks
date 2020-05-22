import React from "react";
import styles from './SendingPostRequest.module.css'
import Button from "../../../common/Button/Button";
import {api} from "../../../dal/api";


class SendingPostRequest extends React.Component {

    state = {
        success: true
    }



    onRequestSend = () => {
        api.sendRequest(this.state.success)
    }

    onSuccessChange = (e) => {
        this.setState({success: e.currentTarget.checked})
    }


    render = () => {

        const pageTheme = styles.wrapper + ' ' + styles[this.props.style];

        return (
            <div className={pageTheme}>
                <h2>Server request</h2>
                <div className={styles.success}>
                    <label>success:</label>
                    <input type="checkbox"
                           checked={this.state.success}
                           onChange={this.onSuccessChange}
                    />
                </div>
                <Button nameButton='Send'
                        onClick={this.onRequestSend}
                />
            </div>
        )
    }

}

export default SendingPostRequest
