import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import online_image1 from "../../img/online_image1.jpg";
import online_image2 from "../../img/online_image2.jpg";
import online_image3 from "../../img/online_image3.jpg";



const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}><NavLink to='/Profile' activeClassName={s.activeLink}>Profile</NavLink></div>
        <div className={`${s.item} ${s.active}`}><NavLink to='Dialogs' activeClassName={s.activeLink}>Messages</NavLink></div>
        <div className={s.item}><NavLink to='Users' activeClassName={s.activeLink}>Users</NavLink></div>
        <div className={s.item}><NavLink to='News' activeClassName={s.activeLink}>News</NavLink></div>
        <div className={s.item}><NavLink to='Music' activeClassName={s.activeLink}>Music</NavLink></div>
        <div className={s.item}><NavLink to='Settings' activeClassName={s.activeLink}>Settings</NavLink></div>
        <div className={s.online_container}>
        <div className={s.online}><NavLink to="#">Online</NavLink></div>
        <div className={s.friends}>
        <NavLink to='friends' activeClassName={s.activeLink}>
        <img src={online_image1} alt={""}/>
        <span className={s.online_dot}></span></NavLink>
        <NavLink to='friends' activeClassName={s.activeLink}><img src={online_image2} alt={""}/>
        <span className={s.online_dot}></span></NavLink>
        <NavLink to='friends' activeClassName={s.activeLink}><img src={online_image3} alt={""}/>
        <span className={s.online_dot}></span></NavLink>
        </div>
        </div>
    </nav>
}

export default Navbar;