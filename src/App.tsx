import React, {useEffect, useState} from 'react';

import './App.css';
import {CounterBody} from "./components/CounterBody/CounterBody";
import {SettingsBody} from "./components/SettingsBody/SettingsBody";

function App() {

    let [maxvalue, setMaxvalue] = useState<number>(5)
    let [startvalue,setStartValue] = useState<number>(0)
    let [counter, setCounter] = useState<number>(startvalue)
    let [error,setError] = useState<string>('')
    let [message,setMessage] = useState<string>('')

    useEffect(() => {
        let counterAsString = localStorage.getItem('counterValue')
        if (counterAsString) {
            let newValue = JSON.parse(counterAsString)
            setCounter(newValue)
        }
    }, [])

    useEffect(() => {
        let valueAsString = localStorage.getItem('maxValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setMaxvalue(newValue)
        }
    }, [])



    return (
        <div className={'App'}>
            <SettingsBody
                counter={counter}
                maxvalue={maxvalue}
                startvalue={startvalue}
                error={error}
                setStartValue={setStartValue}
                setMaxvalue={setMaxvalue}
                setError={setError}
                setCounter={setCounter}
                setMessage={setMessage}
            />
            <CounterBody
                counter={counter}
                maxvalue={maxvalue}
                setCounter={setCounter}
                error={error}
                startvalue={startvalue}
                message={message}
            />
        </div>
    );
}

export default App;
