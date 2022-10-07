import {Number} from './Number'
import {Button} from "./Button";
import {useState} from "react";
import styles from "./CounterBody.module.css";

const MAXVALUE = 5
const START = 0
const STEP = 1


export const CounterBody = () => {

    let [num, setNum] = useState<number>(START)

    const increment = () => {
        if (num < MAXVALUE) {
            setNum(num => num + STEP)
        }
    }

    const reset = () => {
        setNum(START)
    }

    const incClass = num < MAXVALUE ? styles.button : styles.buttonStop
    const resetClass = num < START + 1 ? styles.buttonStop : styles.button

    const conditionInc = num > MAXVALUE - 1
    const conditionReset = num < START + 1

    return (
        <div>
            <Number num={num} maxvalue={MAXVALUE}/>

            <div className={styles.buttonsRow}>
                <Button
                    name={'inc'}
                    callback={() => increment()}
                    class={incClass}
                    disabled={conditionInc}
                />

                <Button
                    name={'reset'}
                    callback={() => reset()}
                    class={resetClass}
                    disabled={conditionReset}
                />
            </div>

        </div>
    )
}