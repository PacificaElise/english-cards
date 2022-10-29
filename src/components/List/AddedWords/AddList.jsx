import React, {useContext} from 'react';
import {useInput} from '../../customHooks/Validation'
import { Button,InputGroup, Form } from 'react-bootstrap';
import { BsPlusCircleDotted } from "react-icons/bs";
import styles from './addList.module.scss';
import { CollectionWordsContext } from '../../../CollectionWordsContext';

function AddList() {
  const {setList, list} = useContext(CollectionWordsContext);

  const english = useInput('', {isEmpty: true, isNumber: false, isRU: false});
  const transcription = useInput('', {isEmpty: true, isNumber: false, isRU: false});
  const russian = useInput('', {isEmpty: true, isNumber: false});
  const tags = useInput('', {isEmpty: true});  

  const addWord = async () => {
    const newWord = {
      english: english.value,
      transcription: transcription.value,
      russian: russian.value,
      tags: tags.value
    }
    try {
      const res = await fetch(`http://itgirlschool.justmakeit.ru/api/words/add`, {
        method: 'POST',
        body: JSON.stringify({
          english: english,
          transcription: transcription,
          russian: russian,
          tags: tags
        })
      });
      if (res.ok) {
        list.push(newWord);
        setList([...list]);
      }
    } catch(e) {
      alert(`Ошибка соединения с сервером. ${e}`);
    } finally {
      english.setValue('');
      transcription.setValue('');    
      russian.setValue('');
      tags.setValue(''); 
    } 
  }

  return (
    <>
      <div className={styles.error}>
        {((english.isDirty && english.isNumber) || (transcription.isDirty && transcription.isNumber) || (russian.isDirty && russian.isNumber)) && <p>Поля не должны содержать цифры!</p>}
        {((english.isDirty && english.isRU) || (transcription.isDirty && transcription.isRU)) && <p>Поля с иностранным словом и транскрипцией не должны содержать русские буквы!</p>}
      </div>
      <Form className={styles.form}>
        <InputGroup className={styles.inputs}>
          <label>
          <input style={{'borderColor': (english.isDirty && english.isEmpty) && 'red'}}
              placeholder="Введите новое слово" 
              autoFocus
              value={english.value}
              onChange={(e) => english.onChange(e)}
              onBlur={(e) => english.onBlur(e)}
              name='english'
              />
          </label>
          <label>
            <input style={{'borderColor': (transcription.isDirty && transcription.isEmpty) && 'red'}}
              placeholder="Введите транскрипцию"
              value={transcription.value}
              onChange={(e) => transcription.onChange(e)}
              onBlur={(e) => transcription.onBlur(e)}
              name='transcription'
            />
          </label>
          <label>
          <input style={{'borderColor': (russian.isDirty && russian.isEmpty) && 'red'}}
              placeholder="Введите перевод"
              value={russian.value}
              onChange={(e) => russian.onChange(e)}
              onBlur={(e) => russian.onBlur(e)}
              name='russian'
              />
          </label>
          <label>
          <input style={{'borderColor': (tags.isDirty && tags.isEmpty) && 'red'}}
              placeholder="Введите категорию"
              value={tags.value}
              onChange={(e) => tags.onChange(e)}
              onBlur={(e) => tags.onBlur(e)}
              name='ru'
              />
          </label>
          </InputGroup>
          <Button variant="warning" onClick={() => addWord()} disabled = {!english.inputValid || !transcription.inputValid || !russian.inputValid || !tags.inputValid}><BsPlusCircleDotted/></Button>
      </Form>
    </>
  )
} 

export default AddList;
