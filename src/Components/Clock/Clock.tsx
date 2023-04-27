import {FC, useEffect, useState} from "react";
import './Clock.css';

type ClockPropsType = {
    mode?: 'digital' | 'analog'
}

export const Clock = (props: ClockPropsType) => {
    const [date, setData] = useState(new Date())
    // const hours = date.getHours()
    // const minutes = date.getMinutes()
    // const seconds = date.getSeconds()

    useEffect(() => {
        const timer = setInterval(() => {
            setData(new Date())
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <>
            {props.mode === 'digital'
                ? <DigitalClockView date={date}/>
                : <AnalogClockView date={date}/>
            }
        </>
    )
}

type ClockViewPropsType = {
    date: Date
}

export const DigitalClockView: FC<ClockViewPropsType> = ({date}) => {
    return <div className={"clock"}>
        <span>{date.getHours()}:</span>
        <span>{date.getMinutes()}:</span>
        <span>{date.getSeconds()}</span>
    </div>
}

export const AnalogClockView: FC<ClockViewPropsType> = ({date}) => {
    const secondsStyle = {
        transform: `rotate(${date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${date.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${date.getHours() * 30}deg)`
    };

    return (
        <div className={"clock"}>
            <div className={"analog-clock"}>
                <div className={"dial seconds"} style={secondsStyle}/>
                <div className={"dial minutes"} style={minutesStyle}/>
                <div className={"dial hours"} style={hoursStyle}/>
            </div>
        </div>
    )
}
