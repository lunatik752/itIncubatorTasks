import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";


class Navbar extends React.Component {

    state = {
        menuActive: false,
    };


    showMenu = () => {
        this.setState({menuActive: true});
    };

    hideMenu = () => {
        this.setState({menuActive: false});
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

                        {!this.state.menuActive && <button className={style.buttonNavbar} onClick={this.showMenu}
                        >menu</button>}
                        {this.state.menuActive && <button className={style.buttonNavbar}
                                                          onClick={this.hideMenu}
                        >X</button>}
                    </div>
                </div>
                <div className={shadowClass}
                     onClick={this.hideMenu}>
                </div>
            </>
        );
    };
}

export default Navbar;