import React, {useState} from 'react';
import Card from './Card/Card';
import styles from './cardsSlider.module.scss';
import { cards } from '../../data';
import BtnSlider from './BtnSlider';


const CardsSlider = () => {

    const [slideIndex, setSlideIndex] = useState(1);

    const nextSlide = () => {
        if(slideIndex !== cards.length) {
            setSlideIndex(slideIndex+1)
        }
        else if (slideIndex === cards.length) {
            setSlideIndex(1)
        }
    };

    const prevSlide = () => {
        if(slideIndex !== 1) {
            setSlideIndex(slideIndex-1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(cards.length)
        }
    };

    const objectCard = cards.map((card) => {
        Card.defaultProps = {
            english: 'english', 
            russian: 'russian', 
            transcription:'transcription', 
            tag:'tag'
          }
        return (
            <Card
                key={card.id}
                english={card.english}
                russian={card.russian}
                transcription={card.transcription}
                img={card.img}
                tag={card.tag}
             />
        )      
    })

    return (
        <div className={styles.slider}>
            <div className={styles.sliderWrapper}>
                <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
                <div className={styles.sliderContainer}>
                        {objectCard[slideIndex - 1]}
                </div>         
                <BtnSlider moveSlide={nextSlide} direction={"next"}/>
            </div>
            <div className={styles.counter}>
                <span>{slideIndex}</span><span>/</span><span>{cards.length}</span> 
            </div>
        </div>
        );
};

export default CardsSlider;
