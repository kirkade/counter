import React, {ChangeEvent} from 'react';
import styles from './SettingsBody.module.css'
import {Button} from "../Button/Button";

type SettingsBodyType = {
    counter: number,
    maxvalue: number,
    setCounter: (value: number) => void,
    setMaxvalue: (value: number) => void,
}

export const SettingsBody = (props:SettingsBodyType) => {

    const maxValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setMaxvalue(parseInt(event.currentTarget.value))
    }

    const counterValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setCounter(parseInt(event.currentTarget.value))
    }

    const SetHandler = () => {
        localStorage.setItem('maxValue', JSON.stringify(props.maxvalue))
        localStorage.setItem('counterValue', JSON.stringify(props.counter))
    }

    return (
        <div className={styles.settings}>

            <div>
                <h1>maxvalue</h1>
                <input name='max-value' type="number" onChange={maxValueHandler}/>

                <h1>startvalue</h1>
                <input name='counterValue' type="number" onChange={counterValueHandler}/>

                <Button name={'Set'} callback={SetHandler} class={styles.button}/>
            </div>

        </div>
    );
};

