import React, {useState} from 'react';
import styles from './exam.module.scss';
import { questions } from '../../data'


const Result = (props) => {
    const {correct} = props;

    return (
        <div className={styles.result}> 
            <img className={styles.congrats} src='https://cdn-icons-png.flaticon.com/512/7626/7626666.png' alt='congratulation'/>
            <h3>
                Вы ответили правильно на {correct} из {questions.length} вопросов
            </h3>
            <a href="/exam">
                <button>Попробовать снова</button>
            </a>
        </div>)
}

const Game = (props) => {
    const {stage, question, chooseVariant} = props;
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
    <div className={styles.examContainer}> 
        {
            stage !== questions.length ? 
            <Game question={question} chooseVariant={chooseVariant} stage={stage} /> :
            <Result correct={correct}/>
        }
    </div>)
}

export default Exam;
