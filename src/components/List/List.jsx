import React, {useEffect, useState} from 'react';
import AddedWords from './AddedWords/AddedWords';
import AddList from './AddedWords/AddList';
import Error from '../Error/Error'
import styles from './list.module.scss';
import style from '../../commonStyles/loading.module.scss';
import { MainStorage } from '../storages/MainStorage';
import { observer } from 'mobx-react-lite';

const List = observer((props) => {

  const [Ctrl] = useState(new MainStorage())

  useEffect(() => {
    Ctrl.getWords();
  }, []);

  useEffect(() => {
    <AddedWords />
    }, [Ctrl.list]);

  return (
    <>
        {Ctrl.error ?
          <Error /> :
          Ctrl.isLoading ? 
          <div className={style.loading}>
            {
            [...Array(4)].map((_, index) => 
                <div key={index} className={style.loadingBar}>
                </div>)
            } 
          </div> :
            <section className={styles.list}>
              <AddList ctrl = {Ctrl}/>
              <AddedWords ctrl = {Ctrl}/>
            </section>
        }
    </>
  )
}
);

export default List;

