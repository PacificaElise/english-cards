import React, { useState } from 'react';

import { NavLink } from "react-router-dom";
import styles from './header.module.scss';
import { sidebarData } from '../../data';
import Navbar from '../Navbar/Navbar';

const Header = () => {
  const[sidebar, setSidebar] = useState(false);

  return (
    <>
      <header className={styles.header}> 
        <div className={styles.close} onClick={()=>
              setSidebar(sidebar=>!sidebar)  
        }>
          <Navbar />
        </div>
        { 
          sidebarData.map((item, index) => {
            return (
              <NavLink className={sidebar && styles.none} to={item.path} key={index}>
                <span>
                  {item.title}
                </span>
              </NavLink>                            
            )
          })
        }
      </header>
    </>
  )

}

export default Header;
