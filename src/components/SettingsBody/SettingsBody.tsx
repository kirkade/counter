import React, {ChangeEvent, useState} from 'react';
import styles from './SettingsBody.module.css'
import {Button} from "../Button/Button";

type SettingsBodyType = {
    counter: number,
    maxvalue: number,
    startvalue: number
    setStartValue: (value: number) => void,
    setMaxvalue: (value: number) => void,
    setError: (message: string) => void,
    setCounter: (value: number) => void
}

export const SettingsBody = (props: SettingsBodyType) => {

    let [buttonDis, setButtonDis] = useState<boolean>(false)

    const maxValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.currentTarget.valueAsNumber <= -1) {
            props.setError('incorrect value')
            setButtonDis(true)
        } else if (event.currentTarget.valueAsNumber <= props.startvalue) {
            props.setError('incorrect value')
            setButtonDis(true)
        } else {
            props.setError('')
            setButtonDis(false)
        }

        props.setMaxvalue(event.currentTarget.valueAsNumber)
    }

    const startValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.currentTarget.valueAsNumber < 0) {
            props.setError('incorrect value')
            setButtonDis(true)

        } else if (event.currentTarget.valueAsNumber >= props.maxvalue) {
            props.setError('incorrect value')
            setButtonDis(true)
        } else {
            props.setError('')
            setButtonDis(false)
        }

        props.setStartValue(event.currentTarget.valueAsNumber)
    }

    const SetHandler = () => {
        localStorage.setItem('maxValue', JSON.stringify(props.maxvalue))
        localStorage.setItem('startValue', JSON.stringify(props.startvalue))
        props.setCounter(props.startvalue)
    }


    return (
        <div className={styles.settings}>

            <div className={styles.settingsValue}>
                <h2>max value</h2>
                <input name='max-value' type="number" onChange={maxValueHandler}/>

                <h2>start value</h2>
                <input name='start-value' type="number" onChange={startValueHandler}/>


            </div>

            <Button name={'Set'} callback={SetHandler} class={styles.button} disabled={buttonDis}/>

        </div>
    );
};

