import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import ReactFoto from '../../img/React.png';

const Header = (props) => {
    return <header className={s.header}>
        <img src={ ReactFoto } alt={""}/>
        <div className={s.title}>#СоцСетка</div>
        <form className={s.search}>
        <div className={s.icon}><NavLink to="#">&#128269;</NavLink></div>
            <input type='text' className={s.search_input} placeholder='Search friends, fotos, videos' />
        </form>
        <div className={s.loginBlock}>
        {props.isAuth 
        ? <div>{props.login} - <button onClick={props.logout} className={s.button}>Logout</button></div>
        :<NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;