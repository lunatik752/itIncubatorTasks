import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";



const Navbar = () => {

    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to='/monday' activeClassName={style.active}>Понедельник</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/tuesday' activeClassName={style.active}>Вторник</NavLink>
            </div>
        </nav>
    )
};

export default Navbar;