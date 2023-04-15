import React, {ChangeEvent, useCallback, useMemo, useRef, useState} from 'react';
import {action} from "@storybook/addon-actions";

export default {
    title: 'UseState',
}

function generateData() {
    console.log("generateData")
    return 1
}

export const Ex1 = () => {
    console.log("Ex1")

    // const initValue = useMemo(generateData, [])

    const [counter, setCounter] = useState(generateData);

    // const changer = (state: number) => {
    //     return state + 1
    // }

    return (
        <>
            {/*<button onClick={() => setCounter(changer)}>+</button>*/}
            <button onClick={() => setCounter(state => state + 1)}>+</button>
            {counter}
        </>
    )
}
