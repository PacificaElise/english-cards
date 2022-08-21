import Card from './components/Card/Card';
import Training from './components/Training/Training';
import List from './components/List/List';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import styles from './commonStyles/App.module.scss';

const cards = [
  {id:1,english:"pineapple",transcription:"[ˈpaɪnæpl]",russian:'ананас',tag:"fruits",tags:"Array",tags_json:null, isSelected:true},
  {id:2,english:"apple",transcription:"[ˈæpl]",russian:"яблоко",tag:"fruits",tags:"Array",tags_json:null},
  {id:3,english:"grape",transcription:"[greɪp]",russian:"виноград",tag:"fruits",tags:"Array",tags_json:null},
];

function App() {
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
              isSelected={card.isSelected}
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
