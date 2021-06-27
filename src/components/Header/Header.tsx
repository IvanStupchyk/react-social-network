import React from "react";
import s from './Header.module.scss';
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean
    login: null | string
    logout: () => void
}

export const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            {/*<img alt={'logo'} src='https://www.logodesign.net/images/nature-logo.png' />*/}

            <div className={s.loginBlock}>
                {   props.isAuth
                    ? <div>
                        {props.login} -
                        <button onClick={props.logout}>Log out</button>
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}
