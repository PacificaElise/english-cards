import React, { useState, useEffect } from 'react';
import Tag from './Tag/Tag';
import styles from './tags.module.scss';
import { categories } from '../../data';

const Tags = () => {
    const [category, setCategory] = useState(0);
    const [isLoading, setLoading] = useState(true);
    const [search, setSearch] = useState ('');
    const [tags, setTags] = useState ([]);

    useEffect(()=> {
        setLoading(true);
        fetch(`https://63221d31fd698dfa29076399.mockapi.io/Tags?${category ? `category=${category}` : ''}`)
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
    }, [category]);

    return (
    <div className={styles.tagsWrapper}>
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
            <input value={search} onChange={e => setSearch(e.target.value)} className={styles.search} placeholder='Поиск по тегу'></input>
        </div>
        <div className={styles.content}>
            {isLoading ? 
                <h3>Идёт загрузка...</h3> : 
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
            <li className={styles.li}>1</li>
            <li className={`${styles.li} ${styles.active}`}>2</li>
            <li className={styles.li}>3</li>
        </ul>
    </div>
    )
};

export default Tags;