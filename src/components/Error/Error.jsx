import React from 'react';
import styles from './error.module.scss';
import error from '../imgs/error.png'


function Error() {
  return (
    <div className={styles.error}>
      <img src={error} alt='motocrush'></img>
      <div>Ошибка соединения с сервером</div>
    </div>
  )
}

export default Error;