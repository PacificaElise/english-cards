import styles from './footer.module.scss';

const Footer = props => {
        return (
        <div className={styles.footer}>
                <img src="https://img1.labirint.ru/rcimg/7b61a467af52d711146209c64e85ecb6/1920x1080/books57/562233/ph_1.jpg?1563956854" alt='logo' className={styles.img}></img>
                <a href="/#">Контакты</a>
                <a href="/#">tati.ivanova.87@gmail.com</a> 
        </div>)
}

export default Footer;
