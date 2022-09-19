import React from 'react';
import styles from './tag.module.scss';

const Tag = props => {
  const {img, english, russian, tag, rustag}=props;
  return (
    <div className={styles.tag}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={img} alt='wordPicture'/>
      </div>
      <div>
        <span>{english}</span>
        <span>({russian})</span>
      </div>
      <h3>{tag}</h3>
      <h4>({rustag})</h4>
    </div>
  )
}

export default Tag;
