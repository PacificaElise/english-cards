import React, {useState, useContext} from 'react';
import styles from './addedWords.module.scss';
import { Button } from 'react-bootstrap';
import { BsFillTrashFill, BsFillCloudCheckFill, BsPencilSquare, BsXCircle } from "react-icons/bs";
import { CollectionWordsContext } from '../../../CollectionWordsContext';

const AddedWords = () => {
  const {list, setList} = useContext(CollectionWordsContext);

  const [data, setData]=useState({
    english: '',
    transcription: '',
    russian: '',
    tags: '',
  });

  const [edit, setEdit] = useState(null);
  const [isEmpty, setEmpty] = useState(false);

  const onChange = (e) => {
    setEmpty(!e.target.value);

    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  }

  const deleteWord = async (id) => {
    let isDelete = window.confirm("Вы действительно хотите удалить это слово?");
    if (isDelete) {
    try {
      const res = await fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/delete`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      if(res.ok) {
        let newList = [...list].filter(item => item.id!==id);
        setList(newList)
      };
    } catch(e) {
      alert(`Ошибка соединения с сервером. ${e}`);
    };
  }
  }

  const saveWord = async (id) => {
    const eng = data.english;
    const trans = data.transcription;
    const rus = data.russian;
    const tag = data.tags;
    try {
      const res = await fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/update`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: id,
          english: eng,
          transcription: trans,
          russian: rus,
          tags: tag
        })
      });
      if(res.ok) {
        let newList = [...list].map (item => {
          if (item.id === id) {
            item.english = data.english;
            item.transcription = data.transcription;
            item.russian = data.russian;
            item.tags = data.tags;
          }
          return item;
        });
        setList(newList);
        setEdit(null);
      }
    } catch(e) {
      alert(`Ошибка соединения с сервером. ${e}`);
    };
  }

  const editWord = (id, english, transcription, russian, tags) => {
    setEdit(id);
    setData({
      english: english,
      transcription: transcription,
      russian: russian,
      tags: tags,
    })
  }
  
  const cancel = () => {
    setList(list);
    setEdit(null)
  }

  return (
    <ol className={styles.ol}>
    {    
      list.map (item => (
        <li key={item.id} className={styles.li} english={item.english}>
          {
            edit === item.id ? 
            <>
                <input value={data.english} onChange={onChange} name='english'/>
                <input value={data.transcription} onChange={onChange} name='transcription'/>
                <input value={data.russian} onChange={onChange} name='russian'/>
                <input value={data.tags} onChange={onChange} name='tags'/>
              <Button variant="success" onClick={() => saveWord(item.id)} disabled={isEmpty}><BsFillCloudCheckFill/></Button>
              <Button variant="info" onClick={() => cancel()}><BsXCircle/></Button>
            </>
          :
            <>
              <div className={styles.word}>{item.english}</div>
              <div className={styles.word}>{item.transcription}</div>
              <div className={styles.word}>{item.russian}</div>
              <div className={styles.word}>{item.tags}</div>
              <Button variant="danger" onClick={() => deleteWord(item.id)}><BsFillTrashFill/></Button>
              <Button variant="primary" onClick={() => editWord(item.id, item.english, item.transcription, item.russian, item.tags)}><BsPencilSquare/></Button>
            </>
          }
        </li>
        ))
      }  
    </ol>
  )
}

export default AddedWords;
