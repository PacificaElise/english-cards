import React from 'react';
import styles from './commonStyles/App.module.scss';

import CardsSlider from './components/CardsSlider/CardsSlider';
import Training from './components/Training/Training';
import List from './components/List/List';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { cards } from './data';

function App() {
  return (
    <div className={styles.AppWrapper}> 
        <Header/>
        <div className={styles.main}>
        <CardsSlider></CardsSlider>
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
