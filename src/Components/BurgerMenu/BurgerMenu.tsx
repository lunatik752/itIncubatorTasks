import React from 'react';
import style from './BurgerMenu.module.css';

type PropsType = {
    isMenuOpen: boolean
    onClick: () => void
}

const BurgerMenu = (props: PropsType) => {

    let classBurgerMenu = props.isMenuOpen ? style.burgerMenuIcon + ' ' + style.active : style.burgerMenuIcon;

    return (
        <div className={style.burgerMenuWrapper} onClick={props.onClick}>
            <div className={classBurgerMenu}>
            </div>
        </div>
    )
};

export default BurgerMenu;