import React from 'react';
import { motion, useCycle } from "framer-motion";

import { NavLink } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import MenuToggle from "../Navbar/MenuToggle/MenuToggle";
import { Items } from '../../data'

import styles from './header.module.scss';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const Header = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <header className={styles.header}> 
      <motion.nav className={styles.nav}
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom="100%"
      >
        <motion.div className={styles.navbar} variants={sidebar} />
        <Navbar />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
      { 
        Items.map((item, index) => {
            return (
              <NavLink to={item.path} key={index}>
                <span>
                  {item.text}
                </span>
              </NavLink>                            
            )
          })
        }
      </header>
  );
}

export default Header;
