import React from 'react';

import { NavLink } from "react-router-dom";
import styles from './header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}> 
            <NavLink to="/english-cards">Домашняя страница</NavLink>
            <NavLink to="/list">Добавить карточку</NavLink>
            <NavLink to="/cards">Тренировка</NavLink>
            <NavLink to="/tags">Поиск по тегам</NavLink>
            <NavLink to="/exam">Проверь себя</NavLink>
        </header>
    )
}

export default Header;
