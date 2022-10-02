import * as React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import styles from './menuItem.module.scss'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
  };

  const MenuItem = (props) => {
  const {text, icon, path} = props;

  return (
    <motion.li
      variants={variants}
      whileTap={{ scale: 0.95 }}
    >
    <NavLink to={path} className={styles.menuItem} end>
      <div>{icon}</div>
      <div>{text}</div>
    </NavLink>
    </motion.li>
  );
};

export default MenuItem