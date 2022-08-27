import styles from './card.module.scss';

const Card = props => {
    const {img, english, russian, transcription, tag}=props;

    return (
            <div className={styles.card}> 
                <div className={styles.front}>
                    <span className={`${styles.bigText} ${styles.textMargin}`}><strong>{english}</strong></span>
                    <span >{transcription}</span>
                    <span className={styles.textMargin}><i>{tag}</i></span>
                </div>
                <div className={styles.back}>
                    <img src={img} alt='wordPicture' className={styles.img}/>
                    <span className={styles.textMargin}>{russian}</span>
                </div>
            </div>
        )
}

export default Card;
