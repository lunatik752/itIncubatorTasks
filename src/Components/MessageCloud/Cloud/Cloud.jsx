import React from 'react';
import style from './Cloud.module.css';

const Cloud = () => {
    return (
        <div className={style.cloud}>
            <div className={style.cloudName}>
               <span>Максим Белый</span>
            </div>
            <div className={style.cloudText}>
                <span>Привет!!! Как дела?</span>
            </div>
            <div className={style.cloudTime}>
                <span>15:35</span>
            </div>
        </div>
    )
};

export default Cloud;