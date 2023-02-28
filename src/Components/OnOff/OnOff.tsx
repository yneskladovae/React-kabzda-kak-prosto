import {useState} from "react";

type OnOffPropsType = {
    value: boolean
    onChange: (value: boolean) => void
}

export const OnOff = (props: OnOffPropsType) => {
    return (
        <div className={"on-off"}>
            <div>
                <button onClick={(() => props.onChange(true))} style={{background: props.value ? 'green' : ''}}>On</button>
                <button onClick={(() => props.onChange(false))} style={{background: props.value ? '' : 'red'}}>Off</button>
                <div style={{background: props.value ? 'green' : 'red'}}></div>
            </div>
        </div>
    )
}