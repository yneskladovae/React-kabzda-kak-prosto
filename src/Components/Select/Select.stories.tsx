import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Select} from "./Select";

export default {
    title: 'Select',
    component: Select,
}

export const WithValue = () => {
    const [value, setValue] = useState('2');
    const onChange = (value:any) => {
        setValue(value)
    }

    return <>
        <Select
            value={value}
            items={[
                {value: '1', title: "Dimych"},
                {value: '2', title: "Victor"},
                {value: '3', title: "Stas"}
            ]}
            onChange={onChange}
        />
    </>
}

export const WithoutValue = () => {
    const [value, setValue] = useState(null);
    const onChange = (value:any) => {
        setValue(value)
    }
    return <>
        <Select
            value={value}
            items={[
                {value: '1', title: "Dimych"},
                {value: '2', title: "Victor"},
                {value: '3', title: "Stas"}
            ]}
            onChange={onChange}
        />
    </>
}