import React, { useState, useEffect } from 'react';
import Card from './Card/Card';
import styles from './cardsSlider.module.scss';
import style from '../../commonStyles/loading.module.scss';
import BtnSlider from './BtnSlider';


const CardsSlider = () => {
    const [isLoading, setLoading] = useState(true);
    const [cards, setCards] = useState ([]);

    useEffect(()=> {
        setLoading(true);
        fetch('https://63221d31fd698dfa29076399.mockapi.io/Tags')
            .then(res => res.json())
            .then((json) => {
                setCards(json);
            })
            .catch((err) => {
                console.warn(err);
                alert('Ошибка при получении данных');
            }).finally(() => {
                setLoading(false);
            })
    }, []);

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

    const objectCard = cards.map((obj) => {
        Card.defaultProps = {
            english: 'english', 
            russian: 'russian', 
            transcription:'transcription', 
            tag:'tag'
        }
        
        return (
            <Card
                key={obj.id}
                english={obj.english}
                russian={obj.russian}
                transcription={obj.transcription}
                img={obj.img}
                tag={obj.tag}
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
                </>
            }
        </div>
        );
};

export default CardsSlider;
