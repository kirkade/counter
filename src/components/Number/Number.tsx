import styles from './Number.module.css'


type NumberType = {
    counter: number;
    maxvalue: number,
    error?: string
}

export const Number = (props: NumberType) => {

    let conditonStyle = props.counter === props.maxvalue ? styles.counterStop : styles.counter

    return (
        <div className={styles.num}>
            {
                props.error
                    ? <div className={styles.error}>{props.error}</div>
                    : <div className={conditonStyle}>{props.counter}</div>
            }
        </div>
    )
}