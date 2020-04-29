import React from 'react';
import ToDoList from "./ToDoList/ToDoList";
import style from "./Tuesday.module.css";


function Tuesday() {
    return (
        <div className={style.tuesdayWrapper}>
            <ToDoList/>
        </div>
    );
}

export default Tuesday;


