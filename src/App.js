import React, {useState} from 'react';

import Card from './components/Card/Card';
import Training from './components/Training/Training';
import List from './components/List/List';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import pineapple from '../src/imgs/pineapple.png';
import apple from '../src/imgs/apple.png'
import grape from '../src/imgs/grape.png'

import styles from './commonStyles/App.module.scss';

const cards = [
  {id:1,english:"pineapple",transcription:"[ˈpaɪnæpl]",russian:'ананас',img: pineapple, tag:"fruits",tags:"Array",tags_json:null},
  {id:2,english:"apple",transcription:"[ˈæpl]",russian:"яблоко",img: apple,tag:"fruits",tags:"Array",tags_json:null},
  {id:3,english:"grape",transcription:"[greɪp]",russian:"виноград",img: grape,tag:"fruits",tags:"Array",tags_json:null},
];

function App() {
  const [state, setState] = useState ({
    id: 0,
    english: "",
    russian: "",
    transcription: "",
    img: "",
    tag: "",
    cards: []
  });

  return (
    <div className={styles.AppWrapper}> 
        <Header/>
        <div className={styles.main}>
          <div className={styles.cardWrapper}>
          {
            cards.map((card)=>
            <Card 
              key={card.id}
              english={card.english}
              russian={card.russian}
              transcription={card.transcription}
              img={card.img}
              tag={card.tag}
              />)
          }
          </div>
          {
            cards.map((card)=>
            <List 
              id={card.id}
              key={card.id}
              english={card.english}
              russian={card.russian}
              transcription={card.transcription}
              tag={card.tag}
              />
            )
          }        
            <Training/>
          </div>
        <Footer/>
    </div>

  )
}

export default App;
