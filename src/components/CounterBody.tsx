import {Number} from './Number'
import {Button} from "./Button";
import {ChangeEvent, EventHandler, useState} from "react";
import styles from "./CounterBody.module.css";


export const CounterBody = () => {

    let [MAXVALUE,setMAXVALUE] = useState<number>(5)
    const [START,setSTART] = useState<number>(0)
    const [STEP,setSTEP] = useState<number>(1)


    const increment = () => {
        if (START < MAXVALUE) {
            setSTART(num => START + STEP)
        }
    }

    const reset = () => {
        setSTART(0)
    }

    const incClass = START < MAXVALUE ? styles.button : styles.buttonStop
    const resetClass = START > MAXVALUE ? styles.buttonStop : styles.button

    const conditionInc = START > MAXVALUE - 1
    const conditionReset = START === 0

    const maxValueHandler = (event:ChangeEvent<HTMLInputElement>) => {
        setMAXVALUE(parseInt(event.currentTarget.value))
    }

    const startValueHandler = (event:ChangeEvent<HTMLInputElement>) => {
        setSTART(parseInt(event.currentTarget.value))
    }

    const stepValueHandler = (event:ChangeEvent<HTMLInputElement>) => {
        setSTEP(parseInt(event.currentTarget.value))
    }


    return (
        <div>


            <h1>maxvalue</h1>
            <input name='maxvalue' type="text" onChange={maxValueHandler}/>

            <h1>startvalue</h1>
            <input name='startvalue' type="text" onChange={startValueHandler}/>

            <h1>stepvalue</h1>
            <input name='stepvalue' type="text" onChange={stepValueHandler}/>

            <Number num={START} maxvalue={MAXVALUE}/>

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