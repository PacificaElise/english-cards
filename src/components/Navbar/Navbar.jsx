import React, {useState} from 'react';
import styles from './navbar.module.scss';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { NavLink } from "react-router-dom";
import { sidebarData } from '../../data';

const Navbar = () => {
const [isOpen, setOpen] = useState(false);

return (
  <>
    <div className={styles.navBar} onClick={()=>
      setOpen(isOpen=>!isOpen)
      }>
      <FaIcons.FaBars/>
    </div>
    <nav className={isOpen ? styles.navMenu : styles.notActive}>
      <ul className={styles.navMenuItems}>
        <li>
          <AiIcons.AiOutlineClose className={styles.navMenuClose} onClick={()=>
            setOpen(isOpen=>!isOpen)
          }/>
        </li>
        {
          sidebarData.map((item, index) => {
            return ( 
              <li className={styles.navMenuItem} key={index}>
                <NavLink onClick={() => setOpen(isOpen=>!isOpen)} to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </NavLink>
              </li>
              )
          })
        }
      </ul>
    </nav>
  </>
)
}

export default Navbar