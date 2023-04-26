import React, {useState} from 'react';
import {Clock} from "./Clock";


export default {
    title: 'Clock',
    component: Clock,
}

export const BaseAnalogExp = () => {
    return (
           <Clock mode={'analog'}/>
    )
}


export const BaseDigitalExp = () => {
    return (
        <Clock mode={'digital'}/>
    )
}


