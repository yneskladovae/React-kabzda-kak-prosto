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
    }, [clock])

    return (
        <>
            <span>{hours}:</span>
            <span>{minutes}:</span>
            <span>{seconds}</span>
        </>
    )
}