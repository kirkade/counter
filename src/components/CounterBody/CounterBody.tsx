import {Number} from '../Number/Number'
import {Button} from "../Button/Button";
import styles from "./CounterBody.module.css";


type CounterBodyType = {
    counter: number
    maxvalue: number
    setCounter: (value: number) => void
    error:string
    startvalue:number
}

export const CounterBody = (props: CounterBodyType) => {

    const conditionReset = props.counter === 0
    const conditionInc = props.counter > props.maxvalue - 1

    const increment = () => {
        if (props.counter < props.maxvalue) {
            props.setCounter(props.counter + 1)
        }
    }

    const reset = () => {
        props.setCounter(props.startvalue)
        localStorage.clear()
    }


    return (
        <div className={styles.counter}>

            <Number counter={props.counter} maxvalue={props.maxvalue} error={props.error}/>

            <div className={styles.buttonsRow}>
                <Button
                    name={'inc'}
                    callback={increment}
                    class={styles.button}
                    disabled={conditionInc}
                />

                <Button
                    name={'reset'}
                    callback={reset}
                    class={styles.button}
                    disabled={conditionReset}
                />
            </div>


        </div>
    )
}