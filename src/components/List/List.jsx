import styles from './list.module.scss';

const List = props => {
        const {id, english, russian, transcription, tag, isSelected}=props

        return (
        <ol>
        <li value={id} className={(isSelected && styles.liSelected)}>
        <input className={styles.input}
                type="text" 
                placeholder='Введите слово'
                value={english}
        />
        <input className={styles.input}
                type="text" 
                placeholder='Введите перевод'
                value={russian}
        />
        <input className={styles.input}
                type="text" 
                placeholder='Введите транскрипцию'
                value={transcription}
        />
        <input className={styles.input}
                type="text" 
                placeholder='Введите тег'
                value={tag}
        />
        <button className={`${styles.btn} ${styles.btnOrange} ${(isSelected && styles.btnNone)}`}>Редактировать</button>
        <button className={`${styles.btn} ${styles.btnRed} ${(isSelected && styles.btnNone)}`}>Удалить</button>
        <button className={`${styles.btn} ${styles.btnGreen} ${(!isSelected && styles.btnNone)}`}>Сохранить</button>
        <button className={`${styles.btn} ${styles.btnBlue} ${(!isSelected && styles.btnNone)}`}>Отмена</button>
        </li>
        </ol>)
}

export default List;
