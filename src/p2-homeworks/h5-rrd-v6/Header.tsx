import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import style from './Header.module.css'


function Header() {

    return (
        <div className={style.linkContainer}>
            <div className={style.menu}>
                <div className={style.link}>
                    <NavLink to='/pre-junior'
                             className={({isActive}) =>
                                 isActive ? style.activeLink : undefined
                             }>
                        pre-junior
                    </NavLink>
                </div>
                <div className={style.link}>
                    <NavLink to='/junior' className={({isActive}) =>
                        isActive ? style.activeLink : undefined
                    }>junior</NavLink>
                </div>
                <div className={style.link}>
                    <NavLink to='/junior+' className={({isActive}) =>
                        isActive ? style.activeLink : undefined
                    }>junior+</NavLink>
                </div>
                <button className={style.btn}></button>
            </div>

        </div>
    )
}

export default Header
