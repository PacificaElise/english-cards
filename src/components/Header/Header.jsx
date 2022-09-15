import React from 'react';

import { NavLink } from "react-router-dom";
import styles from './header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}> 
            <NavLink to="/">Домашняя страница</NavLink>
            <NavLink to="/list">Добавить карточку</NavLink>
            <NavLink to="/cards">Проверь себя</NavLink>
            <NavLink to="/tags">Поиск по тегам</NavLink>
            <NavLink to="/train">Тренировка</NavLink>
        </header>
    )
}

export default Header;
