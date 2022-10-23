import React, { useState, useRef, useContext } from 'react';
import Card from './Card/Card';
import styles from './cardsSlider.module.scss';
import style from '../../commonStyles/loading.module.scss';
import BtnSlider from './BtnSlider';
import { CollectionWordsContext} from '../../CollectionWordsContext';

const CardsSlider = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const [openCards, setOpenCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const buttonRef = useRef();
  const {isLoading, list} = useContext(CollectionWordsContext);

  const flipCard = (id) => () => {
    setOpenCards(openCards => [...openCards, id]);
    setMoves(prevMove => prevMove + 1)
  }

  const handleRestart = () => {
    setOpenCards([]);
    setMoves(0);
    setSlideIndex(1);
  }

  const nextSlide = () => {
    if(slideIndex !== list.length) {
        setSlideIndex(slideIndex+1)
    }
    else if (slideIndex === list.length) {
        setSlideIndex(1)
    }
  };

  const prevSlide = () => {
    if(slideIndex !== 1) {
        setSlideIndex(slideIndex-1)
    }
    else if (slideIndex === 1) {
        setSlideIndex(list.length)
    }
  };
  
  const objectCard = list.map((obj) => {
    Card.defaultProps = {
      english: 'english', 
      russian: 'russian', 
      transcription:'transcription', 
      tags:'tags'
    }
  
  let isFlipped = false;
  if (openCards.includes(obj.id)) {
    isFlipped = true;
  }

  return (
    <Card ref={buttonRef}
      key={obj.id}
      id={obj.id}
      english={obj.english}
      russian={obj.russian}
      transcription={obj.transcription}
      img={obj.img}
      tags={obj.tags}
      isFlipped={isFlipped}
      flipCard={flipCard}
    />
  )      
  })

  return (
    <div className={styles.slider}>
      {isLoading ? 
        <div className={style.loading}>
          {
          [...Array(4)].map((_, index) => 
              <div key={index} className={style.loadingBar}>
              </div>)
          } 
        </div> : 
        <>
        <p className={styles.moves}>Изучено слов: {moves}</p>
        <div className={styles.sliderWrapper}>
          <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
          <div className={styles.sliderContainer}>
                  {objectCard[slideIndex - 1]}
          </div>         
          <BtnSlider moveSlide={nextSlide} direction={"next"}/>
        </div>
        <div className={styles.counter}>
          <span>{slideIndex}</span><span>/</span><span>{list.length}</span> 
        </div>
        <button className={styles.btnRestart} onClick={handleRestart}><strong>Начать заново</strong></button>
        </>
      }
    </div>
  );
};

export default CardsSlider;
