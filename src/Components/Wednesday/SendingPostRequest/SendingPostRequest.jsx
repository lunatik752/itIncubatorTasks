import React from "react";
import styles from './SendingPostRequest.module.css'
import Button from "../../../common/Button/Button";
import axios from 'axios'


class SendingPostRequest extends React.Component {

    state = {
        success: true
    }


    sendRequest = () => {
        return axios.post(`https://neko-cafe-back.herokuapp.com/auth/test`,
            {success: this.state.success}
        )
    }

    tryCatch = async (f) => {
        try {
            let response = await f();
            console.log('answer: ', response.data);
            return response;
        } catch (e) {
            console.log('error: ', {...e});
            return 'error';
        }
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
                        onClick={() => this.tryCatch(this.sendRequest)}/>
            </div>
        )
    }

}

export default SendingPostRequest
