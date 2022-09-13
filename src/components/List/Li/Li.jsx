import React, {useState} from 'react';
import styles from './li.module.scss';

const Li = props => {
        const {id, english, russian, transcription, tag}=props;

        const [isEdit, setEdit] = useState(false);
        const [isSelect, setSelect] = useState(false);
        const [isDelete, setDelete] = useState(false);

        const styleSelect = {
            backgroundColor: isSelect && '#E9C46A'
        }

        const styleDelete = {
            display: isDelete && "none"
        }

        return (
        <ol>
            <li value={id} style = {{...styleSelect, ...styleDelete}} onClick={()=>setSelect(selected=>!selected)}>
                {isEdit ? 
                <div className={styles.li}>
                    <input className={styles.input}
                    type="text" 
                    placeholder='Введите слово'
                    defaultValue={english}
                    />
                    <input className={styles.input}
                    type="text" 
                    placeholder='Введите перевод'
                    />
                    <input className={styles.input}
                    type="text" 
                    placeholder='Введите транскрипцию'
                    />
                    <input className={styles.input}
                    type="text" 
                    placeholder='Введите тег'
                    />
                    <button className={`${styles.btn} ${styles.btnGreen}`}
                    onClick = {()=>setEdit(false)}>Сохранить</button>
                    <button className={`${styles.btn} ${styles.btnBlue}`} onClick = {()=>setEdit(false)}>Отмена</button>
                </div> :
                <div className={styles.li}>
                    <div className={styles.word}>{english}</div>
                    <div className={styles.word}>{russian}</div>
                    <div className={styles.word}>{transcription}</div>
                    <div className={styles.word}>{tag}</div>
                    <button className={`${styles.btn} ${styles.btnOrange}`} 
                    onClick = {()=>setEdit(true)}>Редактировать</button>
                    <button className={`${styles.btn} ${styles.btnRed}`} onClick = {()=>setDelete(true)}>Удалить</button>
                </div>
                }
            </li>
        </ol>)
}


export default Li;
