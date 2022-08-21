import styles from './header.module.scss';

const Header = props => {
    return (
    <header className={styles.header}> 
        <a href="/#">Добавить карточку</a>
        <a href="/#">Теги</a>
        <a href="/#">Тренировка</a>
    </header>)
}

export default Header;
