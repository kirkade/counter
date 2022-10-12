import styles from './Number.module.css'


type NumberType = {
    num: number;
    maxvalue: number,
}

export const Number = (props: NumberType) => {

    return (
        <div className={props.num > props.maxvalue - 1 ? styles.numStop : styles.num}>
            {props.num >= props.maxvalue ? <p style={{fontSize: "25px"}} >{'START VALUE BIGGER THAN MAXVALUE OR EQUAL'}</p> : <p>{props.num}</p>}
            {/*<p>{props.num}</p>*/}
        </div>
    )
}