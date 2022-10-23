import React, {useContext} from 'react';
import AddedWords from './AddedWords/AddedWords';
import AddList from './AddedWords/AddList';
import styles from './list.module.scss';
import style from '../../commonStyles/loading.module.scss';
import { CollectionWordsContext } from '../../CollectionWordsContext';



const List = () => {
  const {isLoading} = useContext(CollectionWordsContext);
  
  return (
    <>
        {isLoading ? 
          <div className={style.loading}>
            {
            [...Array(4)].map((_, index) => 
                <div key={index} className={style.loadingBar}>
                </div>)
            } 
          </div> :
            <section className={styles.list}>
              <AddList />
              <AddedWords />
            </section>
        }
    </>
  )
};

export default List;

