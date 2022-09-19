import React, { useState, useEffect } from 'react';
import Tag from './Tag/Tag';
import styles from './tags.module.scss';
import style from '../../commonStyles/loading.module.scss';
import { categories } from '../../data';

const Tags = () => {
  const [category, setCategory] = useState(0);
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(true);
  const [search, setSearch] = useState ('');
  const [tags, setTags] = useState ([]);

  useEffect(()=> {
    setLoading(true);

    const categoryParam = category ? `category=${category}` : '';

    fetch(
      `https://63221d31fd698dfa29076399.mockapi.io/Tags?page=${page}&limit=6&${categoryParam}`,
      )
      .then(res => res.json())
      .then((json) => {
          setTags(json);
      })
      .catch((err) => {
          console.warn(err);
          alert('Ошибка при получении данных');
      }).finally(() => {
          setLoading(false);
      })
}, [category, page]);

  return (
    <div className={styles.tagsWrapper}>
      {isLoading ? 
        <div className={style.loading}>
          {
            [...Array(4)].map((_, index) => 
              <div key={index} className={style.loadingBar}>
              </div>)
          } 
        </div> : 
        <>
          <h2 className={styles.title}>Моя коллекция слов</h2>
          <div className={styles.top}>
            <ul className={styles.tags}>
              {
                categories.map((obj, index) => 
                <li key={obj.rustag} onClick={() => setCategory(index)} 
                className={styles.li + ' ' + (category === index && styles.active)}>
                  {obj.rustag}
                </li>)
              }
              </ul>
              <input value={search} onChange={e => setSearch(e.target.value)} className={styles.search} placeholder='Поиск по тегу'>
              </input>
          </div>
          <div className={styles.content}>
            {
              tags
              .filter(obj => {
                return obj.rustag.toLowerCase().includes(search.toLowerCase());
                })
              .map((obj)=>
                <Tag
                id={obj.id}
                key={obj.id}
                english={obj.english}
                russian={obj.russian}
                img={obj.img}
                tag={obj.tag}
                rustag={obj.rustag}
                />
              )
            }
          </div>
          <ul className={styles.pagination}>
            {
              [...Array(3)].map((_, index) => 
                <li key={index} onClick={() => setPage(index+1)}
                className={styles.li + ' ' + (page === index+1 && styles.active)}>
                  {index+1}
                </li>)
            }
          </ul>
        </>
      }
    </div>
    )
};

export default Tags;