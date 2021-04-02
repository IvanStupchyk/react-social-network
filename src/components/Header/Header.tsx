import React from "react";
import s from './Header.module.css';

function Header() {
    return (
        <header className={s.header}>
            <img src='https://www.logodesign.net/images/nature-logo.png' />
        </header>
    )
}

export default Header;