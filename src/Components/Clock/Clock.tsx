import {useEffect, useState} from "react";
import './Clock.css';

type ClockPropsType = {}

export const Clock = (props: ClockPropsType) => {
    const [date, setData] = useState(new Date())
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    useEffect(() => {
        const timer = setInterval(() => {
            setData(new Date())
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <div className={"clock"}>
            <span>{hours}:</span>
            <span>{minutes}:</span>
            <span>{seconds}</span>
        </div>
    )
}


const Clock2 = () => {
    const [time, setTime] = useState({
        hours: new Date().getHours(),
        minutes: new Date().getMinutes(),
        seconds: new Date().getSeconds(),
    });

    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime({
                hours: new Date().getHours(),
                minutes: new Date().getMinutes(),
                seconds: new Date().getSeconds(),
            });
        }, 1000);

        return () => {
            clearInterval(intervalID);
        };
    }, []);

    const hourStyle = {
        transform: `rotate(${time.hours * 30 + time.minutes / 2}deg)`,
    };
    const minuteStyle = {
        transform: `rotate(${time.minutes * 6}deg)`,
    };
    const secondStyle = {
        transform: `rotate(${time.seconds * 6}deg)`,
    };

    return (
        <div className="clock">
            <div className="hour-hand" style={hourStyle}></div>
            <div className="minute-hand" style={minuteStyle}></div>
            <div className="second-hand" style={secondStyle}></div>
        </div>
    );
};

export default Clock2;
