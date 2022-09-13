import React from 'react';
import Li from './Li/Li';
import {cards} from '../../data';
import styles from './list.module.scss';


const List = () => {
    return (
    <div className={styles.list}>
    {cards.map((card)=>
    <Li
      id={card.id}
      key={card.id}
      english={card.english}
      russian={card.russian}
      transcription={card.transcription}
      tag={card.tag}
      />
    )    }
    </div>)
};

export default List;

