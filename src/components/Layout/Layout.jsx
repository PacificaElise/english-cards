import React from 'react';

import styles from './layout.module.scss';
import { Outlet } from "react-router-dom";
import Footer from '../Footer/Footer';
import Header from '../Header/Header';


const Layout = () => {
    return (
    <div className={styles.wrapper}> 
        <Header />
        <main className={styles.main}>
            <Outlet />
        </main>
        <Footer/>
    </div>
    ) 
}

export default Layout;
