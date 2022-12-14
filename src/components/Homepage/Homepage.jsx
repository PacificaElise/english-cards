import learnEnglish from '../imgs/learnEnglish.png'
import React from 'react';
import styles from './homepage.module.scss'

const Homepage = () => {
  return (
    <>
      <section className={styles.HomepageWrapper}>
        <article className={styles.text}>
          <h1 className={styles.title}>
            Small steps, Big results
          </h1>
          <p>
            Do you speak English? <br />
            Foreign languages open the gates to the culture of different countries and are the most important means of communication between people. <br />
            Don’t stop dreaming, never stop believing.
          </p>
        </article>
        <div className={styles.HomepageContainer}>
          <div className={styles.background}>
          </div>
          <img src={learnEnglish} alt='девушка с книгой' className={styles.img}></img>
        </div>
      </section>
    </>
  )
}

export default Homepage;
