import React, {useState} from 'react';
import { motion } from "framer-motion";
import styles from './navbar.module.scss';
import { Items } from '../../data';
import MenuItem from "./MenuItem/MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};


const Navbar = () => (
  <motion.ul variants={variants} className={styles.navbarUl}>
    {Items.map((item) => (
      <MenuItem className={styles.menuItem} key={item.id} text={item.text} icon={item.icon} path={item.path}/>
    ))}
  </motion.ul>
);

export default Navbar
