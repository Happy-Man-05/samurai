import React from 'react';
import s from './Navbar.module.css'

const NavBar = () => {
    return (

        <nav className={s.nav}>
            <div className={s.item}>
                <a href='/profile'>profile</a>
            </div>
            <div className={s.item}>
                <a href='/dialogs'>message</a>
            </div>
            <div className={s.item}>
                <a href='/news'>news</a>
            </div>
            <div className={s.item}>
                <a href='/music'>music</a>
            </div>
            <div className={s.item}>
                <a href='/setting' >setting</a>
            </div>
        </nav>

    );
};

export default NavBar;