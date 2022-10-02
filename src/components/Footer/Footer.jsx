import React from 'react';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
          <img src="https://img1.labirint.ru/rcimg/7b61a467af52d711146209c64e85ecb6/1920x1080/books57/562233/ph_1.jpg?1563956854" alt='logo' className={styles.logo}>
          </img>
        <div className={styles.contacts}>
          <p>Контакты</p>
          <a href="/#">tati.ivanova.87@gmail.com</a> 
        </div>
      </div>
      <a className={styles.pngtree} href="https://pngtree.com/">Изображения взяты с https://pngtree.com/</a> 
    </div>)
}

export default Footer;
