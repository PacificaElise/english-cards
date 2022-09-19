import React, {useState, useEffect} from 'react';
import styles from './exam.module.scss';
import style from '../../commonStyles/loading.module.scss';

const Result = (props) => {
const {correct, questions} = props;

return (
  <div className={styles.result}> 
    <img className={styles.congrats} src='https://cdn-icons-png.flaticon.com/512/7626/7626666.png' alt='congratulation'/>
    <h3>
        Вы ответили правильно на {correct} из {questions.length} вопросов
    </h3>
    <a href="/exam">
        <button className={styles.againBtn}>Попробовать снова</button>
    </a>
  </div>)
}

const Game = (props) => {
const {stage, question, questions, chooseVariant} = props;
const persent = Math.round((stage / questions.length) * 100);

return (
  <>
    <div className={styles.progressBar}>
      <div className={styles.progress} style={{ width: `${persent}%` }}></div>
    </div>
    <h2 className={styles.question}>{question.title}</h2>
    <ul className={styles.answersUl}>
      {
        question.variants.map((variant, index) => 
        <li onClick={() => chooseVariant(index)} className={styles.answer} key={variant}>
            {variant}
        </li>)
      }
    </ul>
  </>
)
}

const Exam = () =>  {
const [questions, setQuestions] = useState ([]);
const [isLoading, setLoading] = useState(true);

useEffect(()=> {
setLoading(true);
fetch('https://63221d31fd698dfa29076399.mockapi.io/Questions')
    .then(res => res.json())
    .then((json) => {
        setQuestions(json);
    })
    .catch((err) => {
        console.warn(err);
        alert('Ошибка при получении данных');
    }).finally(() => {
        setLoading(false);
    })
}, []);

const [stage, setStage] = useState(0);
const [correct, setCorrect] = useState(0);
const question = questions[stage];
const chooseVariant = (index) => {
setStage(stage + 1);

if (index === question.correct) {
  setCorrect(correct + 1);
}
};

return (
  <>
    {isLoading ? 
      <div className={style.loading}>
        {
        [...Array(4)].map((_, index) => 
            <div key={index} className={style.loadingBar}>
            </div>)
        } 
      </div> :
      <div className={styles.examContainer}> 
        { 
          stage !== questions.length ? 
          <Game question={question} questions={questions} chooseVariant={chooseVariant} stage={stage} /> :
          <Result correct={correct} questions={questions}/>
        }
      </div>
    }
  </>
  )
}

export default Exam;
