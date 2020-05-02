import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";


class Navbar extends React.Component {

    state = {
        menuActive: false,
    };


    showHideMenu = () => {
        this.state.menuActive ?
            this.setState({menuActive: false}):
            this.setState({menuActive: true});
    };

    render = () => {

        let menuActiveClass = this.state.menuActive ? style.menu + ' ' + style.menuActive : style.menu;
        let shadowClass = this.state.menuActive ? style.shadow : style.shadow + ' ' + style.shadowNone;

        return (
            <>
                <div className={menuActiveClass}>
                    <div className={style.menuList}>
                        <div className={style.item}>
                            <NavLink to='/monday' activeClassName={style.active}>monday</NavLink>
                        </div>
                        <div className={style.item}>
                            <NavLink to='/tuesday' activeClassName={style.active}>tuesday</NavLink>
                        </div>
                        <div className={style.item}>
                            <NavLink to='/wednesday' activeClassName={style.active}>wednesday</NavLink>
                        </div>

                        <div className={style.buttonNavbar}>
                            <BurgerMenu onClick={this.showHideMenu} isMenuOpen={this.state.menuActive}/>
                        </div>
                    </div>
                </div>
                <div className={shadowClass}
                     onClick={this.showHideMenu}>
                </div>
            </>
        );
    };
}

export default Navbar;