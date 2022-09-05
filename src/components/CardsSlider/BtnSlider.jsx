import React from 'react';
import styles from './cardsSlider.module.scss';
import leftArrow from "./icons/arrow-left.png"
import rightArrow from "./icons/arrow-right.png"

export default function BtnSlider ({direction, moveSlide}) {
    return(
        <button 
        onClick={moveSlide}
        className={`${styles.btnSlide} direction === 'next' ? ${styles.btnNext} : ${styles.btnPrev}`}>
                <img src = {direction === "next" ? rightArrow : leftArrow} alt = 'arrow'/>
        </button>
    )
}