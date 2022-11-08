import React, {ChangeEvent, useState} from 'react';
import styles from './SettingsBody.module.css'
import {Button} from "../Button/Button";

type SettingsBodyType = {
    counter?: number,
    maxvalue: number,
    startvalue: number
    error?: string;
    setStartValue: (value: number) => void,
    setMaxvalue: (value: number) => void,
    setError: (message: string) => void,
    setCounter: (value: number) => void

}

export const SettingsBody = (props: SettingsBodyType) => {

    let [buttonDis, setButtonDis] = useState<boolean>(true)

    const maxValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.currentTarget.valueAsNumber <= props.startvalue) {
            props.setError('incorrect value')
            setButtonDis(true)
        } else if (event.currentTarget.valueAsNumber <= -1) {
            props.setError('incorrect value')
            setButtonDis(true)
        } else if (event.currentTarget.valueAsNumber === props.startvalue) {
            props.setError('incorrect value')
            setButtonDis(true)
        }  else {
            props.setError('enter value and press Set')
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
        } else if (event.currentTarget.valueAsNumber === props.maxvalue) {
            props.setError('incorrect value')
            setButtonDis(true)
        } else {
            props.setError('enter value and press Set')
            setButtonDis(false)
        }
        props.setStartValue(event.currentTarget.valueAsNumber)
    }

    const SetHandler = () => {
        localStorage.setItem('maxValue', JSON.stringify(props.maxvalue))
        localStorage.setItem('startValue', JSON.stringify(props.startvalue))
        props.setCounter(props.startvalue)
        props.setError('')
        setButtonDis(true)
    }


    return (
        <div className={styles.settings}>

            <div className={styles.settingsValue}>
                <h3>max value</h3>
                <input
                    name='max-value'
                    type="number"
                    onChange={maxValueHandler}
                    value={props.maxvalue}
                    className={props.maxvalue < 0 ? styles.inputRed : ''}
                />

                <h3>start value</h3>
                <input
                    name='start-value'
                    type="number"
                    onChange={startValueHandler}
                    value={props.startvalue}
                    className={props.startvalue < 0 ? styles.inputRed : ''}
                />


            </div>
            <div>
                <Button name={'Set'} callback={SetHandler} class={styles.button} disabled={buttonDis}/>
            </div>


        </div>
    );
};

