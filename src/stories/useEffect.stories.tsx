import React, {ChangeEvent, useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {action} from "@storybook/addon-actions";

export default {
    title: 'useEffect',
}

export const Ex1 = () => {
    console.log("Ex1")
    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1);

    useEffect(() => {
        console.log("useEffect every render")
        document.title = counter.toString()
    },)

    useEffect(() => {
        console.log("useEffect only first render (componentDidMount)")
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log("useEffect first render and every counter change")
        document.title = counter.toString()
    }, [counter])

    return (
        <>
            Hello, {counter} {fake}
            <button onClick={() => setFake(fake + 1)}>fake +</button>
            <button onClick={() => setCounter(counter + 1)}>counter +</button>
        </>
    )
}

export const SetTimeOutEx = () => {
    console.log("SetTimeOutEx")
    const [counter, setCounter] = useState(1);
    const [counter2, setCounter2] = useState(1);

    useEffect(() => {
        setTimeout(() => {
            console.log("setTimeout")
            document.title = counter.toString()
        }, 1000)
    }, [counter])

    useEffect(() => {
        setInterval(() => {
            console.log("setTimeout")
            setCounter2(state => state + 1)
        }, 1000)
    }, [])

    return (
        <>
            Count num: {counter2}
            <button onClick={() => setCounter(counter + 1)}>counter for document title</button>
        </>
    )
}

export const Clock = () => {
    const [clock, setClock] = useState(new Date());
    const hours = clock.getHours()
    const minutes = clock.getMinutes()
    const seconds = clock.getSeconds()

    useEffect(() => {
        const timing = setInterval(() => {
            console.log("setTimeout")
            setClock(new Date())
        }, 1000)
        return () => {
            clearInterval(timing)
        }
    }, [])

    return (
        <>
            <span>{hours}:</span>
            <span>{minutes}:</span>
            <span>{seconds}</span>
        </>
    )
}

export const Clock2 = () => {
    const [data, setData] = useState(new Date());
    const clock = data.toLocaleTimeString()

    useEffect(() => {
        const timing = setInterval(() => {
            console.log("setTimeout")
            setData(new Date())
        }, 1000)
        return () => {
            clearInterval(timing)
        }
    }, [])

    return (
        <>
            <span>{clock}</span>
        </>
    )
}

export const ResetEffectEx = () => {
    console.log("ResetEffectEx")
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        console.log('Effect occurred ' + counter)
        return () => {
            console.log('RESET EFFECT')
        }
    }, [counter])

    return (
        <>
            Count num: {counter}
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </>
    )
}

export const KeysTrackerEx = () => {
    console.log("KeysTrackerEx")
    const [text, setText] = useState('');

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }
        window.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [text])
    return (
        <>
            Typed text: {text}
        </>
    )
}

export const SetTimeoutEx = () => {
    console.log("KeysTrackerEx")
    const [text, setText] = useState('');

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setText('3 seconds passed')
        }, 3000)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [text])

    return (
        <>
            text: {text}
        </>
    )
}