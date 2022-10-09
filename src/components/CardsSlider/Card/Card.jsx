import React, {useEffect}  from 'react';
import styles from './card.module.scss';


const Card = React.forwardRef((props, ref) => {
  const {id, img, english, russian, transcription, tag, isFlipped, flipCard}=props;
  
  useEffect(() => {
    ref.current.focus();
  }, [id]);

  return (      
    <div className={styles.card}> 
        <div className={isFlipped ? `${styles.front} ${styles.flipped180}` : styles.front}>
          <span className={styles.bigText}><strong>{english}</strong></span>
          <span>{transcription}</span>
          <span><i>{tag}</i></span>
          <input type="button" ref={ref} className={styles.btn} onClick={flipCard(id)} value="Посмотреть перевод" 
          />          
        </div>
        <div className={isFlipped ? `${styles.back}, ${styles.flipped360}` : styles.back}>
          <img src={img} alt='wordPicture' className={styles.img}/>
          <span className={styles.bigText}><strong>{english}</strong></span>
          <span>{russian}</span>
        </div>
    </div>
    )
});

export default Card;
