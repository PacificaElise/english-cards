import React, {useState} from 'react';
import styles from './addedWords.module.scss';
import { Button } from 'react-bootstrap';
import { BsFillTrashFill, BsFillCloudCheckFill, BsPencilSquare, BsXCircle } from "react-icons/bs";
import { observer } from 'mobx-react-lite';

const AddedWords = observer(({ctrl}) => {

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

  const saveWord = async (id) => {
    const newWord = {
      english: data.english,
      transcription: data.transcription,
      russian: data.russian,
      tags: data.tags
    }
    try {
      const res = await fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/update`, {
        method: 'POST',
        body: JSON.stringify(newWord)
      });
      if(res.ok) {
        let newList = [...ctrl.list].map (item => {
          if (item.id === id) {
            item.english = data.english;
            item.transcription = data.transcription;
            item.russian = data.russian;
            item.tags = data.tags;
          }
          return item;
        });
        ctrl.list = newList;
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
    ctrl.list = ctrl.list;
    setEdit(null)
  }

  return (
    <ol className={styles.ol}>
    {    
      ctrl.list.map (item => (
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
              <Button variant="danger" onClick={() => ctrl.deleteWord(item.id)}><BsFillTrashFill/></Button>
              <Button variant="primary" onClick={() => editWord(item.id, item.english, item.transcription, item.russian, item.tags)}><BsPencilSquare/></Button>
            </>
          }
        </li>
        ))
      }  
    </ol>
  ) 
}
);

export default AddedWords;
