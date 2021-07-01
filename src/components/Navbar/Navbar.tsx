import React from "react";
import s from './Navbar.module.scss';
import {NavLink} from "react-router-dom";
import settingsIcon from '../../images/icons/settingsIcon.svg'

type NavbarPropsType = {
    isAuth: boolean
    login: null | string
    logout: () => void
}

export const Navbar = (props: NavbarPropsType) => {
    return (
        <nav className={s.nav}>
            <div className={s.pagesLinksContainer}>
                <div className={s.item}>
                    <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
                </div>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to="/dialogs" activeClassName={s.activeLink}>Dialogs</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/users" activeClassName={s.activeLink}>Users</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/friends" activeClassName={s.activeLink}>Friends</NavLink>
                </div>
            </div>
            {props.isAuth &&
            <div className={s.btnsHeaderContainer}>
                <div className={s.settingsBtn}>
                    <NavLink to="/settings" activeClassName={s.activeLink}>
                        <img alt={'icon'} src={settingsIcon}/>
                        Settings
                    </NavLink>
                </div>
                <div className={s.logInOutBtn}>
                    <div className={s.btnLogInOutContent} onClick={props.logout}>
                        <button>Log out</button>
                    </div>
                </div>
            </div>
            }
        </nav>
    )
}
