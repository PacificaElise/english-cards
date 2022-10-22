import React, {useState} from 'react';
import styles from './addedWords.module.scss';
import { Button } from 'react-bootstrap';
import { BsFillTrashFill, BsFillCloudCheckFill, BsPencilSquare, BsXCircle } from "react-icons/bs";

const AddedWords = props => {
  const {list, setList}=props;

  const [data, setData]=useState({
    english: '',
    transcription: '',
    russian: '',
    rustag: '',
  });

  const [edit, setEdit] = useState(null);
  const [isEmpty, setEmpty] = useState(false);

  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  }

  const deleteWord = (id) => {
    let isDelete = window.confirm("Вы действительно хотите удалить это слово?");
    if (isDelete) {
      let newList = [...list].filter(item => item.id!==id);
      setList(newList)
    }
  }

  const saveWord = (id) => {
    let newList = [...list].map (item => {
      if(item.id === id) {
            item.english = data.english;
            item.transcription = data.transcription;
            item.russian = data.russian;
            item.rustag = data.rustag;
      }
        return item;
    });
    setList(newList);
    setEdit(null)
  }

  const editWord = (id, english, transcription, russian, rustag) => {
    setEdit(id);
    setData({
      english: english,
      transcription: transcription,
      russian: russian,
      rustag: rustag,
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
                <input value={data.rustag} onChange={onChange} name='rustag'/>
              <Button variant="success" onClick={() => saveWord(item.id)} disabled={isEmpty}><BsFillCloudCheckFill/></Button>
              <Button variant="info" onClick={() => cancel()}><BsXCircle/></Button>
            </>
          :
            <>
              <div className={styles.word}>{item.english}</div>
              <div className={styles.word}>{item.transcription}</div>
              <div className={styles.word}>{item.russian}</div>
              <div className={styles.word}>{item.rustag}</div>
              <Button variant="danger" onClick={() => deleteWord(item.id)}><BsFillTrashFill/></Button>
              <Button variant="primary" onClick={() => editWord(item.id, item.english, item.transcription, item.russian, item.rustag)}><BsPencilSquare/></Button>
            </>
          }
        </li>
        ))
      }  
    </ol>
  )
}

export default AddedWords;
