import React, { useState, useEffect } from 'react';
import AddedWords from './AddedWords/AddedWords';
import AddList from './AddedWords/AddList';
import styles from './list.module.scss';
//import style from '../../commonStyles/loading.module.scss';

const List = () => {
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem('list')) || []
  );

  useEffect(()=> {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  //const [isLoading, setLoading] = useState(true);

  /*useEffect(()=> {
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
  }, []);*/

    return (
      <section className={styles.list}>
        <AddList list={list} setList={setList}/>
        <AddedWords list={list} setList={setList}/>
      </section>
    )
};

export default List;

