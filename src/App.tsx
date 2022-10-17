import React, {useEffect, useState} from 'react';

import './App.css';
import {CounterBody} from "./components/CounterBody/CounterBody";
import {SettingsBody} from "./components/SettingsBody/SettingsBody";

function App() {

    let [counter, setCounter] = useState<number>(0)
    let [maxvalue, setMaxvalue] = useState<number>(5)

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
            <SettingsBody counter={counter} maxvalue={maxvalue} setCounter={setCounter} setMaxvalue={setMaxvalue}/>
            <CounterBody counter={counter} maxvalue={maxvalue} setCounter={setCounter}/>
        </div>
    );
}

export default App;
