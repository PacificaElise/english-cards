import React, {createContext, useState, useEffect} from 'react';
import Error from './components/Error/Error'

export const CollectionWordsContext = createContext();

export const CollectionWordsProvider = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
      fetch('http://itgirlschool.justmakeit.ru/api/words')
        .then(res => res.json())
        .then((json) => {
          setList(json);
        })
        .catch(() => {
            setError(true);
        }).finally(() => {
          setLoading(false);
        })
    }, []);

  return (
    <CollectionWordsContext.Provider value={{list, setList, isLoading, error}}>
      {
        error ?
        <Error /> :
        props.children
      }
    </CollectionWordsContext.Provider>
  )
}
