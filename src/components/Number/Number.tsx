import styles from './Number.module.css'


type NumberType = {
    counter: number;
    maxvalue: number,
    error: string
}

export const Number = (props: NumberType) => {

    return (

        <div className={props.counter > props.maxvalue  ? styles.numStop : styles.num}>
            {
                props.error
                    ? props.error
                    : <div className={styles.counter}>{props.counter}</div>
            }

        </div>
    )
}