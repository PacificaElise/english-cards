import styles from './card.module.scss';

const Card = props => {
    const {english}=props

    return (
            <div className={styles.card}> 
                {english}
            </div>
        )
}

export default Card;
