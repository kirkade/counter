import styles from './Number.module.css'


type NumberType = {
    num: number;
    maxvalue: number,
}

export const Number = (props: NumberType) => {

    return (
        <div className={props.num > props.maxvalue - 1 ? styles.numStop : styles.num}>
            <p>{props.num}</p>
        </div>
    )
}