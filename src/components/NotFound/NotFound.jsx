import React from 'react';
import styles from './notfound.module.scss';

function NotFound() {
  return (
    <div className={styles.notfound}>
      <img src='https://i.gifer.com/yH.gif' alt='travolta'></img>
      <div>Error #404</div>
      <div>Page not found</div>
    </div>
  )
};

export default NotFound