import React, { useState, useEffect } from 'react';
import Li from './Li/Li';
import styles from './list.module.scss';
import style from '../../commonStyles/loading.module.scss';

const List = () => {
  const [list, setList] = useState ([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(()=> {
    setLoading(true);
    fetch('https://63221d31fd698dfa29076399.mockapi.io/Tags')
        .then(res => res.json())
        .then((json) => {
          setList(json);
        })
        .catch((err) => {
            console.warn(err);
            alert('Ошибка при получении данных');
        }).finally(() => {
          setLoading(false);
        })
  }, []);

    return (
      <div className={styles.list}>
        {isLoading ? 
          <div className={style.loading}>
            {
            [...Array(4)].map((_, index) => 
                <div key={index} className={style.loadingBar}>
                </div>)
            } 
          </div> : 
          list.map((obg)=>
            <Li
              id={obg.id}
              key={obg.id}
              english={obg.english}
              russian={obg.russian}
              transcription={obg.transcription}
              tag={obg.tag}
              />
            )   
        }
      </div>
    )
};

export default List;

