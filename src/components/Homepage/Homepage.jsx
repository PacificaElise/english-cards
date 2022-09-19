import learnEnglish from '../imgs/learnEnglish.png'
import React from 'react';
import styles from './homepage.module.scss'

const Homepage = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <h1 className={styles.title}>
            Small steps, Big results
          </h1>
          <p>
            Do you speak English? <br />
            Foreign languages open the gates to the culture of different countries and are the most important means of communication between people. <br />
            Don’t stop dreaming, never stop believing.
          </p>
        </div>
      <div className={styles.container}>
        <div className={styles.background}>
        </div>
        <img src={learnEnglish} alt='девушка с книгой' className={styles.img}></img>
      </div>
      </div>
    </>
  )
}

export default Homepage;
