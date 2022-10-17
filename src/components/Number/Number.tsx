import styles from './Number.module.css'


type NumberType = {
    counter: number;
    maxvalue: number,
}

export const Number = (props: NumberType) => {

    return (
        <div className={props.counter > props.maxvalue - 1 ? styles.numStop : styles.num}>
            {props.counter >= props.maxvalue ? <p style={{fontSize: "25px"}} >{'The counter reach maxvalue'}</p> : <p>{props.counter}</p>}
            {/*<p>{props.num}</p>*/}
        </div>
    )
}