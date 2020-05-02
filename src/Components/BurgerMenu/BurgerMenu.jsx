import React from 'react';
import style from './BurgerMenu.module.css';

const BurgerMenu = (props) => {

    let classBurgerMenu = props.isMenuOpen ? style.burgerMenuIcon + ' ' + style.active : style.burgerMenuIcon;

    return (
        <div className={style.burgerMenuWrapper} onClick={props.onClick}>
            <div className={classBurgerMenu}>
            </div>
        </div>
    )
};

export default BurgerMenu;