import React from 'react';
import style from './MessageCloud.module.css';
import Avatar from "./Avatar/Avatar";
import Cloud from "./Cloud/Cloud";

const MessageCloud = () => {
    return (
        <div className={style.cloudWrapper}>
            <Avatar/>
            <Cloud/>
        </div>
    )
};

export default MessageCloud;