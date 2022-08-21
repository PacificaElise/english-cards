import styles from './footer.module.scss';

const Footer = props => {
        return (
        <div className={styles.footer}>
                <img src='https://cdn-icons.flaticon.com/png/512/5620/premium/5620881.png?token=exp=1661098851~hmac=c748751cbf312e6466e38abcb4039f02' alt='logo' className={styles.img}></img>
                <a href="/#">Контакты</a>
                <a href="/#">tati.ivanova.87@gmail.com</a> 
        </div>)
}

export default Footer;
